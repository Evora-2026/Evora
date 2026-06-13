import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Products from '../components/Products';
import HowToOrder from '../components/HowToOrder';
import Shipping from '../components/Shipping';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Products />
        <HowToOrder />
        <Shipping />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
