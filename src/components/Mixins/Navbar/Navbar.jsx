'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import Image from 'next/image';

import styles from './Navbar.module.css';
import { headerNavLinks } from '@/data/headerNavLinks';
import { classNames } from '@/lib/classNames';
import ThemeToggle from '@/components/Common/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        header?.classList.add(styles.navbarFixed);
      } else {
        header?.classList.remove(styles.navbarFixed);
      }
    };
  }, []);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    setIsOpen(!isOpen);

    if (isOpen) {
      hamburger?.classList.remove(styles.hamburgerActive);
      navMenu?.classList.add('hidden');
    } else {
      hamburger?.classList.add(styles.hamburgerActive);
      navMenu?.classList.remove('hidden');
    }
  };

  // isMenuActive handler
  const isMenuActive = (path) => {
    const isHomePage = pathname === '/' && path === '/';

    if (isHomePage) {
      return true;
    }

    return pathname !== '/' && path !== '/' && pathname.includes(path);
  };

  // Get active route name
  const getActiveRouteName = () => {
    if (pathname === '/') {
      return 'Beranda';
    }
    
    if (pathname.includes('/dokumen-k3')) {
      return 'Panduan K3 & SOP Driver';
    }
    
    const activeLink = headerNavLinks?.find(link => 
      pathname !== '/' && link.path !== '/' && pathname.includes(link.path)
    );
    
    return activeLink ? activeLink.title : 'Beranda';
  };

  return (
    <header className="absolute top-0 left-0 z-50 flex items-center w-full bg-transparent">
      <div className="container mx-auto">
        <div className="mx-auto w-full px-10">
          <div className="relative flex items-center justify-between py-4">
            {/* Logo */}
            <div className="px-4 w-12 h-6">
              <Link href="/" legacyBehavior>
                <a
                  className="inline-flex items-center gap-4 text-2xl font-bold text-teal-400"
                  aria-label="logo"
                >
                  <Image src="/assets/img/Logo.png" alt="TRNSGO Logo" width={100} height={100} />
                  <span className="text-white whitespace-nowrap font-semibold">{getActiveRouteName()}</span>
                </a>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 px-4">
              <nav>
                <ul className="flex items-center gap-8">
                  {headerNavLinks?.map((a, i) => (
                    <li key={i}>
                      <Link
                        href={a.path}
                        className={classNames(
                          isMenuActive(a.path)
                            ? 'bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] bg-clip-text text-transparent'
                            : 'text-white',
                          'font-semibold text-base hover:bg-gradient-to-r hover:from-[#4DB8B2] hover:to-[#A6FBD4] hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out'
                        )}
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <button className="px-6 py-3 bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center px-4 lg:hidden">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block"
                onClick={hamburgerHandler}
              >
                <span
                  className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out bg-white`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} transition duration-300 ease-in-out bg-white`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out bg-white`}
                ></span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav
              id="navMenu"
              className="hidden absolute py-5 bg-slate-800 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:hidden"
            >
              <ul className="block">
                {headerNavLinks?.map((a, i) => (
                  <li key={i}>
                    <Link
                      href={a.path}
                      className={classNames(
                        isMenuActive(a.path)
                          ? 'bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] bg-clip-text text-transparent'
                          : 'text-white',
                        'font-medium text-base py-3 px-6 flex hover:bg-gradient-to-r hover:from-[#4DB8B2] hover:to-[#A6FBD4] hover:bg-clip-text hover:text-transparent transition duration-300 ease-in-out'
                      )}
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
                <li className="px-6 pt-4">
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Hubungi Kami
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
