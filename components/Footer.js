export default function Footer() {
  return (
    <div className="px-10 py-24 text-black bg-white rounded-tl-3xl rounded-tr-3xl">
      <div className="flex">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl text-yellow-400">Times Four</h3>
          <div>
            <p>John M. Keynesplein 12-46, Amsterdam</p>
            <p>
              <a href="">+31 6 23 52 19 80</a>
            </p>
            <p>
              <a href="mailto:hello@timesfour.nl">hello@timesfour.nl</a>
            </p>
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 felx-col">
          <div>
            <h3 className="text-2xl text-yellow-400">Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms &amp; Conditions</p>
          </div>
          <div>
            <h3 className="text-2xl text-yellow-400">Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms &amp; Conditions</p>
          </div>
          <div>
            <h3 className="text-2xl text-yellow-400">Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms &amp; Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
