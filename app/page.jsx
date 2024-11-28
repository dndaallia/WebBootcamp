import Image from "next/image";
import Hero from "../components/home/hero";
import Why from "../components/home/why";
import Bootcamp from "../components/home/bootcamp";
import LearningPath from "../components/home/learningpath";
import Contact from "../components/home/contactus";

export default function Home() {


  return (
    <>
      <Hero />
      <Why />
      <Bootcamp />
      <LearningPath />
      <Contact />

    </>
  );
}
