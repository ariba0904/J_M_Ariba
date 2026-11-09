import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import CodingProfiles from "./sections/CodingProfiles";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
