import React from "react";
import DIV from "../Layout/DIV";
import { Image } from "@nextui-org/react";

function BannerComponents() {
  return (
    <DIV position="bottom">
      <Image
        isBlurred
        src={"/banner.JPG"}
        width={1920}
        height={1080}
        alt=""
        className="w-screen object-cover"
        // priority
        radius="none"
      />
    </DIV>
  );
}

export default BannerComponents;
