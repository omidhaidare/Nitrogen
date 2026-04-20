// "use client";

// import React, { useEffect, useState } from "react";
// import { TabView, TabPanel } from "primereact/tabview";
// import Image, { StaticImageData } from "next/image";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// import financials from "@/public/images/tab-img/financials.png";
// import business from "@/public/images/tab-img/business.png";
// import thailand from "@/public/images/tab-img/thailand.png";
// import Container from "./Container";
// import LinkButton from "../ui/Links";

// interface Card {
//   src: StaticImageData;
//   alt: string;
//   tag: string;
//   title: string;
// }

// export default function ProjectsTab() {
//   const [isSliderActive, setIsSliderActive] = useState(false);

//   useEffect(() => {
//     const checkWidth = () => {
//       setIsSliderActive(window.innerWidth < 1280);
//     };

//     checkWidth();
//     window.addEventListener("resize", checkWidth);

//     return () => {
//       window.removeEventListener("resize", checkWidth);
//     };
//   }, []);

//   const [ref] = useKeenSlider<HTMLDivElement>({
//     slides: {
//       perView: 1.2,
//       spacing: 15,
//     },
//     rtl: true,
//     breakpoints: {
//       "(min-width: 768px)": {
//         slides: {
//           perView: 2.2,
//           spacing: 8,
//         },
//       },
//     },
//   });

//   const cards: Card[] = [
//     {
//       src: financials,
//       alt: "financials-project",
//       tag: "طراحی سایت",
//       title: "صفحه لندینگ برای شرکت مالی و سرمایه‌ای",
//     },
//     {
//       src: business,
//       alt: "business-project",
//       tag: "طراحی سایت وردپرس",
//       title: "صفحه لندینگ برای شرکت دیجیتال مارکتینگ",
//     },
//     {
//       src: thailand,
//       alt: "thailand-project",
//       tag: "طراحی سایت اختصاصی",
//       title: "برا ثبت خدمات و کسب و کارها",
//     },
//   ];

//   return (
//     <Container>
//       <div className="flex items-center justify-center flex-col pb-[60px]">
//         <h1 className="text-3xl font-black text-[#161c2d] mt-4 text-center leading-[1.4]">
//           نمونه کارهای آژانس دیجیتال مارکتینگ هیدروژن
//         </h1>
//       </div>

//       <div className="card pb-10">
//         <TabView
//           className="[&_.p-tabview-nav-container]:overflow-x-auto 
//                      [&_.p-tabview-nav-container]:whitespace-nowrap
//                      [&_.p-tabview-nav-container]:scrollbar-none
//                      [&_.p-tabview-nav]:flex
//                      [&_.p-tabview-nav]:gap-3
//                      md:[&_.p-tabview-nav]:justify-center
//                      [&_.p-tabview-nav]:px-4
//                      md:[&_.p-tabview-nav]:px-0"
//         >
//           <TabPanel className="text-[#616A86]" header="همه">
//             {isSliderActive ? (
//               <div ref={ref} className="keen-slider direction-rtl">
//                 {cards.map((card, index) => (
//                   <div key={index} className="keen-slider__slide">
//                     <CardItem card={card} />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-wrap justify-center gap-6">
//                 {cards.map((card, index) => (
//                   <div key={index} className="w-full md:w-[348px]">
//                     <CardItem card={card} />
//                   </div>
//                 ))}
//               </div>
//             )}
//           </TabPanel>

//           <TabPanel className="text-[#616A86]" header="جدید">
//             <p className="m-0">صفحه جدید</p>
//           </TabPanel>

//           <TabPanel className="text-[#616A86]" header="طراحی گرافیک">
//             <p className="m-0">صفحه طراحی گرافیک</p>
//           </TabPanel>

//           <TabPanel className="text-[#616A86]" header="تولید محتوا">
//             <p className="m-0">صفحه تولید محتوا</p>
//           </TabPanel>

//           <TabPanel className="text-[#616A86]" header="شبکه های اجتماعی">
//             <p className="m-0">صفحه شبکه های اجتماعی</p>
//           </TabPanel>

//           <TabPanel className="text-[#616A86]" header="کمپین های تبلیغاتی">
//             <p className="m-0">صفحه کمپین های تبلیغاتی</p>
//           </TabPanel>
//         </TabView>
//       </div>

//       <LinkButton href="/services" label="مشاهده نمونه کارهای بیشتر" />
//     </Container>
//   );
// }

// function CardItem({ card }: { card: Card }) {
//   return (
//     <div className="w-full md:max-w-[348px] border border-solid border-[#EEE] rounded-[12px] mx-auto">
//       <Image
//         className="rounded-t-[12px] w-full h-auto"
//         src={card.src}
//         alt={card.alt}
//         width={348}
//         height={240}
//       />
//       <div className="p-5 flex flex-col gap-2">
//         <span className="text-[#F64B4B] text-[14px] font-bold">{card.tag}</span>
//         <p className="text-[14px] text-[#101828] font-extrabold">
//           {card.title}
//         </p>
//       </div>
//     </div>
//   );
// }
