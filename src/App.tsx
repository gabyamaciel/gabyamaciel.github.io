import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Experience } from './components/Experience';
import { Stack } from './components/Stack';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <CaseStudies />
        <Experience />
        <Stack />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
