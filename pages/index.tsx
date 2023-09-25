import Header from "@/components/Header";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import router from "next/router";


function Home() {
  const handleClick = () => {
    router.push("/-page");
  }

  return (
    <>
      {/* <button onClick={handleClick}>Download Resume</button> */}
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default Home;
