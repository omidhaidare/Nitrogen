"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/public/nitrogen-logo-white.svg";
import Container from "./Container";
import ButtonComponent from "../ui/Button";
import ContactModal from "@/app/ui/ContactModal";

export default function Footer() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowModal = () => setIsModalVisible(true);
  const handleHideModal = () => setIsModalVisible(false);

  return (
    <footer className="text-white bg-black pt-10 lg:pt-20 px-4 sm:px-8 lg:px-16 xl:px-40 relative overflow-hidden">
      <Container noPadding noPaddingBottom>
        <div className="pb-8 lg:pb-[60px]">
          <div className="relative">
            <div className="relative z-20 bg-black rounded-[12px] lg:rounded-[20px] py-6 lg:py-8 px-6 lg:px-16 flex flex-col 2xl:flex-row justify-between items-center gap-6 border-4 border-transparent shadow-[0_0_10px_4px_rgba(0,0,0,0.5)]">
              <span className="font-extrabold lg:text-start text-lg lg:text-2xl text-center xl2:text-right leading-7 lg:leading-10">
                برای رونق بیشتر کسب‌و‌کارتان در فضای آنلاین، روی دکمه دریافت
                <br />
                مشاوره کلیک و اطلاعاتتان را ثبت کنید تا متخصصان ما با شما تماس
                بگیرند.
              </span>

              <ButtonComponent
                label="دریافت مشاوره"
                color="secondary"
                onClick={handleShowModal}
              />
            </div>

            <div className="absolute top-[-4px] left-[-4px] right-[-4px] bottom-[-4px] rounded-[16px] lg:rounded-[24px] bg-gradient-to-r from-sky-400 via-purple-500 to-red-400 blur-[10px] z-10"></div>
          </div>
        </div>

        <ContactModal visible={isModalVisible} onHide={handleHideModal} />

        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[91px] py-8 lg:py-12">
          <div className="flex flex-col gap-6 lg:gap-[34px] items-center md:items-start">
            <Image
              src={brandLogo}
              alt="brand-logo"
              className="w-32 lg:w-auto"
            />

            <p className="text-[#FFF] opacity-65 text-sm lg:text-[13.5px] font-normal leading-6 max-w-[250px] text-center md:text-right">
              حضور آنلاین خود را تقویت کنید و با تخصص ما در زمینه طراحی سایت،
              سئو، گوگل آدز و شبکه‌های اجتماعی رشد چشمگیری را تجربه کنید
            </p>
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-[13.5px] font-normalt mb-4 text-[#FFF] opacity-65">
              آژانس دیجیتال
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  خدمات
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  نمونه کارها
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  وبلاگ
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-purple-400">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h2 className="text-[13.5px] font-normalt mb-4 text-[#FFF] opacity-65">
              خدمات
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  طراحی سایت
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  بهبود سئو
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  تولید محتوا
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  گوگل ادز
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  ساخت تیزر تبلیغاتی
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-purple-400">
                  طراحی UI/UX
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:gap-[24px] text-center md:text-right">
            <div>
              <h2 className="text-[13.5px] font-normalt mb-4 text-[#FFF] opacity-65">
                آدرس ما
              </h2>
              <p className="text-white text-sm lg:text-[15px] font-normal leading-6">
                سعادت‌آباد، بالاتر از میدان کاج، بلوار بهزاد، نبش کوچه باغستان،
                پلاک ۲، آژانس دیجیتال مارکتینگ نیتروژن
              </p>
            </div>

            <div>
              <h2 className="text-[13.5px] font-normalt mb-4 text-[#FFF] opacity-65">
                ارتباط با ما
              </h2>
              <div className="mt-4">
                <span>۰۹۳۷۶۳۷۱۴۱۹</span>
              </div>
              <div>
                <span>am.maghani@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs lg:text-[12px] font-normal mt-8 border-t border-gray-700 pt-5 pb-10 text-[#FFF] opacity-65">
          کپی رایت © تمامی حقوق برای آژانس دیجیتال مارکتینگ محفوظ است.
        </div>
      </Container>
    </footer>
  );
}
