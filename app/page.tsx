import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutUs from "./components/AboutUs";
import BrandSlider from "./components/BrandSlider";
import WhyChooseUs from "./components/WhyChooseUs";
// import ProjectsTab from "./components/ProjectsTab";
import Numbers from "./components/Numbers";
import OurCustomers from "./components/OurCustomers";
import BlogSection from "./components/BlogSection";
import AccordionList from "./components/AccordionList";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <BrandSlider />
      <WhyChooseUs />
      {/* <ProjectsTab /> */}
      <Numbers />
      <OurCustomers />
      <BlogSection />
      <AccordionList />
    </>
  );
}
