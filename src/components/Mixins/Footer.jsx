import React from 'react';
import Link from 'next/link';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../Common/CustomIcons';

const Footer = () => {
  const year = new Date().getFullYear();

  const teamMembers = [
    'Anggota Kelompok : ',
    'Attaqi Fadhil Arifianto',
    'Erhan HendraGian Permana',
    'Firstyara Putri Hilmanes',
    'Muhammad Nabil Abdillah',
    'Abrar Rayhan Muhammad',
  ];

  const primaryLink = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
  ];

  const secondaryLink = [
    { title: 'Career', url: '/career' },
    { title: 'Internship', url: '/internship' },
  ];

  const tertiaryLink = [
    { title: 'Contact Us', url: '/contact' },
    { title: 'FAQ', url: '/faq' },
  ];

  const legalLink = [
    { title: 'Terms of Service', url: '/terms-of-service' },
    { title: 'Privacy Policy', url: '/privacy-policy' },
  ];

  const socialLink = [
    { title: 'Facebook', icon: <FacebookIcon />, url: '/' },
    { title: 'Instagram', icon: <InstagramIcon />, url: '/' },
    { title: 'Twitter', icon: <TwitterIcon />, url: '/' },
    { title: 'LinkedIn', icon: <LinkedInIcon />, url: '/' },
  ];

  return (
    <footer className="bg-backgroundsecondary text-gray-400">
      <div className="max-w-6xl mx-auto px-6 pt-4">
        <div className="text-center text-sm">
          <p className="mb-2 text-gray-300">©2024. PT TransGo-Innovasi Digital. All rights reserved.</p>
        </div>
      </div>

      {/* Team Slider */}
      <div className="bg-background py-4 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          {/* First loop */}
          {teamMembers.map((member, index) => (
            <span key={`first-${index}`} className="inline-block text-sm px-6">
              {member}
            </span>
          ))}
          {/* Second loop for seamless infinite scroll */}
          {teamMembers.map((member, index) => (
            <span key={`second-${index}`} className="inline-block text-sm px-6">
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

        .animate-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
