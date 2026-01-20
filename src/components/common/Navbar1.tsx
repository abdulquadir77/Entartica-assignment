// import React from 'react'
// import { useState } from "react";
import {
  // FaBars,
  // FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const marqueeTexts = [
  "MEET, YOUR PEACE BEGINS.",
  "SAFE, CALM & EFFORTLESS SANGAM SNAN.",
  "SEAMLESS JOURNEY FROM GHAT TO SANG",
  "Experience Divinity, One Step at a Time.",
];

const Navbar1 = () => {
  return (
    <div className="w-full bg-primary">
      <div className="hidden md:flex items-center justify-between w-full px-2 gap-6 h-[95px]">
        {/* ================= First Column ================= */}
        <div className="flex-shrink-0 flex items-center p-1 h-full">
          <img
            src="https://entartica.com/wp-content/uploads/2025/05/cropped-Entartica-logo-webp.webp"
            alt="Entartica"
            className="h-[100%] w-[100%] object-contain"
          />
        </div>

        {/* ================= Second Column ================= */}
        <div className="flex flex-col flex-1 gap-2 justify-center">
          {/* Phone + Email */}
          <div className="flex gap-6 justify-center items-center text-white text-sm">
            <a className="flex items-center gap-2 text-white font-bold hover:text-yellow-400">
              <FaPhoneAlt size={14} color="#fcca2b" /> 09429691418
            </a>
            <a className="hidden lg:flex items-center gap-2 font-bold text-white hover:text-yellow-400">
              <FaEnvelope size={14} color="#fcca2b"/> ENQUIRY@ENTARTICA.COM
            </a>
          </div>

          {/* ================= Marquee ================= */}
          <div className="bg-tertiary py-3 overflow-hidden relative w-full">
            <div className="flex animate-marquee whitespace-nowrap gap-10 w-max absolute left-0 top-1/2 -translate-y-1/2">
              {[...marqueeTexts, ...marqueeTexts].map((text, index) => (
                <span
                  key={index}
                  className="inline-flex items-center text-white font-bold text-sm"
                >
                  ⭐ {text}
                </span>
              ))}
            </div>
          </div>

          {/* ================= Menu (YELLOW TEXT, NO BG) ================= */}
          <nav className="flex justify-center gap-6 text-secondary font-semibold text-md">
            <a className="hover:text-yellow-300">HOME</a>

            <button className="flex items-center gap-1 hover:text-yellow-300">
              PARK <MdArrowDropDown size={16} />
            </button>

            <a className="hover:text-yellow-300">RIDES</a>
            <a className="hidden lg:block hover:text-yellow-300">
              CELEBRATIONS
            </a>
            <a className="hidden xl:block hover:text-yellow-300">
              MAGH-MELA 2026
            </a>
            <a className="hover:text-yellow-300">OFFERS</a>
          </nav>
        </div>

        {/* ================= Third Column ================= */}
        <div className="flex flex-col items-end gap-3 flex-shrink-0">
          <div className="flex gap-2">
            {[FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-yellow-400 h-7 w-7 rounded flex items-center justify-center text-purple-900"
                >
                  <Icon size={14} />
                </div>
              ),
            )}
          </div>

          {/* Book Passes + Hamburger (ROW) */}
          <div className="flex gap-2">
            <button className="bg-yellow-400 text-purple-900 rounded h-8 px-5 font-bold text-sm whitespace-nowrap">
              BOOK PASSES
            </button>

            <div className="bg-yellow-400 h-8 w-8 flex rounded items-center justify-center text-purple-900">
              ☰
            </div>
          </div>
        </div>
      </div>

      {/* ================= Marquee Animation ================= */}
      <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 15s linear infinite;
    }
  `}</style>
    </div>
  );
};

export default Navbar1;
