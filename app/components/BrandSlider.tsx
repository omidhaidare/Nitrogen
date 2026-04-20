"use client";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import digikala from "@/public/icons/brands/digikala.svg";
import ikapp from "@/public/icons/brands/i-kapp.svg";
import signal from "@/public/icons/brands/signal.svg";
import snapp from "@/public/icons/brands/snapp.svg";
import Container from "./Container";

export default function BrandSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 8,
      spacing: 0,
    },
    created(s) {
      s.moveToIdx(4, true, { duration: 10000, easing: (t) => t });
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 4, true, {
        duration: 10000,
        easing: (t) => t,
      });
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 4, true, {
        duration: 10000,
        easing: (t) => t,
      });
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 7, spacing: 10 },
      },
      "(max-width: 768px)": {
        slides: { perView: 4, spacing: 8 },
      },
      "(max-width: 640px)": {
        slides: { perView: 2, spacing: 6 },
      },
    },
  });

  return (
    <Container noMx>
      <div className="w-full relative ">
        <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-[50%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div ref={sliderRef} className="keen-slider">
          {[digikala, signal, ikapp, snapp, digikala, signal, ikapp, snapp].map(
            (img, index) => (
              <div
                key={index}
                className="keen-slider__slide flex items-center justify-center"
              >
                <Image
                  src={img}
                  alt={`brand-${index}`}
                  className=" w-auto object-contain"
                  priority
                />
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
}
