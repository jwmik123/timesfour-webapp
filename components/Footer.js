export default function Footer() {
  return (
    <footer className="-z-50 px-10 pt-20 overflow-hidden text-black bg-[#EFEFEF] sticky bottom-0">
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
            <p>Privacy Policy</p>
            <p>Terms &amp; Conditions</p>
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
    </footer>
  );
}
