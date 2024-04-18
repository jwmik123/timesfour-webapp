"use client";
import { Navigation } from "@/app/components/Navigation";
import { Bebas_Neue } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Suspense, useEffect } from "react";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export default function Projects() {
  const router = useRouter();

  return (
    <>
      <div className="relative pb-32">
        <Navigation font={bebas} />
      </div>
      <section id="projects" className="grid h-screen grid-cols-2">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="overflow-y-auto scrollbar">
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
        </Suspense>
        <div className="fixed right-0 flex items-center justify-center w-1/2 h-screen bg-diana">
          Here comes the project image
        </div>
      </section>
    </>
  );
}
