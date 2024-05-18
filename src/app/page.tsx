import About from '@/components/About';
import BackToTopBtn from '@/components/BackToTopBtn';
import Cars from '@/components/Cars';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import Why from '@/components/Why';

const Home = () => {
  return (
    <main className="max-w-[1920] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  );
};

export default Home;
