import React from "react";
import DIV from "../Layout/DIV";

const DataJson = [
  {
    id: 123,
    title: "Online Courses",
    description:
      "Online courses are easy and convenient for you to study anytime and anywhere. Just register for an online course, you can learn on your phone, iPad or Computer. You can review courses whenever you want, and are a lifetime member.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"/><path d="M4 24h40"/><path d="M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20" clip-rule="evenodd"/><path d="M9.858 10.142A19.937 19.937 0 0 0 24 16a19.937 19.937 0 0 0 14.142-5.858m0 27.716A19.937 19.937 0 0 0 24 32a19.937 19.937 0 0 0-14.142 5.858"/></g></svg>',
  },
  {
    id: 124,
    title: "In-Person Training",
    description:
      "The in-person class in California will be an opportunity for you to learn directly, receive guidance and practice on real people. This is the best way to learn, practice and get a career. When you register, you get a bonus online course that you can review when needed.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24"><path fill="black" d="M12 5a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 12 12a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 12 5m0 2a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 10a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 7M5.5 8A2.5 2.5 0 0 0 3 10.5c0 .94.53 1.75 1.29 2.18c.36.2.77.32 1.21.32s.85-.12 1.21-.32c.37-.21.68-.51.91-.87A5.42 5.42 0 0 1 6.5 8.5v-.28c-.3-.14-.64-.22-1-.22m13 0c-.36 0-.7.08-1 .22v.28c0 1.2-.39 2.36-1.12 3.31c.12.19.25.34.4.49a2.48 2.48 0 0 0 1.72.7c.44 0 .85-.12 1.21-.32c.76-.43 1.29-1.24 1.29-2.18A2.5 2.5 0 0 0 18.5 8M12 14c-2.34 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.66-3.5-7-3.5m-7.29.55C2.78 14.78 0 15.76 0 17.5V19h3v-1.93c0-1.01.69-1.85 1.71-2.52m14.58 0c1.02.67 1.71 1.51 1.71 2.52V19h3v-1.5c0-1.74-2.78-2.72-4.71-2.95M12 16c1.53 0 3.24.5 4.23 1H7.77c.99-.5 2.7-1 4.23-1"/></svg>',
  },
  {
    id: 125,
    title: "Mentorship And Coaching",
    description:
      "This is a special program to help guide those who are unskilled or don't know what they should do for the future. Tien Ding will have a private class for you. Message Cindy for more details",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><path fill="black" d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"/><path stroke-linecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></svg>',
  },
];

const info = {
  intro:
    "   Owner of TD Beauty Spa and Master Trainer Tien Dinh, the owner of TD Beauty Spa and a Master Trainer, is a distinguished beauty professional with many years of experience. Renowned for her expertise in head spa, advanced skincare, and eyelash extensions, Tien has built a reputation for excellence and innovation in the beauty industry. Her journey began with rigorous training in cosmetology, leading to multiple certifications and advanced training programs. As a master trainer, Tien offers comprehensive, hands-on courses in head spa, lash extensions, and advanced skincare, emphasizing safety, precision, and artistry. An active participant in industry conferences and publications, Tien is dedicated to advancing beauty standards and empowering others.",
};



function AboutComponents() {
  return (
    <DIV position="bottom">
      <section className="w-full flex flex-col gap-10 max-w-6xl px-10 mx-auto py-5 my-10">
        <div className="flex flex-col gap-5">
          <p className="text-[32px] font-semibold">Tien Dinh,</p>
          <div className="flex justify-between text-[16px]  font-light">
            <p className="w-[100%]">{info.intro}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {DataJson.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 shadow p-5 rounded-xl bg-white"
            >
              <p
                className="bg-gradient-main w-[40px] h-[40px] rounded-full flex justify-center items-center p-1"
                dangerouslySetInnerHTML={{ __html: item.icon }}
              ></p>
              <p className="text-[20px] font-semibold ">{item.title}</p>
              <div className="flex flex-col justify-between text-[14px] gap-5 font-light">
                <p className="">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DIV>
  );
}

export default AboutComponents;
