import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Spacer from "@/components/spacer/spacer";
import Technologies from "@/components/technologies/Technologies";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Header/>
      <About/>
      <Spacer/>
      <Technologies/>
      <Spacer/>
      <Projects/>
      <Spacer/>
      <Contact/>
      <Footer/>
    </>
  );
}
