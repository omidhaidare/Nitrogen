"use client";

import Image from "next/image";

import men from "@/public/icons/why-choose-us/men.svg";
import chate from "@/public/icons/why-choose-us/chate.svg";
import circle from "@/public/icons/why-choose-us/circle.svg";
import twoFour from "@/public/icons/why-choose-us/two-four.svg";
import Container from "./Container";

export default function WhyChooseUs() {
  return (
    <Container>
      <div className="flex items-center justify-center flex-col pb-[60px]">
        <span className="text-[#F64B4B] text-sm font-bold">
          چرا ما را انتخاب کنید
        </span>
        <h1 className="text-3xl font-black text-[#161c2d] mt-4 text-center leading-[1.4]">
          مردم ما را انتخاب می‌کنند زیرا ما بهترین‌ها را برای همه ارائه می‌دهیم
        </h1>
      </div>

      <div className="grid md:grid-cols-2 justify-self-center gap-x-14 gap-y-[74px]">
        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={men} alt="circle-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              استراتژی‌های سفارشی و داده‌محور
            </h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[340px]">
              ارائه راهکارهای منحصر به فرد با استفاده از تحلیل داده‌ها و تحقیقات
              بازار برای تطابق کامل با نیازها و اهداف مشتریان.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={twoFour} alt="circle-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              تخصص در چندین حوزه دیجیتال
            </h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[340px]">
              توانایی در ارائه خدمات متنوع مانند سئو، تولید محتوا، تبلیغات
              آنلاین و طراحی وب‌سایت، که به مشتریان این امکان را می‌دهد تا تمام
              نیازهای دیجیتال خود را در یک مکان برطرف کنند.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={chate} alt="circle-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              پشتیبانی و مشاوره اختصاصی
            </h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[340px]">
              ارائه مشاوره‌های شخصی‌سازی‌شده و پشتیبانی مستمر برای کمک به
              مشتریان در بهینه‌سازی استراتژی‌های دیجیتال و حل مشکلات سریع.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={circle} alt="24-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              گزارش‌دهی شفاف و نتایج قابل اندازه‌گیری
            </h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[400px]">
              ارائه گزارش‌های جامع و شفاف با تحلیل عملکرد و نتایج کمپین‌ها به
              مشتریان، تا آن‌ها بتوانند تأثیر واقعی و ROI را مشاهده کنند.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
