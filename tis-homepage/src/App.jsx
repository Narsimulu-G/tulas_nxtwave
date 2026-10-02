import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/animation/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Learning from "./components/sections/Learning";
import CampusLife from "./components/sections/CampusLife";
import Admissions from "./components/sections/Admissions";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Learning />
        <CampusLife />
        <Admissions />
      </main>
      <Footer />
    </>
  );
}
