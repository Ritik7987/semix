// import Image from "next/image";

import { MainSection } from "@/components/MainSection";
import { Navbar } from "@/components/Navbar";
import { SectionThree } from "@/components/SectionThree";
import { SectionTwo } from "@/components/SectionTwo";


export default function Home() {
  return (
    <div className=" w-full ">
      <Navbar/>
      <MainSection/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
}
