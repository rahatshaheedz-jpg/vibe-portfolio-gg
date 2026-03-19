import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MotionBackground from "@/components/MotionBackground";
import PageIntro from "@/components/PageIntro";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";

const Index = () => (
  <>
    <ScrollProgress />
    <CustomCursor />
    <PageIntro />
    <MotionBackground />
    <Header />
    <main className="relative z-10">
      <Hero />
      <SelectedWork />
      <About />
      <Writing />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
