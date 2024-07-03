"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const DataJson = [
  //   {
  //     id: 2323423,
  //     url: "/headspa/bg1.jpeg",
  //   },
  //   {
  //     id: 2323433,
  //     url: "/headspa/bg2.PNG",
  //   },
  {
    id: 2323633,
    url: "/headspa/bg3.PNG",
  },
  //   {
  //     id: 2322433,
  //     url: "/headspa/bg4.PNG",
  //   },
];
function BannerProducts() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper rounded-xl"
      >
        {DataJson.map((item, index) => (
          <SwiperSlide key={index}>
            {" "}
            <Image
              key={index}
              isBlurred
              src={item.url}
              width={1920}
              height={1080}
              alt=""
              className="rounded-xl "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default BannerProducts;
