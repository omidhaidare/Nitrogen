"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import brandLogo from "@/public/nitrogen-logo.svg";
import cn from "classnames";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import Container from "./Container";
import ButtonComponent from "@/app/ui/Button";
import ContactModal from "@/app/ui/ContactModal"; // مسیر مودال رو وارد کنید

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false); // state برای کنترل مودال

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleShowModal = () => {
    setIsModalVisible(true); // مودال رو باز می‌کنیم
  };

  const handleHideModal = () => {
    setIsModalVisible(false); // مودال رو می‌بندیم
  };

  return (
    <div className="bg-[#f4f7fa] w-full fixed top-0 left-0 z-50">
      <Container noPadding noPaddingBottom classNames="pb-[16px] lg:pb-[36px]">
        <div className="flex justify-between lg:justify-between items-center pt-2.5 lg:pt-5">
          <div className="flex items-center flex-row gap-20">
            <Link
              href="/"
              onClick={() => handleMenuClick("home")}
              className="text-2xl font-semibold text-indigo-600"
            >
              <Image src={brandLogo} alt="brand-logo" />
            </Link>

            <nav className="hidden font-semibold lg:flex flex-wrap text-sm gap-4 md:gap-6 items-center">
              <Link
                href="/"
                onClick={() => handleMenuClick("home")}
                className={cn("text-[#191919] hover:text-indigo-600", {
                  "border-b-2 border-blue-500 shadow": activeMenu === "home",
                })}
              >
                خانه
              </Link>

              <Link
                href="/"
                onClick={() => handleMenuClick("products")}
                className={cn("text-[#191919] hover:text-indigo-600", {
                  "border-b-2 border-blue-500 shadow":
                    activeMenu === "products",
                })}
              >
                خدمات
              </Link>

              <Link
                href="/"
                onClick={() => handleMenuClick("projects")}
                className={cn("text-[#191919] hover:text-indigo-600", {
                  "border-b-2 border-blue-500 shadow":
                    activeMenu === "projects",
                })}
              >
                نمونه کار ها
              </Link>

              <Link
                href="/"
                onClick={() => handleMenuClick("blog")}
                className={cn("text-[#191919] hover:text-indigo-600", {
                  "border-b-2 border-blue-500 shadow": activeMenu === "blog",
                })}
              >
                وبلاگ
              </Link>

              <Link
                href="/about-us"
                onClick={() => handleMenuClick("about")}
                className={cn("text-[#191919] hover:text-indigo-600", {
                  "border-b-2 border-blue-500 shadow": activeMenu === "about",
                })}
              >
                درباره ما
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex flex-col md:flex-row gap-2.5">
            <ButtonComponent
              label="۰۹۳۷۶۳۷۱۴۱۹"
              color="outline"
              to="tel:+989376371419"
            />

            {/* دکمه برای باز کردن مودال */}
            <ButtonComponent
              onClick={handleShowModal} // مودال باز می‌شود
              label="دریافت مشاوره"
              color="primary"
            />
          </div>

          <div className="lg:hidden">
            <Button
              icon="pi pi-bars"
              onClick={() => setVisible(true)}
              className="text-xs sm:text-sm md:text-base lg:text-lg"
            />
          </div>
        </div>

        {/* اینجا مودال رو اضافه می‌کنیم */}
        <ContactModal visible={isModalVisible} onHide={handleHideModal} />

        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          position="left"
          className="p-0"
        >
          <ul className="p-4 space-y-4">
            <li>
              <Link href="/" onClick={() => handleMenuClick("home")}>
                خانه
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("services")}>
                طراحی وبسایت
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("services")}>
                سئو و مارکتینگ
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("services")}>
                پشتیبانی فنی
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("portfolio")}>
                پروژه‌های طراحی
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("portfolio")}>
                وب اپلیکیشن
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("portfolio")}>
                موبایل اپلیکیشن
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("blog")}>
                مقالات فنی
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => handleMenuClick("blog")}>
                آموزش‌ ها
              </Link>
            </li>
            <li>
              <Link href="/about-us" onClick={() => handleMenuClick("about")}>
                درباره ما
              </Link>
            </li>
          </ul>

          <div className="p-4 flex flex-col gap-2.5">
            <ButtonComponent
              label="۰۹۳۷۶۳۷۱۴۱۹"
              color="outline"
              to="tel:+989376371419"
            />

            <ButtonComponent
              label="دریافت مشاوره"
              color="primary"
              onClick={handleShowModal} // مودال باز می‌شود
            />
          </div>
        </Sidebar>
      </Container>
    </div>
  );
}
