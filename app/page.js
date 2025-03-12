import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import ExtendedHero from '@/components/ExtendedHero';
import Featured from '@/components/Featured';
import Footer from '@/components/Footer';
import  Header  from '@/components/Header';
import Help from '@/components/Help';
import Hero from '@/components/Hero';
import PerSecurity from '@/components/PerSequrity';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <ExtendedHero/>
      <About/>
      <Featured/>
      <PerSecurity/>
      <Experience/>
      <Testimonials/>
      <Help/>
      <Contact/>
      <Footer/>
    </div>
  );
}
