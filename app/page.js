import Image from "next/image";
import Options from "@/components/Options";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className="w-full h-full">
      <Options className="relative min-h-screen"/>
      <Hero className="min-h-screen"/>
    </div>
  );
}