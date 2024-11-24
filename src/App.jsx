import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MyStory from "./components/MyStory";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Achievements from "./components/Achievement";

function App() {
  const [iscerti, setIscerti] = useState(true);
  const handleCerti = () => {
    setIscerti(false);
  };
  const handleBack = () => setIscerti(true);
  return (
    <div>
      {iscerti && (
        <>
          <Header />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="about me">
              <MyStory />
            </section>
            <section id="skills">
              <About onCertiClick={handleCerti} />
            </section>

            <section id="projects">
              <Projects />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
        </>
      )}
      {!iscerti && <Achievements onBack={handleBack} />}
    </div>
  );
}

export default App;
