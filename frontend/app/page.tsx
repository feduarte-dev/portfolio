import Header from "@/components/header/Header";
import Logo from "@/components/logo/Logo";
import About from "@/components/about/About";
import Spacer from "@/components/spacer/spacer";
import Technologies from "@/components/technologies/Technologies";
import Projects from "@/components/projects/Projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Logo/>
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
