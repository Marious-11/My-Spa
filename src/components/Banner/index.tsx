import Image from "next/image";
import React from "react";
import DIV from "../Layout/DIV";

function BannerComponents() {
  return (
    <DIV position="bottom">
      <Image
        src={"/banner.JPG"}
        width={1920}
        height={1080}
        alt=""
        className="w-screen object-cover"
        priority
      />
    </DIV>
  );
}

export default BannerComponents;
