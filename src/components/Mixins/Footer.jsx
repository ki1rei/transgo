import React from "react";
import Link from "next/link";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Common/CustomIcons";

const Footer = () => {
  const year = new Date().getFullYear();

  const teamMembers = [
    "Anggota Kelompok : ",
    "Attaqi Fadhil Arifianto",
    "Erhan HendraGian Permana",
    "Firstyara Putri Hilmanes",
    "Muhammad Nabil Abdillah",
    "Abrar Rayhan Muhammad",
  ];

  const primaryLink = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
  ];

  const secondaryLink = [
    { title: "Career", url: "/career" },
    { title: "Internship", url: "/internship" },
  ];

  const tertiaryLink = [
    { title: "Contact Us", url: "/contact" },
    { title: "FAQ", url: "/faq" },
  ];

  const legalLink = [
    { title: "Terms of Service", url: "/terms-of-service" },
    { title: "Privacy Policy", url: "/privacy-policy" },
  ];

  const socialLink = [
    { title: "Facebook", icon: <FacebookIcon />, url: "/" },
    { title: "Instagram", icon: <InstagramIcon />, url: "/" },
    { title: "Twitter", icon: <TwitterIcon />, url: "/" },
    { title: "LinkedIn", icon: <LinkedInIcon />, url: "/" },
  ];

  return (
    <footer className="relative bg-backgroundsecondary text-gray-400">
      {/* Motorcycle Animation - Above Footer */}
      <div className="motorcycle-ride">
        <img
          src="/assets/img/Motorcycle.png"
          alt="Motorcycle"
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain rotate-12"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <div className="text-center text-xs sm:text-sm">
          <p className="mb-2 text-gray-300">
            ©2024. PT TransGo-Innovasi Digital. All rights reserved.
          </p>
        </div>
      </div>

      {/* Team Slider */}
      <div className="bg-background py-3 sm:py-4 overflow-hidden border-t border-slate-700">
        <div className="animate-scroll whitespace-nowrap">
          {/* First loop */}
          {teamMembers.map((member, index) => (
            <span
              key={`first-${index}`}
              className="inline-block text-xs sm:text-sm px-4 sm:px-6"
            >
              {member}
            </span>
          ))}
          {/* Second loop for seamless infinite scroll */}
          {teamMembers.map((member, index) => (
            <span
              key={`second-${index}`}
              className="inline-block text-xs sm:text-sm px-4 sm:px-6"
            >
              {member}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes ride {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100px);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .motorcycle-ride {
          position: absolute;
          top: -40px;
          left: 0;
          z-index: 10;
          animation: ride 10s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
