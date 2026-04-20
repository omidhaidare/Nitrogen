"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import persone from "@/public/images/our-customers/persone.png";
import girl from "@/public/images/our-customers/girl.jpg";
import star from "@/public/images/our-customers/Star-Rate.png";
import Container from "./Container";

export default function OurCustomers() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 1, spacing: 32 },
      },
      "(max-width: 767px)": {
        slides: { perView: 1, spacing: 16 },
      },
    },
  });

  const customers = [
    {
      name: "سارا احمدی",
      role: "مدیر بازاریابی شرکت آسمان",
      image: girl,
      imageClass: "rounded-full",
      quote:
        "نیتروژن با خلاقیت و تخصص تیمش تونست برند ما رو به خوبی در فضای آنلاین مطرح کنه. همکاری باهاشون یکی از بهترین تجربه‌های کاری من بود.",
    },
    {
      name: "علی رضایی",
      role: "مدیرعامل شرکت فناوری سپهر",
      image: persone,
      imageClass: "rounded-full",
      quote:
        "آژانس دیجیتالی نیتروژن توانست با استراتژی‌های هوشمندانه بازاریابی دیجیتال، ترافیک وبسایت ما را به شکل قابل توجهی افزایش دهد. همکاری با تیم حرفه‌ای و خلاق نیتروژن تجربه‌ای بی‌نظیر بود و نتایج حاصل از آن فراتر از انتظارات ما بود.",
    },
  ];

  return (
    <Container>
      <div className="flex items-center justify-center flex-col pb-8 md:pb-[60px]">
        <span className="text-[#F64B4B] text-base md:text-lg font-bold">
          مشتریان ما
        </span>
        <h1 className="text-3xl md:text-2xl lg:text-4xl font-black text-[#161c2d] mt-2 md:mt-4 text-center leading-normal md:leading-[1.4]">
          تجربه مشتریانی که از خدمات نیتروژن
          <br />
          استفاده کردند
        </h1>
      </div>

      <div className="navigation-wrapper relative">
        <div ref={sliderRef} className="keen-slider">
          {customers.map((customer, index) => (
            <div key={index} className="keen-slider__slide px-2 md:px-0">
              <div className="max-w-[870px] mx-auto p-4 md:p-0">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="flex-shrink-0 w-24 h-24 md:w-auto md:h-auto">
                    <Image
                      src={customer.image}
                      alt={`${customer.name}-image`}
                      className={`object-cover ${
                        customer.image === girl
                          ? "w-24 h-24 md:w-[147.6px] md:h-[147.6px] flex-shrink-0 rounded-full"
                          : "w-24 h-24 md:w-auto md:h-auto rounded-full"
                      }`}
                    />
                  </div>
                  <div className="flex gap-3 md:gap-[18px] flex-col">
                    <div className="flex flex-col md:flex-row gap-1 md:gap-3">
                      <h3 className="text-sm md:text-[14px] font-bold text-[#161C2D] opacity-70">
                        {customer.name}
                      </h3>
                      <span className="text-[#4455F2] font-bold text-sm md:text-[14px]">
                        {customer.role}
                      </span>
                    </div>

                    <div className="w-24 md:w-auto">
                      <Image src={star} alt="star-image" />
                    </div>

                    <p className="text-[#161C2D] text-sm md:text-[14px] font-bold leading-6 md:leading-8">
                      &quot;{customer.quote}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && (
          <div className="flex justify-center mt-6 md:mt-10 gap-1.5">
            {[...Array(instanceRef.current.track.details.slides.length)].map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                    currentSlide === idx ? "bg-black" : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
