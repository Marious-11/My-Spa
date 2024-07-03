import BannerProducts from "@/components/Banner/BannerProducts";
import ContactForm from "@/components/ContactForm";
import DIV from "@/components/Layout/DIV";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import Link from "next/link";
import { title } from "process";
import React from "react";

const info = {
  description: [
    {
      title: "Introduction to Head Spa:",
      child: [
        { title: "20 Steps detail to perform ASMR Head Spa service." },
        {
          title:
            " Understanding the concept and benefits of head spa treatments.",
        },
        { title: " Overview of scalp health and common scalp issues." },
      ],
    },

    {
      title: "Mini Facial Techniques",
      child: [
        {
          title:
            "Introduction to mini facial treatments suitable for head spa.",
        },
        {
          title:
            "Cleansing, exfoliation, face massage, acupuncture techniques tailored for the facial area.",
        },
        {
          title:
            "Application of masks and moisturizer suitable for scalp and facial skin.",
        },
      ],
    },

    {
      title: "Meridian Head, Shoulder, and Neck Massage",
      child: [
        {
          title:
            "Introduction to meridian massage principles and its significance in head spa.",
        },
        {
          title:
            "Techniques for gentle yet effective massage of the head, shoulders, and neck to promote relaxation and alleviate tension.",
        },
        {
          title:
            "Understanding the meridian points and their benefits for scalp health and overall well-being.",
        },
      ],
    },

    {
      title: "Practical Application",
      child: [
        {
          title:
            "Hands-on practice sessions to integrate mini facial techniques and meridian massage.",
        },
        {
          title:
            "Supervised practice sessions to refine skills and techniques under guidance.",
        },
        {
          title:
            "Case studies and real-life scenarios to enhance practical understanding.",
        },
      ],
    },

    {
      title: "Client Consultation and Safety",
      child: [
        {
          title:
            "Importance of client consultation, scalp skin analysis in head spa treatments.",
        },
        {
          title:
            "Recognizing contraindications and safety precautions related to head spa procedures.",
        },
        {
          title:
            " Effective communication skills for addressing client concerns and expectations.",
        },
      ],
    },

    {
      title: "Product Knowledge and Aftercare",
      child: [
        {
          title:
            "Introduction to products used in head spa treatments, including cleansers, masks, and massage oils, herbal shampoo.",
        },
        {
          title:
            "Understanding product ingredients and their benefits for scalp and facial health.",
        },
        {
          title:
            "Providing clients with appropriate aftercare recommendations for maintaining results between sessions.",
        },
      ],
    },

    {
      title: "Business and Marketing Strategies",
      child: [
        {
          title:
            "Building a successful head spa business, including buying supplies, setting prices, creating service packages, and managing appointments.",
        },
        {
          title:
            " Marketing strategies to attract clients, including social media promotion, collaborations, and client referral programs.",
        },
        {
          title:
            "Customer service excellence and maintaining client relationships for repeat business and positive referrals.",
        },
      ],
    },

    {
      title: "Final Assessment and Certification:",
      child: [
        {
          title:
            "Practical assessment to demonstrate proficiency in mini facial techniques and meridian massage for head spa treatments.",
        },
        {
          title:
            "Awarding of certification upon successful completion of the course.",
        },
      ],
    },
  ],
};

const mapJSON = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
];
function page() {
  return (
    <section className="flex flex-col gap-3 max-w-6xl container mt-28">
      <div className="">
        <p className="text-[48px] font-semibold text-center">Head Spa</p>
      </div>
      <DIV position="right">
        {" "}
        {/* <Image
          isBlurred
          src={"/banner.JPG"}
          width={1920}
          height={1080}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        /> */}
        <BannerProducts/>
      </DIV>

      <article className="flex flex-col gap-5 rounded-xl shadow-2xl p-5 mt-5">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <p className="text-[32px] font-semibold">
              𝐂𝐨𝐬𝐭 𝐢𝐧 𝐩𝐞𝐫𝐬𝐨𝐧: $𝟏𝟖𝟎𝟎 - 𝐨𝐧𝐥𝐢𝐧𝐞/ 𝐡𝐲𝐛𝐫𝐢𝐝: $𝟏𝟎𝟎𝟎
            </p>
            <Button className="bg-gradient-main w-[200px] hover:text-white  font-semibold ">
              <Link
                target="_blank"
                href={`https://docs.google.com/forms/d/e/1FAIpQLSdlMk08dNI14Hh4pBX_WheBZj_t8wC9Hf_YJsT0WvMzwanbGw/viewform`}
                className="w-full h-full flex justify-center items-center"
              >
                Buy Now
              </Link>
            </Button>
          </div>
          {info.description.map((item, index) => (
            <DIV position="right">
              <section key={index} className="flex flex-col gap-5">
                <p className="text-[20px] font-semibold flex items-center gap-1 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 64 64"
                  >
                    <path
                      fill="#ffce31"
                      d="M62 25.2H39.1L32 3l-7.1 22.2H2l18.5 13.7l-7 22.1L32 47.3L50.5 61l-7.1-22.2z"
                    />
                  </svg>
                  {item.title}
                </p>
                <div className="flex flex-col gap-5">
                  {item.child.map((item, index) => (
                    <p key={index} className="text-[14px] font-light">
                      - {item.title}
                    </p>
                  ))}
                </div>
              </section>
            </DIV>
          ))}
        </div>

        {/* {mapJSON.map((item, index) => (
          <DIV position="right">
            <section className="flex gap-5 items-center">
              <Image
                isBlurred
                src="/product.PNG"
                width={150}
                height={150}
                alt=""
                className="w-[150px] h-[150px] rounded-xl"
              />
              <p className="text-[16px] font-light w-[80%]">
                Dưỡng sinh là phương pháp chăm sóc sức khỏe cổ truyền kết hợp
                giữa y học cổ truyền và các phương pháp trị liệu hiện đại. Gội
                đầu dưỡng sinh không chỉ là việc làm sạch tóc mà còn là một trải
                nghiệm thư giãn và chăm sóc toàn diện cho sức khỏe của bạn.
              </p>
            </section>
          </DIV>
        ))} */}
      </article>

      {/* <article className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 px-5 lg:px-0">
        {mapJSON.map((item) => (
          <Card className="">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar
                  isBordered
                  radius="full"
                  size="md"
                  src="https://nextui.org/avatars/avatar-1.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Zoey Lang
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    @zoeylang
                  </h5>
                </div>
              </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
              <p>
                Frontend developer and UI/UX enthusiast. Join me on this coding
                adventure!
              </p>
              <span className="pt-2">
                #FrontendWithZoey
                <span className="py-2" aria-label="computer" role="img">
                  💻
                </span>
              </span>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  Course:
                </p>
                <p className=" text-default-400 text-small">Head Spa</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  Date
                </p>
                <p className="text-default-400 text-small">29-11-2023</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </article> */}

      <article className="mt-5">{/* <ContactForm /> */}</article>
    </section>
  );
}

export default page;
