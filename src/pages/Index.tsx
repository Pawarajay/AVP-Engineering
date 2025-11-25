import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductsDetailed from "@/components/ProductsDetailed";
import ProductGallery from "@/pages/ProductGallery";
import GlobalReach from "@/components/GlobalReach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ProductsDetailed />
      <section id="product-gallery">
        <ProductGallery />
      </section>
      <GlobalReach />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;