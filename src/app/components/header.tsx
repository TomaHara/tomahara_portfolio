'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '', label: 'Home', scrollToTop: true },
    { href: '#activities', label: 'Activities' },
    { href: '#works', label: 'Works' },
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between sm:px-10 py-6 p-5 bg-white shadow-sm z-50">
      <h1
        className="text-2xl sm:text-3xl font-bold cursor-pointer"
        onClick={scrollToTop}
      >
        Toma Hara
      </h1>

      <nav className="hidden sm:flex">
        <ul className="flex space-x-4 text-2xl">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="px-2 border-2 border-transparent hover:border-black rounded-full transition-all duration-300"
            >
              <a
                href={item.href}
                onClick={(e) => {
                  if (item.scrollToTop) {
                    e.preventDefault();
                    scrollToTop();
                  }
                  handleMenuItemClick();
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="sm:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
      >
        {isMenuOpen ? (
          <Image
            src="/icons/exit.svg"
            alt="閉じるボタン"
            width={40}
            height={40}
          />
        ) : (
          <Image
            src="/icons/menu.svg"
            alt="メニューボタン"
            width={40}
            height={40}
          />
        )}
      </button>

      <div
        className={`
          fixed inset-0 bg-white bg-opacity-95 flex flex-col justify-center items-center
          transform transition-transform duration-300 ease-in-out z-40
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          sm:hidden
        `}
      >
        <nav className="w-full">
          <ul className="flex flex-col items-center space-y-12 text-3xl">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`
                  transform transition-all duration-500 ease-in-out delay-${
                    index * 100
                  }
                  ${
                    isMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-10 opacity-0'
                  }
                `}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 border-b-2 border-transparent hover:border-black transition-all duration-300"
                  onClick={(e) => {
                    if (item.scrollToTop) {
                      e.preventDefault();
                      scrollToTop();
                    }
                    handleMenuItemClick();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
