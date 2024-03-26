import { Navigation } from "@/app/components/Navigation";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export default function Projects() {
  return (
    <>
      <div className="relative pb-32">
        <Navigation font={bebas} />
      </div>

      <section id="projects" className="grid h-screen grid-cols-2">
        <div className="overflow-y-auto">
          <ul className="divide-y">
            <li className="project-li">
              <Link className="link" href="#">
                Mik Developent
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Mursee
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Universiteit van Amsterdam
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Overheid
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Raad van de kinderbescherming
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                DJI
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Enza Zaden
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Het Park "met de 3 J's"
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Bijenkorf
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Heineken
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Provincie Noord-Holland
              </Link>
              <ArrowUpRight size={54} />
            </li>
            <li className="project-li">
              <Link className="link" href="#">
                Warner Records
              </Link>
              <ArrowUpRight size={54} />
            </li>
          </ul>
        </div>

        <div className="fixed right-0 w-1/2 bg-diana h-[100vh] "></div>
      </section>
    </>
  );
}
