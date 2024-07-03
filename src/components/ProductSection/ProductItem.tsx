import { Button, Image } from "@nextui-org/react";
import React from "react";
import ButtonCore from "../Layout/Core/ButtonCore";
import Link from "next/link";
import "swiper/css";
import BannerProducts from "../Banner/BannerProducts";
function ProductItem({
  position,
  title,
  slug,
  shortDescription,
  fee,
}: {
  position: "left" | "right";
  title: String;
  slug: String;
  shortDescription: String;
  fee: String;
}) {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center  ">
      {position == "left" && (
        <div className="w-full lg:w-[400px] rounded-xl bg-yellow-100/20">
          <Image
            isBlurred
            src={"/product.PNG"}
            width={1920}
            height={1080}
            alt=""
            className="rounded-xl origin-bottom hover:-rotate-12"
          />
        </div>
      )}
      <div className="w-full flex flex-col gap-2 lg:w-[500px] order-2 lg:order-1 h-full justify-center">
        <p className="text-[32px] font-semibold">{title}</p>
        <p>{shortDescription}</p>
        <p className="font-semibold">{fee}</p>

        <ButtonCore classNames="w-[200px] mt-5  ">
          <Link
            href={`/products/${slug}`}
            className="w-full h-full flex items-center justify-center font-semibold"
          >
            Learn more
          </Link>
        </ButtonCore>
      </div>
      {position == "right" && (
        <div className="w-full lg:w-[400px] order-1 lg:order-2 bg-yellow-100/20 ">
          <Image
            isBlurred
            src={"/product.PNG"}
            width={1920}
            height={1080}
            alt=""
            className="rounded-xl origin-bottom hover:rotate-12"
          />
        </div>
      )}
    </section>
  );
}

export default ProductItem;
