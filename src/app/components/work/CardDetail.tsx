'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Work } from '@/types';

interface CardDetailProps extends Work {
  onClose: () => void;
}

export default function CardDetail({
  title,
  description,
  imageUrls,
  tools,
  createdAt,
  githubUrl,
  link,
  demoUrl,
  figmaUrl,
  presentationUrl,
  onClose,
}: CardDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // モーダルが開いている間はスクロールを無効にする
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // 最小スワイプ距離の閾値
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // タッチ終了時にリセット
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && imageUrls.length > 1) {
      handleNextImage();
    }
    if (isRightSwipe && imageUrls.length > 1) {
      handlePrevImage();
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? imageUrls.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === imageUrls.length - 1 ? 0 : prev + 1
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // モーダルの外側がクリックされた場合のみ閉じる
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm p-5 z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative flex flex-col w-full max-w-7xl max-h-11/12 lg:aspect-[5/3] bg-white rounded-lg shadow-lg p-6 text-red overflow-y-auto ">
        <Image
          src="/icons/exit.svg"
          alt="閉じるボタン"
          width={50}
          height={50}
          className="sticky top-0 right-0 cursor-pointer self-end z-60"
          onClick={onClose}
        />
        <div className="contents sm:flex items-center justify-start gap-8">
          <div className="order-1 sm:order-0 mb-4 sm:mb-0">
            <label className="font-semibold text-xs sm:text-sm text-gray-800">
              Project
            </label>
            <h2 className="w-full font-semibold text-2xl sm:text-3xl mt-2">
              {title}
            </h2>
          </div>
          <nav className="order-0 sm:order-1 -mt-10 mb-2 sm:mt-0 sm:mb-0">
            <ul className="flex items-center justify-start gap-4 sm:gap-6">
              {githubUrl && (
                <li className="flex items-center justify-center cursor-pointer">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icons/github.svg"
                      alt="GitHub"
                      width={50}
                      height={50}
                      className="w-10 sm:w-12"
                    />
                  </a>
                </li>
              )}
              {demoUrl && (
                <li className="cursor-pointer">
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icons/youtube.svg"
                      alt="YouTube"
                      width={50}
                      height={50}
                      className="w-10 sm:w-12"
                    />
                  </a>
                </li>
              )}
              {figmaUrl && (
                <li className="cursor-pointer">
                  <a href={figmaUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icons/figma.svg"
                      alt="Figma"
                      width={50}
                      height={50}
                      className="w-10 sm:w-12"
                    />
                  </a>
                </li>
              )}
              {presentationUrl && (
                <li className="cursor-pointer">
                  <a
                    href={presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/link.svg"
                      alt="link"
                      width={50}
                      height={50}
                      className="w-10 sm:w-12"
                    />
                  </a>
                </li>
              )}
              {link && (
                <li className="cursor-pointer">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icons/link.svg"
                      alt="link"
                      width={50}
                      height={50}
                      className="w-10 sm:w-12"
                    />
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div className="contents sm:flex w-full gap-6 mt-4 lg:mt-8">
          <div className="order-3 sm:order-0 flex flex-col sm:w-1/2 mt-4 sm:mt-0">
            <label className="text-gray-800 font-semibold text-xs sm:text-sm">
              Description
            </label>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              {description}
            </p>
            <label className="order-4 text-gray-800 font-semibold text-xs sm:text-sm mt-4 sm:mt-8">
              Tools
            </label>
            <div className="order-5">
              <div className="sm:w-1s/2 text-xs sm:text-sm leading-relaxed mt-2 inline-flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div
            className="order-2 sm:order-1 flex flex-col sm:w-1/2"
            ref={imageContainerRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {imageUrls.length > 1 && (
              <div className="flex self-center space-x-2 mb-2">
                <div className="flex items-center space-x-2">
                  {imageUrls.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                        index === currentImageIndex ? 'bg-black' : 'bg-black/30'
                      } cursor-pointer transition-colors duration-200`}
                      onClick={() => handleIndicatorClick(index)}
                      aria-label={`画像 ${index + 1} に切り替え`}
                    />
                  ))}
                </div>
              </div>
            )}
            <div className="relative aspect-[5/3] rounded-lg overflow-hidden group">
              {/* 現在の画像 */}
              <Image
                src={imageUrls[currentImageIndex]}
                alt={`${title} (${currentImageIndex + 1}/${imageUrls.length})`}
                fill={true}
                className="object-cover transition-transform duration-300 ease-in-out"
              />

              {/* 左右の矢印（複数画像がある場合のみ） */}
              {imageUrls.length > 1 && (
                <>
                  {/* 左矢印 */}
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
                    onClick={handlePrevImage}
                    aria-label="前の画像"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  {/* 右矢印 */}
                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none"
                    onClick={handleNextImage}
                    aria-label="次の画像"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 sm:w-6 sm:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* 画像カウンター */}
              {imageUrls.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                  {currentImageIndex + 1}/{imageUrls.length}
                </div>
              )}
            </div>
            <p className="text-gray-600 text-right text-xs sm:text-sm leading-relaxed mt-2">
              制作時期: {createdAt}
            </p>
          </div>
        </div>

        {/* <label className="order-4 text-gray-800 font-semibold text-xs sm:text-sm mt-4">
          Tools
        </label>
        <div className="order-5">
          <div className="sm:w-1s/2 text-xs sm:text-sm leading-relaxed mt-2 inline-flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span key={tool} className="px-3 py-1 rounded-full bg-gray-300">
                {tool}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
