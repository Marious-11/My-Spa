"use client";
import React from "react";
import DIV from "./DIV";
import Link from "next/link";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function HeaderComponents() {
  const pathName = usePathname();
  return (
    <nav className="  mx-auto max-w-2xl w-full z-[99999] fixed top-5 ">
      <div className="grid grid-cols-3 px-5 bg-white/20 backdrop-blur-sm   gap-5 py-2 shadow-sm rounded-full max-w-2xl w-full  items-center ">
        <Link
          className="transition-all duration-300  relative flex justify-center items-center z-10 w-full h-10"
          href={"/"}
          prefetch={true}
        >
          <span className={`z-50 ${pathName == "/" && "text-white"}`}>Home</span>
          {pathName == "/" && (
            <motion.div
              transition={{ type: "spring" }}
              layoutId="underline"
              className="absolute w-full h-full rounded-full left-0 bottom-0 bg-gradient-main"
            ></motion.div>
          )}
        </Link>

        {/*  */}
        <Dropdown
          className=""
          classNames={{ content: " bg-white/60 backdrop-blur-sm" }}
        >
          <DropdownTrigger>
            <Button
              className={`${
                pathName.includes("/products") ? "bg-gradient-main" : ""
              } duration-300 transition-all`}
              variant={pathName.includes("/products") ? "solid" : "light"}
              radius="full"
              fullWidth
            >
              Products
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            // className=" bg-white/20 backdrop-blur-sm"
          >
            <DropdownItem
              key="new"
              className="hover:bg-gradient-main  duration-300"
            >
              <Link href={"/products/headspa"} className=" ">
                Head Spa
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> 
        <Link
          className="transition-all duration-300  relative flex justify-center items-center z-10 w-full h-10"
          href={"/contact"}
          prefetch={true}
        >
          <span className={`z-50 ${pathName == "/contact" && "text-white"}`}>Contact</span>
          {pathName == "/contact" && (
            <motion.div
              transition={{ type:'spring' }}
              layoutId="underline"
              className="absolute w-full h-full rounded-full left-0 bottom-0 bg-gradient-main"
            ></motion.div>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default HeaderComponents;
