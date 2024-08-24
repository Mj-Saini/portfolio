import Image from "next/image";
import Hero from "./Components/Hero";
import Service from "./Components/Service";
import HireResume from "./Components/HireResume";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <HireResume />
    </main>
  );
}
