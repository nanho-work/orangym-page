'use client';

import React from 'react';
import Lottie from 'lottie-react';
import { SiNaver } from 'react-icons/si';
import instagramAnim from '@/animations/instagram.json';
import youtubeAnim from '@/animations/youtube.json'
import topAnim from '@/animations/top.json'
const FloatingButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 md:bottom-10 md:right-6 flex flex-col gap-3 md:gap-4 z-50">
      <a
        href="https://blog.naver.com/PostList.naver?blogId=orangym&categoryNo=13&skinType=&skinId=&from=menu&userSelectMenu=true"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 grid place-items-center" // 전체 버튼 크기 유지
      >
        <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <SiNaver size={16} className="ml-[1px]" />
        </div>
      </a>

      <a
        href="https://www.instagram.com/orangym_11/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex justify-center items-center"
      >
        <Lottie
          animationData={instagramAnim}
          loop
          autoplay
          style={{ width: '120%', height: '120%' }}
        />
      </a>
      <a
        href="https://www.youtube.com/@%ED%97%AC%EC%8A%A4%ED%95%B4%EC%9C%A0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex justify-center items-center"
      >
        <Lottie
          animationData={youtubeAnim}
          loop
          autoplay
          style={{ width: '120%', height: '120%' }}
        />
      </a>

      <button
        onClick={handleScrollTop}
        className="w-14 h-12 flex justify-center items-center  hover:scale-110 transition-transform"
      >
        <Lottie
          animationData={topAnim}
          loop
          autoplay
          style={{ width: '120%', height: '120%' }} // 크기 조정 필요 시 여기 조절
        />
      </button>
    </div>
  );
};

export default FloatingButton;