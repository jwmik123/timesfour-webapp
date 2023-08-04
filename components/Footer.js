import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-black bg-[#EFEFEF] [clip-path:inset(0)] mt-[8.3vw]">
      <div className="sticky bottom-0 top-[100%] translate-y-[-100%] mb-[-200%]">
        <div>
          <div className="flex px-10 mb-10">
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
            <div className="flex justify-between w-full text-gray-600 md:w-1/2 felx-col">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-yellow-400">Legal</h3>
                <ul>
                  <li>
                    <Link href="/privacy-policy">
                      <span className="hover:translate-x-5">
                        Privacy Policy
                      </span>
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="relative block nav-link">
                      <span>Terms &amp; Conditions</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-yellow-400">Handige links</h3>
                <p>Nieuwsbrief</p>
                <p>Vacatures</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-yellow-400">Socials</h3>
                <p>LinkedIn</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>

          <span className="font-rift text-[24.4vw] leading-[20vw] font-bold pointer-events-none select-none translate-y-22">
            TIMES FOUR
          </span>
        </div>
      </div>
    </footer>
  );
}
