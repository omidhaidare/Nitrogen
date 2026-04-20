"use client";

import React, { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import Container from "./Container";
import "@/styles/Accordion.css";

const InactiveIcon = () => (
  <span
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0.75rem",
      flexShrink: 0,
      width: "43px",
      height: "43px",
      fontFamily: "IRANYekan, sans-serif",
      backgroundColor: "#FFF",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
      borderRadius: "50%",
    }}
  >
    <i
      className="pi pi-chevron-left"
      style={{ fontSize: "0.8rem", color: "#4A3AFF" }}
    ></i>
  </span>
);

const ActiveIcon = () => (
  <span
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "0.75rem",
      flexShrink: 0,
      width: "43px",
      height: "43px",
      backgroundColor: "#4A3AFF",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
      borderRadius: "50%",
    }}
  >
    <i
      className="pi pi-chevron-down"
      style={{ fontSize: "0.8rem", color: "#FFF" }}
    ></i>
  </span>
);

export default function DisabledDemo() {
  const [activeIndex, setActiveIndex] = useState<number[]>([0]);

  const handleTabClick = (index: number) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter((i) => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  const renderHeader = (index: number, header: string) => {
    const isActive = activeIndex.includes(index);
    return (
      <div
        onClick={() => handleTabClick(index)}
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          background: "var(--Neutral-100, #FFF)",
          borderRadius: "11.895px",
          cursor: "pointer",
          paddingBottom: "12px",
        }}
      >
        <span
          style={{
            flex: 1,
            textAlign: "right",
            color: "var(--Neutral-800, #170F49)",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "23.791px",
          }}
        >
          {header}
        </span>
        {isActive ? <ActiveIcon /> : <InactiveIcon />}
      </div>
    );
  };

  return (
    <Container>
      <div className="pb-[60px] flex flex-col">
        <span className="text-[12px] font-bold text-[#FF5733]">
          آژانس نیتروژن
        </span>
        <h1 className="mt-4 text-[32px] font-black leading-[1.4] text-[#161C2D]">
          سوالات متداول
        </h1>
      </div>
      <Accordion
        activeIndex={activeIndex}
        onTabChange={(e) =>
          setActiveIndex(Array.isArray(e.index) ? e.index : [e.index])
        }
        multiple
        className="custom-accordion"
      >
        <AccordionTab
          headerTemplate={() =>
            renderHeader(
              0,
              "چرا باید نیتروژن را از میان این همه آژانس دیجیتال مارکتینگ انتخاب کنم؟"
            )
          }
        >
          <p style={{ margin: 0, lineHeight: "1.5" }}>
            آژانس دیجیتال مارکتینگ نیتروژن با تکیه بر تیمی خلاق و با‌تجربه، هر
            آنچه برای رشد کسب‌وکار شما در دنیای دیجیتال نیاز دارید، فراهم کرده
            است. ما با ارائه خدمات متنوع مانند سئو، تبلیغات گوگل، مدیریت
            شبکه‌های اجتماعی، تولید محتوا و طراحی وب‌سایت، به شما کمک می‌کنیم تا
            برندتان را متمایز کنید. علاوه بر این، تیم پشتیبانی ما همواره در کنار
            شما خواهد بود تا بهترین نتایج را برایتان به ارمغان بیاورد.
          </p>
        </AccordionTab>

        <AccordionTab
          headerTemplate={() =>
            renderHeader(1, "اگر خدمتی که می‌خواهیم در لیست بالا نبود چه کنیم؟")
          }
        >
          <p style={{ margin: 0, lineHeight: "1.5" }}>
            ما خدمات متنوعی داریم و همواره در حال توسعه سرویس‌های خود هستیم. اگر
            خدمت مورد نظر شما در لیست خدمات ما نبود، کافی است با ماتماسبگیرید.
            تیم ما آماده است تا نیازهای شما را بررسی کرده و راهکارهای سفارشی
            متناسب با کسب‌وکار شما ارائه دهد. ما به انعطاف‌پذیری در ارائه خدمات
            و جلب رضایت مشتریان متعهد هستیم.
          </p>
        </AccordionTab>

        <AccordionTab
          headerTemplate={() =>
            renderHeader(2, "چطور همکاری خود را با آژانس نیتروژن آغاز کنیم؟")
          }
        >
          <p style={{ margin: 0, lineHeight: "1.5" }}>
            برای شروع همکاری با نیتروژن، تنها کافی است فرم تماس موجود در وب‌سایت
            ما را تکمیل کنید یا از طریق شماره‌های درج‌شده با ما تماس بگیرید. پس
            از دریافت اطلاعات اولیه، تیم ما در کوتاه‌ترین زمان ممکن با شما تماس
            خواهد گرفت. در جلسه مشاوره اولیه، نیازهای شما بررسی شده و بهترین
            راهکارها پیشنهاد می‌شود.
          </p>
        </AccordionTab>

        <AccordionTab
          headerTemplate={() =>
            renderHeader(
              3,
              "آیا راهی وجود دارد که در طول مسیر از روند پیشرفت کار مطلع بشوم؟"
            )
          }
        >
          <p style={{ margin: 0, lineHeight: "1.5" }}>
            بله! ما به شفافیت و اطلاع‌رسانی منظم اهمیت زیادی می‌دهیم. در طول
            پروژه، گزارش‌های دوره‌ای از وضعیت پیشرفت کار به شما ارائه می‌شود.
            این گزارش‌ها شامل اطلاعاتی درباره اقدامات انجام‌شده، نتایج
            به‌دست‌آمده و برنامه‌های آتی خواهد بود. همچنین، شما می‌توانید از
            طریق تماس یا ایمیل با مدیر پروژه در ارتباط باشید و در جریان جزئیات
            پروژه قرار بگیرید.
          </p>
        </AccordionTab>
      </Accordion>
    </Container>
  );
}
