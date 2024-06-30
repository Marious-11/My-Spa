"use client";
import React from "react";
import DIV from "./DIV";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";

function HeaderComponents() {
  const pathName = usePathname();
  return (
    <section className="  mx-auto max-w-2xl w-full  fixed top-5 z-[99999]">
      <DIV position="top">
        <div className="grid grid-cols-3 px-5 bg-white/20 backdrop-blur-sm gap-5 py-2 shadow-sm rounded-full max-w-2xl w-full  items-center ">
          <Link href={"/"}>
            <Button
              color={pathName == "/" ? "warning" : "default"}
              variant={pathName == "/" ? "solid" : "light"}
              radius="full"
              fullWidth
            >
              Home
            </Button>
          </Link>
          <Link href={"/products"}>
            <Button
              color={pathName == "/products" ? "warning" : "default"}
              variant={pathName == "/products" ? "solid" : "light"}
              radius="full"
              fullWidth
            >
              Products
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              color={pathName == "/contact" ? "warning" : "default"}
              radius="full"
              variant={pathName == "/contact" ? "solid" : "light"}
              fullWidth
            >
              Contact
            </Button>
          </Link>
        </div>
      </DIV>
    </section>
  );
}

export default HeaderComponents;
