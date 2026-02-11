// Testimunial.jsx
import React from "react";
import pic1 from "@/assets/pic1.jpg";
import Slider2 from "./comp/Slider2";

export default function Testimunial() {
  return (
    <div
      className="relative bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${pic1})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Client Testimonials
        </h1>
        <div className="w-full ">
          <Slider2 />
        </div>
      </div>
    </div>
  );
}
