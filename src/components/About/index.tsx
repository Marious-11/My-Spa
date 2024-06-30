import { Button } from "@nextui-org/react";
import React from "react";
import DIV from "../Layout/DIV";
import ButtonCore from "../Layout/Core/ButtonCore";

const DataJson = [{ id: 123 }, { id: 124 }, { id: 125 }];
function AboutComponents() {
  return (
    <DIV position="bottom">
      <section className="w-full flex flex-col gap-10 max-w-6xl px-10 mx-auto py-5 my-10">
        <div className="flex flex-col gap-5">
          <p className="text-[32px] font-semibold">What we offer</p>
          <div className="flex justify-between text-[14px]  font-light">
            <p className="w-[60%]">
              With many years of experience in providing Headspa treatment and
              microblading services. Cindy has helped hundreds of clients feel
              more confident and beautiful. With passion and dedication, Cindy
              Phan always prioritizes the quality of services and customer
              satisfaction.
            </p>
            <ButtonCore
              classNames="w-[20%] "
            >
              Learn more
            </ButtonCore>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {DataJson.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 shadow p-5 rounded-xl bg-white"
            >
              <p className="text-[24px] font-semibold">Online Courses</p>
              <div className="flex flex-col justify-between text-[14px] gap-5 font-light">
                <p className="">
                  With many years of experience in providing Headspa treatment
                  and microblading services. Cindy has helped hundreds of
                  clients feel more confident and beautiful. With passion and
                  dedication, Cindy Phan always prioritizes the quality of
                  services and customer satisfaction.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DIV>
  );
}

export default AboutComponents;
