import React from "react";
import ProductItem from "./ProductItem";
import DIV from "../Layout/DIV";

const DataJson = [
  {
    id: 2323423,
    title: "Head Spa",
    slug: "headspa",
    shortDescription:
      "20 steps skin care, scalp treatment, and hair treatment.",
    fee: "$1800 for In person - $999 for zoom online",
  },
  {
    id: 232342323,
    title: "Facial",
    slug: "facial",
    shortDescription: "Basic and Advanced facial treatments.",
    fee: "$2200",
  },
  {
    id: 23234233,
    title: "Eyelash Extensions",
    slug: "eyelash",
    shortDescription: "Basic & Advanced lash extensions.",
    fee: "$1800",
  },
];
function ProductSection() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col my-10 bg-transparent px-10 gap-20 lg:gap-0">
      {DataJson.map((item, index) => (
        <DIV position={(index + 1) % 2 == 0 ? "left" : "right"}>
          <ProductItem
            key={item.id}
            shortDescription={item.shortDescription}
            fee={item.fee}
            slug={item.slug}
            title={item.title}
            position={(index + 1) % 2 == 0 ? "left" : "right"}
          />
        </DIV>
      ))}
    </section>
  );
}

export default ProductSection;
