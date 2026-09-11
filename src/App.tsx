import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#011F41] min-h-screen font-['Vazirmatn'] text-white selection:bg-[#21B9C6] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
