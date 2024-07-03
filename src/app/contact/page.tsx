import AboutComponents from "@/components/About";
import BannerComponents from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import ProductSection from "@/components/ProductSection/ProductSection";
import React from "react";

function page() {
  return (
    <section className="mx-auto h-[100vh]" id="contact">
      {/* <BannerComponents /> */}

      <div className="mt-28 w-screen">
        <ContactForm />
      </div>
    </section>
  );
}

export default page;
