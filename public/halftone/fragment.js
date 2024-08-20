const halftoneFragmentShader = `
uniform vec3 uColor;
uniform vec2 uResolution;
uniform float uShadowRepetitions;
uniform vec3 uShadowColor;
uniform float uLightRepetitions;
uniform vec3 uLightColor;

varying vec3 vNormal;
varying vec3 vPosition;

vec3 ambientLight(vec3 lightColor, float lightIntensity)
{
    return lightColor * lightIntensity;
}
    vec3 directionalLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition, vec3 viewDirection, float specularPower)
{
    vec3 lightDirection = normalize(lightPosition);
    vec3 lightReflection = reflect(- lightDirection, normal);

    // Shading
    float shading = dot(normal, lightDirection);
    shading = max(0.0, shading);

    // Specular
    float specular = - dot(lightReflection, viewDirection);
    specular = max(0.0, specular);
    specular = pow(specular, specularPower);

    return lightColor * lightIntensity * (shading + specular);
}

vec3 halftone(vec3 color, float repetitions, vec3 direction, float low, float high, vec3 pointColor, vec3 normal)
{
    float intensity = dot(normal, direction);
    intensity = smoothstep(low, high, intensity);

    vec2 uv = gl_FragCoord.xy / uResolution.y;
    uv *= repetitions;
    uv = mod(uv, 1.0);

    float point = distance(uv, vec2(.5));
    point = 1.0 - step(.5 * intensity, point);

    return color = mix(color, pointColor, point * .9);
}

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);
    vec3 color = uColor;

    // Light
    vec3 light = vec3(0.0);
    light += ambientLight(
        vec3(1.0), // Color
        1.0 // Intensity
    );

    light += directionalLight(
        vec3(1.0), // Color
        1.0, // Intensity
        normal, // Normal
        vec3(1.0, 1.0, 0.0), // Direction
        viewDirection, // Normal
        1.0 // Specular
    );

    color *= light;

    // Halftone
    color = halftone(
        color, // Input Color
        uShadowRepetitions, //Repetitions
        vec3(0.0, -1.0, 0.0), // Direction
        -0.8, // Low
        1.5, // High
        uShadowColor, // Point color
        normal // Normal
    );

    color = halftone(
        color, // Input Color
        uLightRepetitions, //Repetitions
        vec3(1.0, 1.0, 0.0), // Direction
        0.5, // Low
        1.5, // High
        uLightColor, // Point color
        normal // Normal
    );

    // Final color
    gl_FragColor = vec4(color, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}`;

export default halftoneFragmentShader;
