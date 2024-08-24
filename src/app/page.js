import Image from "next/image";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import HireResume from "./Components/HireResume";
import ExperienceResume from "./Components/ExperienceResume";


export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <HireResume />
      <ExperienceResume/>
    </main>
  );
}
