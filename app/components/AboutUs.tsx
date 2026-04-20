import cn from "classnames";
import Image from "next/image";
import videoImg from "@/public/images/video-banner.png";
import Container from "./Container";

export default function AboutUs() {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="text-center lg:text-right w-full lg:w-1/2">
          <span className="text-[#F64B4B] text-sm font-bold md:text-base">
            درباره ما
          </span>

          <div className="mt-2 pb-[36px] md:pb-[60px]">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-black text-[#161c2d]">
              حضوری موثر را در فضای آنلاین
            </h1>
          </div>

          <div className="max-w-full md:max-w-[600px] mx-auto lg:mx-0">
            <p
              className={cn(
                "text-[#161c2d] font-bold mb-6 md:mb-8 leading-7 md:leading-8",
                "text-[14px] md:text-lg opacity-70"
              )}
            >
              قدم اول برای حضور در فضای آنلاین، می‌تواند سخت باشد. اگرچه این
              روزها اینترنت و تلفن همراه در دسترس همه هست و ما دانش اولیه‌ای از
              حضور در این فضا داریم، اما شما نیاز به حضوری موثر در این فضا
              دارید. این اتفاق به لطف یک متخصص امکان پذیر می‌شود. فردی که مسیر
              شما در ابتدا هموار و زیرساخت های مورد نیازتان را فراهم کند. در
              ادامه مسیر همراه باشد و شما را از بزنگاه های آن نجات دهد.
              بهینه‌ترین مسیر برای رسیدن به اهداف کسب و کار را نشانتان بدهد و تا
              رسیدن به نتایج دلخواهتان مثل عضوی از تیم همراه شما باشد. آژانس
              دیجیتال مارکتینگ هارمونی با ارائه خدمات کامل در فضای آنلاین، مانند
              عضوی از تیم، شما را همراهی خواهد کرد.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none aspect-video">
            <Image
              src={videoImg}
              alt="video-banner"
              fill
              className="object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
