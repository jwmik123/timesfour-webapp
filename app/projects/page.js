import {Navigation} from "@/app/components/Navigation";
import {Bebas_Neue} from "next/font/google";
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });
export default function Projects() {
  return (
    <>
        <Navigation font={bebas} />
    </>
  );
}
