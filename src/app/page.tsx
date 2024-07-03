import AboutComponents from "@/components/About";
import BannerComponents from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import HeaderComponents from "@/components/Layout/HeaderComponents";
import ProductSection from "@/components/ProductSection/ProductSection";

export default function Home() {
  return (
    <section className="mx-auto bgBody font-sans">
      
      <BannerComponents />

      <AboutComponents />
      <ProductSection />
      {/* <ContactForm/> */}
    </section>
  );
}
