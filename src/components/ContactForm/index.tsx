"use client";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const animals = [{ key: "head spa", label: "Head Spa" }];
function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");

  const sendEmail = () => {
    const payload = {
      fullName: fullName,
      email: email,
      address: address,
      course: course,
    };

    emailjs
      .send("service_p85lkzp", "template_1n3jdnf", payload, {
        publicKey: "nYLTzsVr0PEyaiXy6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="max-w-6xl mx-auto my-5  flex flex-col gap-5 ">
      <p className="text-[32px] font-semibold text-center">Contact</p>
      <div>
        <section className="flex flex-col gap-5 bg-white/20 backdrop-blur-sm p-5 rounded-xl shadow">
          <div className="flex flex-col lg:flex-row gap-5">
            <Input
              className="w-[50%]"
              radius="lg"
              label="Full Name"
              labelPlacement="outside"
              name="fullName"
              variant="bordered"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            <Input
              type="email"
              className="w-[50%]"
              radius="lg"
              label="Email"
              labelPlacement="outside"
              name="email"
              variant="bordered"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Select
            label="Course"
            className=""
            fullWidth
            radius="lg"
            variant="bordered"
            labelPlacement="outside"
            name="course"
            required
            onChange={(e) => setCourse(e.target.value)}
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Textarea
            fullWidth
            placeholder="Address"
            radius="lg"
            variant="bordered"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
          />

          <div className="flex justify-end">
            <Button className="w-full lg:w-[200px] text-white" color="warning" onClick={() => sendEmail()}>
              Submit
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ContactForm;
