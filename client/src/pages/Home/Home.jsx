import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/common/Hero";
import Stats from "../../components/common/Stats";
import Features from "../../components/common/Features";
import Services from "../../components/common/Services";
import HowItWorks from "../../components/common/HowItWorks";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <HowItWorks />
    </>
  );
};

export default Home;