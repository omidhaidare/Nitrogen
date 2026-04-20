"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import img01 from "@/public/images/blog-section/Image-01.png";
import img02 from "@/public/images/blog-section/Image-02.png";
import img03 from "@/public/images/blog-section/Image-03.png";
import Container from "./Container";
// import LinkButton from "@/app/ui/Links";
import BlogCard from "@/app/ui/BlogCard";

const BlogSection = () => {
  const [isSliderActive, setIsSliderActive] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsSliderActive(window.innerWidth < 1280);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    rtl: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.2,
          spacing: 8,
        },
      },
    },
  });

  const cards = [
    { image: img01, alt: "img01-project" },
    { image: img02, alt: "img02-project" },
    { image: img03, alt: "img03-project" },
  ];

  return (
    <Container>
      <h1 className="text-center font-black text-3xl md:text-3xl pb-[36px] md:pb-[60px] text-[#161C2D]">
        جدیدترین مقاله های نیتروژن
      </h1>

      {isSliderActive ? (
        <div ref={ref} className="keen-slider direction-rtl pb-8 md:pb-10">
          {cards.map((card, index) => (
            <div key={index} className="keen-slider__slide">
              <BlogCard image={card.image} alt={card.alt} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex pb-8 md:pb-10 flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-8">
          {/* Blog Card 1 */}
          <BlogCard image={img01} alt={"img01-project"} />

          {/* Blog Card 2 */}
          <BlogCard image={img02} alt={"img02-project"} />

          {/* Blog Card 3 */}
          <BlogCard image={img03} alt={"img03-project"} />
        </div>
      )}

      {/* <LinkButton href="/blogs" label="مشاهده مقاله های بیشتر" /> */}
    </Container>
  );
};

export default BlogSection;
