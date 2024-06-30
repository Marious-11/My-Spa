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

function HeaderComponents() {
  const pathName = usePathname();
  return (
    <section className="  mx-auto max-w-2xl w-full  fixed top-5 z-[99999]">
        <div className="grid grid-cols-3 px-5 bg-white/20 backdrop-blur-sm gap-5 py-2 shadow-sm rounded-full max-w-2xl w-full  items-center ">
          <Link href={"/"} prefetch={true}>
            <Button
              className={pathName == "/" ? "bg-gradient-main" : ""}
              variant={pathName == "/" ? "solid" : "light"}
              radius="full"
              fullWidth
            >
              Home
            </Button>
          </Link>
          {/*  */}
          <Dropdown
            className=""
            classNames={{ content: " bg-white/60 backdrop-blur-sm" }}
          >
            <DropdownTrigger>
              <Button
                className={
                  pathName.includes("/products") ? "bg-gradient-main" : ""
                }
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
          {/*  */}
          <Link href={"/contact"} prefetch={true}>
            <Button
              className={pathName == "/contact" ? "bg-gradient-main" : ""}
              radius="full"
              variant={pathName == "/contact" ? "solid" : "light"}
              fullWidth
            >
              Contact
            </Button>
          </Link>
        </div>
    </section>
  );
}

export default HeaderComponents;
