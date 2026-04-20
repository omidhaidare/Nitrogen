"use client";

import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { toPersian } from "@/app/utils/ToPersianNumbers";
import Container from "./Container";

const stats = [
  { end: 150, label: "پروژه طراحی وب سایت" },
  { end: 500, label: "کلیک در تبلیغات گوگل" },
  { end: 500, label: "کلیک در تبلیغات گوگل" },
  { end: 4.5, label: "میانگین رتبه‌بندی مشتریان", isDecimal: true },
];

export default function Numbers() {
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedState = localStorage.getItem("animationShown");
    if (savedState === "true") setShow(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const onScroll = () => {
      const section = document.getElementById("numbers");
      if (section && !show) {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setShow(true);
          localStorage.setItem("animationShown", "true");
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [show, isMounted]);

  return (
    <Container classNames="pb-[80px]">
      <div id="numbers">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:justify-evenly">
          {stats.map(({ end, label, isDecimal }, index) => (
            <div
              key={index}
              className="flex items-center justify-start flex-col gap-[10px] md:gap-[15px] w-full md:w-auto text-center"
            >
              <span className="text-[#161C2D] text-[36px] md:text-[43.2px] font-bold">
                {!isMounted ? (
                  // Placeholder برای رندر سرور
                  isDecimal ? toPersian("۰.۰/۵.۰") : toPersian("۰+")
                ) : show ? (
                  <CountUp
                    end={end}
                    duration={2.5}
                    decimals={isDecimal ? 1 : 0}
                    formattingFn={(val) =>
                      isDecimal
                        ? `${toPersian(val.toFixed(1))}/۵.۰`
                        : toPersian(val.toString()) + "+"
                    }
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                ) : (
                  isDecimal ? toPersian("۰.۰/۵.۰") : toPersian("۰+")
                )}
              </span>
              <p className="text-[#161C2D] opacity-70 text-[15px] md:text-[17.1px] font-bold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}