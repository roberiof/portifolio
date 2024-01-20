import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TechnologiesCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState<number | undefined>(3);
  const settingsSwiper = {
    modules: [Autoplay],
    spaceBetween: 50,
    slidesPerView,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    style: {
      "--swiper-pagination-color": "#C793F3",
      "--swiper-pagination-bullet-opacity": "1"
    } as any
  };

  const techs = [
    { label: "react", href: "https://reactjs.org/" },
    { label: "typeScript", href: "https://www.typescriptlang.org/" },
    { label: "nextJS", href: "https://nextjs.org/" },
    { label: "tailwindCSS", href: "https://tailwindcss.com/" },
    { label: "stripe", href: "https://stripe.com/docs" },
    { label: "firebase", href: "https://firebase.google.com/docs" },
    { label: "materialUI", href: "https://mui.com/" },
    { label: "framerMotion", href: "https://www.framer.com/docs/" },
    { label: "strapi", href: "https://strapi.io/documentation/" },
    { label: "chakraUI", href: "https://chakra-ui.com/" },
    { label: "shadcnUI", href: "https://ui.shadcn.com/" }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setSlidesPerView(3);
      } else if (window.innerWidth <= 1000 && window.innerWidth >= 650) {
        setSlidesPerView(5);
      } else if (window.innerWidth <= 1300 && window.innerWidth >= 1000) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(8);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="bg-backgroundInternal-300 py-12">
      <p className="text-center text-sm font-semibold tracking-[0.25em] text-white/50">
        TECHNOLOGIES I WORK WITH
      </p>
      <Swiper {...settingsSwiper}>
        {techs &&
          techs
            .concat(techs)
            .concat(techs)
            .concat(techs)
            .map((tech, index) => (
              <SwiperSlide key={index} className="mt-16 cursor-grab">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  className="flex cursor-pointer select-none flex-col items-center justify-center gap-4  px-4"
                >
                  <a
                    href={tech.href}
                    target="__blank"
                    className="relative h-[55px] w-[55px] rounded-md"
                  >
                    <Image
                      src={"/" + tech.label + ".png"}
                      fill
                      alt={tech.label}
                      className="rounded-md object-contain"
                    />
                  </a>
                  <span className="font-medium text-white/50 hover:underline">
                    {" "}
                    {tech.label[0].toUpperCase() + tech.label.slice(1)}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
};

export default TechnologiesCarousel;
