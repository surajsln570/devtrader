// Slider2.jsx
"use client"
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <>
    <Slider className="w-[85vw] mx-auto" {...settings}>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="px-4">
          <div className="bg-black/80 rounded-xl p-6 md:p-10 text-white text-base md:text-xl flex items-center justify-center min-h-[250px] md:min-h-[300px]">
            Slide {i} - Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ratione excepturi magnam, corporis consequatur inventore distinctio
            accusantium? Natus, suscipit repellat laborum minima, architecto
            aperiam repudiandae impedit tempore error beatae iure officia.
          </div>
        </div>
      ))}
    </Slider>
    <style>{`
        .slick-dots li button:before {
          color: white;       /* inactive dot */
          opacity: 0.5;
          font-size: 12px;
        }
        .slick-dots li.slick-active button:before {
          color: #0A66C2;     /* active dot */
          opacity: 1;
        }
      `}</style>
      </>
  );
}
