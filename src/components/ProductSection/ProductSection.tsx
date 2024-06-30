import React from "react";
import ProductItem from "./ProductItem";
import DIV from "../Layout/DIV";

const DataJson = [
  { id: 2323423, title: "Gội đầu dưỡng sinh" },
  { id: 232342323, title: "Gội đầu dưỡng sinh" },
  { id: 23234233, title: "Gội đầu dưỡng sinh" },
];
function ProductSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col my-10 bg-transparent">
      {DataJson.map((item, index) => (
        <DIV position={(index+1)%2 == 0 ? "left" : "right"}><ProductItem position={(index + 1) % 2 == 0 ? "left" : "right"} /></DIV>
        
      ))}
    </section>
  );
}

export default ProductSection;
