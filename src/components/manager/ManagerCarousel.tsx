'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const prefix = ''

const trainerImages = [
    '/manager/jongchun.png',
    '/manager/ansungjin.png',
    '/manager/moonjaewon.png',
    '/manager/anseonghyeok.png',
    '/manager/choijunho.png',
];
const ManagerCarousel = () => {
    const settings = {
        infinite: true,         // 무한 루프 (끝없이 반복되도록)
        speed: 3000,             // 슬라이드 전환 속도 (밀리초 단위: 400ms)
        slidesToShow: 3,        // 한 번에 보여줄 슬라이드 개수 (4개씩 보여줌)
        slidesToScroll: 1,      // 한 번에 넘어갈 슬라이드 개수 (1개씩 이동)
        autoplay: true,         // 자동 재생 활성화
        autoplaySpeed: 500,    // 자동 재생 간격 (2.5초마다 자동 이동)
        pauseOnHover: true,     // 마우스 호버 시 자동 재생 일시 중지
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-orangym text-center my-12">
                ORANGYM 전문 트레이너 라인업
            </h2>
            <Slider {...settings}>
                {trainerImages.map((src, index) => (
                    <div key={index} className="px-2">
                        <div className="rounded overflow-hidden shadow-lg">
                            <Image
                                src={`${prefix}${src}`}
                                alt={`트레이너 ${index + 1}`}
                                width={300}
                                height={450}
                                className="object-cover w-full h-[500px]"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ManagerCarousel;