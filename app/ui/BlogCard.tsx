import React from "react";
import Image, { StaticImageData } from "next/image";

import clockicon from "@/public/icons/blog-section/clock.svg";
import messageicon from "@/public/icons/blog-section/message-text.svg";

interface BlogCardProps {
  image: StaticImageData;
  alt: string;
}

export default function BlogCard({ image, alt }: BlogCardProps) {
  return (
    <div className="w-full md:max-w-[350px] border border-solid border-[#EEE] rounded-[12px] overflow-hidden">
      <div className="relative aspect-video">
        <Image className="object-cover" src={image} alt={alt} fill />
      </div>

      <div className="flex flex-row flex-wrap items-center gap-2 pt-4 px-4">
        <span className="text-[#C11574] text-xs md:text-[14px] font-bold bg-[#FDF2FA] rounded-2xl py-0.5 px-2.5">
          طراحی
        </span>
        <span className="text-[#3538CD] text-xs md:text-[14px] font-bold bg-[#EEF4FF] rounded-2xl py-0.5 px-2.5">
          تحقیق
        </span>
        <span className="text-[#3538CD] text-xs md:text-[14px] font-bold bg-[#EEF4FF] rounded-2xl py-0.5 px-2.5">
          هوش مصنوعی
        </span>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[#101828] text-sm font-extrabold leading-6 md:leading-7">
          ۱۰ زمینه مورد توجه بر پایه هوش مصنوعی در سالی که گذشت
        </h3>
        <p className="text-xs md:text-[14px] text-[#667085] line-clamp-2 text-ellipsis font-bold leading-6 md:leading-7">
          در سال‌های اخیر هوش‌مصنوعی زندگی ما را با فناوری‌های نوآورانه‌اش
          دستخوش تغییرات اساسی کرده است. اگر بخواهیم نگاهمان را به این موضوع
          وسیع‌تر کنیم می‌توانیم بگوییم این تکنولوژی طوفانی در تمامی صنایع مختلف
          به راه انداخته است و تأثیر عمیقی بر روند پیشرفت تک‌تک آن‌ها داشته است.
        </p>
      </div>

      <div className="flex flex-row items-center justify-between pb-4 px-4">
        <span className="text-[#6941C6] text-xs md:text-[14px] font-bold">
          ۱۴ آبان ۱۴۰۳
        </span>

        <div className="flex flex-row gap-2">
          <span className="flex flex-row items-center gap-1 text-[#667085] text-xs md:text-[12px] font-bold">
            <Image src={clockicon} alt="clock-icon" width={12} height={12} />۵
            دقیقه
          </span>

          <span className="flex flex-row items-center gap-1 text-[#667085] text-xs md:text-[12px] font-bold">
            <Image
              src={messageicon}
              alt="message-icon"
              width={12}
              height={12}
            />
            ۱۲ نظر
          </span>
        </div>
      </div>
    </div>
  );
}
