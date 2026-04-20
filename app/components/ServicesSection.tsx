import Image from "next/image";

import code from "@/public/icons/services-section/code.svg";
import chart from "@/public/icons/services-section/chart-square.svg";
import google from "@/public/icons/services-section/google-box.svg";
import menu from "@/public/icons/services-section/menu-board.svg";
import Container from "./Container";
// import LinkButton from "../ui/Links";

export default function ServicesSection() {
  return (
    <Container classNames="mt-24">
      <h1 className="text-center font-black text-3xl pb-[60px] text-[#161C2D]">
        خدمات ما در آژانس دیجیتال مارکتینگ نیتروژن
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="border gap-5 flex flex-col items-center py-[39px] px-[31px] border-[#deffee] border-solid rounded-[20px]">
          <div className="bg-[#FFF2F8] p-4 rounded-[20px]">
            <Image src={code} alt="web-design-icon" />
          </div>

          <span className="text-[18px] font-bold text-[#161C2D]">
            طراحی سایت
          </span>

          <p className="text-sm text-[#252525] font-bold opacity-65 text-justify leading-[24px] line-clamp-3">
            طراحی سایت شامل ایجاد ظاهر و ساختار صفحات وب‌سایت است. این فرآیند
            شامل طراحی رابط کاربری (UI)، تجربه کاربری (UX) و توسعه بخش‌های فنی
            مانند ریسپانسیو بودن و سرعت بارگذاری سریع است.
          </p>

          {/* <LinkButton href="/services/web-design" label="بیشتر بدانید" /> */}
        </div>

        <div className="border gap-5 flex flex-col items-center py-[39px] px-[31px] border-[#deffee] border-solid rounded-[20px]">
          <div className="bg-[#F1F7FF] p-4 rounded-[20px]">
            <Image src={google} alt="google-ads-icon" />
          </div>

          <span className="text-[18px] font-bold text-[#161C2D]">گوگل ادز</span>

          <p className="text-sm text-[#252525] font-bold opacity-65 text-justify leading-[24px] line-clamp-3">
            تبلیغات گوگل (Google Ads) روشی برای نمایش تبلیغات در نتایج جستجو،
            یوتیوب و سایت‌های همکار است. این تبلیغات می‌توانند به صورت متنی،
            تصویری یا ویدئویی باشند و باعث افزایش دیده شدن برند و جذب مشتریان
            جدید شوند.
          </p>

          {/* <LinkButton href="/services/web-design" label="بیشتر بدانید" /> */}
        </div>

        <div className="border gap-5 flex flex-col items-center py-[39px] px-[31px] border-[#deffee] border-solid rounded-[20px]">
          <div className="bg-[#DEFFEE] p-4 rounded-[20px]">
            <Image src={chart} alt="seo-icon" />
          </div>

          <span className="text-[18px] font-bold text-[#161C2D]">سئو سایت</span>

          <p className="text-sm text-[#252525] font-bold opacity-65 text-justify leading-[24px] line-clamp-3">
            سئو (بهینه‌سازی موتور جستجو) شامل بهبود رتبه سایت در نتایج جستجو
            است. این فرآیند شامل بهینه‌سازی کلمات کلیدی، ساختار سایت، سرعت
            بارگذاری و بهبود تجربه کاربری است تا سایت در موتورهای جستجو بالاتر
            دیده شود و ترافیک ارگانیک بیشتری جذب کند.
          </p>

          {/* <LinkButton href="/services/web-design" label="بیشتر بدانید" /> */}
        </div>

        <div className="border gap-5 flex flex-col items-center py-[39px] px-[31px] border-[#deffee] border-solid rounded-[20px]">
          <div className="bg-[#FFF7E3] p-4 rounded-[20px]">
            <Image src={menu} alt="content-icon" />
          </div>

          <span className="text-[18px] font-bold text-[#161C2D]">
            تولید محتوا
          </span>

          <p className="text-sm text-[#252525] font-bold opacity-65 text-justify leading-[24px] line-clamp-3">
            تولید محتوا شامل ایجاد متن، تصویر، ویدئو و سایر اشکال اطلاعاتی است
            که برای جذب و جلب توجه مخاطبان طراحی شده‌اند. این محتوا می‌تواند
            شامل مقالات وبلاگی، پست‌های شبکه‌های اجتماعی و محتوای وب‌سایت باشد.
            هدف آن افزایش تعامل با مخاطب و تقویت برندینگ است.
          </p>

          {/* <LinkButton href="/services/web-design" label="بیشتر بدانید" /> */}
        </div>
      </div>
    </Container>
  );
}
