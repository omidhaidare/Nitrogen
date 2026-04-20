"use client";

import Image from "next/image";

import men from "@/public/icons/why-choose-us/men.svg";
import chate from "@/public/icons/why-choose-us/chate.svg";
import eye from "@/public/icons/why-choose-us/eye.svg";
import twoFour from "@/public/icons/why-choose-us/two-four.svg";
import Container from "../components/Container";

export default function OurValues() {
  return (
    <Container classNames="pb-[100px]">
      <div className="flex items-center justify-center flex-col py-[60px]">
        <h1 className="text-3xl font-black text-[#161c2d] my-10 text-center">
          ارزش‌ها و اصول ما در آژانس نیتروژن
        </h1>
      </div>

      <div className="grid md:grid-cols-2 justify-self-center gap-x-14 gap-y-[74px]">
        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={twoFour} alt="circle-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">ماموریت ما</h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[340px]">
              ما در نیتروژن با تمام توان تلاش می‌کنیم تا بالاترین سطح کیفیت را
              در توسعه نرم‌افزارها و خدمات ارائه دهیم. باور داریم که موفقیت
              پایدار، از دل تعهد واقعی به کیفیت بیرون می‌آید.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={men} alt="circle-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">وظایف ما</h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[340px]">
              ما خود را مسئول می‌دانیم که در هر مرحله از مسیر، از تحلیل اولیه تا
              پشتیبانی نهایی، با دقت و صداقت کامل عمل کنیم. رعایت اصول اخلاقی،
              احترام به نیاز مشتری و پایبندی به کیفیت، از مهم‌ترین وظایف ما در
              نیتروژن است.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={eye} alt="eye-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">چشم‌انداز ما</h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[400px]">
              ما به آینده‌ای می‌اندیشیم که در آن، نیتروژن به عنوان مرجعی
              قابل‌اعتماد و پیشرو در نوآوری‌های دیجیتال شناخته می‌شود؛ جایی که
              همواره یک گام جلوتر از نیازهای مشتریان حرکت می‌کنیم.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex items-center justify-center w-[80px] h-[80px]">
            <Image src={chate} alt="chat-icon" className="w-full h-full" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">ارزش‌های ما</h3>
            <p className="text-[#161C2D] text-[15.3px] font-bold opacity-70 leading-7 max-w-[340px]">
              ما به ارتباطی شفاف، دوسویه و ارزش‌آفرین با مشتریان باور داریم. از
              پشتیبانی ۲۴ ساعته و برنامه‌های ویژه، تا ارائه محتوای آموزشی و
              طرح‌های وفاداری، همیشه همراه شما هستیم.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
