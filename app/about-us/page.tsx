"use client";

import React, { useState } from "react";
import Image from "next/image";
import heroImg from "@/public/images/maskgroup.png";
import heroImgshadow from "@/public/images/maskgroup-shadow.png";
import cn from "classnames";
import Container from "@/app/components/Container";
import ButtonComponent from "../ui/Button";
import AboutUs from "./AboutUs";
import OurValues from "./OurValues";
import ContactUs from "./ContactUs";
import ContactModal from "@/app/ui/ContactModal";

export default function HeroAboutUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => setIsModalVisible(true);
  const handleHideModal = () => setIsModalVisible(false);

  return (
    <div className="w-full bg-[#f4f7fa]">
      <Container noPadding classNames="pt-8">
        <div className="flex flex-col lg:flex-row items-center gap-9 justify-between py-20 md:py-32 lg:pt-52">
          <div className="order-2 lg:order-1 text-center lg:text-right w-full lg:w-auto">
            <span className=" font-bold text-[#F64B4B] text-sm md:text-base">
              آژانس نیتروژن
            </span>

            <div className="font-black leading-10 mt-2 mb-4 md:mb-6">
              <h1 className="text-3xl sm:text-3xl md:text-4xl text-[#161c2d] flex flex-col gap-2 md:gap-4">
                <span>تجربه حضور موثر در فضای دیجیتال</span>
              </h1>
            </div>

            <div className="font-normal text-[16px] max-w-[620px] mx-auto lg:mx-0">
              <p className="text-[#161c2d] font-normal mb-6 md:mb-8 leading-7 md:leading-8 text-base md:text-lg lg:text-[20px] opacity-70">
                آژانس نیتروژن، یک آژانس فول‌سرویس یا 360 درجه است که مجموعه‌ای
                از خدمات کامل در حوزه دیجیتال را به کسب‌وکارها ارائه می‌دهد. اگر
                به دنبال اطلاعات بیشتر درباره این خدمات هستید، به صفحه خدمات
                نیتروژن سر بزنید!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center justify-center lg:justify-start">
              <ButtonComponent
                label="دریافت مشاوره"
                color="consultation"
                onClick={handleShowModal}
              />

              <ButtonComponent
                label="مشاهده خدمات ما"
                color="projects"
                to="/"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center items-center relative w-full lg:w-auto">
            <div className="relative w-full max-w-[100%] xs:max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[540px]">
              <div className="relative z-10 w-full h-auto lg:w-md">
                <Image
                  src={heroImg}
                  alt="تیم کاری"
                  width={540}
                  height={430}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div
                className={cn(
                  "absolute -bottom-8 -right-7 xs:-bottom-3 xs:-right-3",
                  "sm:-bottom-6 sm:-right-13 md:-bottom-6 md:-right-15",
                  "lg:-bottom-8 lg:-right-17 w-[115%] xs:w-[158%]",
                  "sm:w-[130%] md:w-[130%] lg:w-[130%]",
                  "h-[122%] xs:h-[14%] sm:h-[115%] md:h-[115%] lg:h-[115%]",
                  "z-0 opacity-80 sm:opacity-90 md:opacity-100"
                )}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={heroImgshadow}
                    alt="سایه تصویر"
                    fill
                    className="object-contain"
                    style={{
                      filter:
                        "blur(4px) xs:blur(6px) sm:blur(8px) md:blur(10px) lg:blur(12px)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ContactModal visible={isModalVisible} onHide={handleHideModal} />

      <AboutUs />
      <OurValues />
      <ContactUs />
    </div>
  );
}
