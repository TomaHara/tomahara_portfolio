'use client';
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { href: '', label: 'Home', scrollToTop: true },
    { href: '#activities', label: 'Activities' },
    { href: '#works', label: 'Works' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-20 py-10 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-5 sm:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:mb-8">
          <h2
            className="text-2xl font-bold mb-4 sm:mb-0 cursor-pointer"
            onClick={scrollToTop}
          >
            Toma Hara
          </h2>

          <nav className="mb-6 sm:mb-0">
            <ul className="flex flex-wrap justify-center gap-5 text-sm sm:text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                    onClick={(e) => {
                      if (item.scrollToTop) {
                        e.preventDefault();
                        scrollToTop();
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm order-2 sm:order-1">
            © {currentYear} Toma Hara. All rights reserved.
          </p>

          <div className="flex items-center gap-4 order-1 sm:order-2">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={22}
                height={22}
              />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/icons/x.svg"
                alt="X (Twitter)"
                width={24}
                height={24}
              />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/icons/gmail.svg"
                alt="gmail"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.wantedly.com/id/toma_hara"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300 -ml-1"
            >
              <Image
                src="/icons/Wantedly_Mark_LightBG.svg"
                alt="Wantedly"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
