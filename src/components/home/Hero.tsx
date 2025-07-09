'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const prefix = '/orangym-page';


export default function Hero() {
    useEffect(() => {
        AOS.init({
            duration: 1000,  // 애니메이션 지속 시간 (ms)
            once: true       // 스크롤 내릴 때 1번만 실행
        });
    }, []);

    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center text-center px-6">
                <div className="absolute inset-0 h-full w-full">
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={{ delay: 4000 }}
                        className="h-full w-full"
                    >
                        <SwiperSlide className="relative w-full h-full">
                            <Image src={`${prefix}/t1.jpg`} alt="오렌짐1" fill className="object-cover" priority />
                        </SwiperSlide>
                        <SwiperSlide className="relative w-full h-full">
                            <Image src={`${prefix}/w2.jpg`} alt="오렌짐2" fill className="object-cover" priority />
                        </SwiperSlide>
                        <SwiperSlide className="relative w-full h-full">
                            <Image src={`${prefix}/home3.jpeg`} alt="오렌짐3" fill className="object-cover" priority />
                        </SwiperSlide>
                    </Swiper>
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
                </div>
                <div className="z-10 space-y-6" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-orangym-light to-orangym text-transparent bg-clip-text drop-shadow-xl">
                        당신을 위한 운동공간 <br className="hidden md:block" /> 오렌짐
                    </h1>

                    <p className="text-lg md:text-xl text-orange-300 drop-shadow font-medium">
                        성남 산성역점 • 헬스시설 • 1:1 트레이닝
                    </p>

                    <p className="text-base md:text-lg text-white">
                        오렌짐은 당신의 하루를 다채롭고 에너지 넘치게 만드는 오렌지빛 동반자입니다.
                    </p>
                    <div className="flex justify-center gap-4 mt-6">
                        <Link
                            href="https://map.naver.com/p/search/%EC%98%A4%EB%A0%8C%EC%A7%90/place/1753181256?placePath=/home?entry=pll&from=nx&fromNxList=true&fromPanelNum=2&timestamp=202507091447&locale=ko&svcName=map_pcv5&searchText=%EC%98%A4%EB%A0%8C%EC%A7%90&searchType=place&c=15.00,0,0,0,dh"
                            className="bg-white text-orangym font-semibold px-6 py-3 rounded hover:bg-orange-100 transition shadow"
                        >
                            상담 예약하기
                        </Link>
                        <Link
                            href="/facility"
                            className="bg-white text-orangym font-semibold px-6 py-3 rounded hover:bg-orange-100 transition shadow"
                        >
                            시설 둘러보기
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col gap-16">
                <h2 className="text-3xl md:text-4xl font-bold text-orangym text-center mb-8">주요 서비스</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* 일반 회원권 */}
                    <div className="bg-white rounded-lg shadow p-4 text-center w-full sm:w-[400px] h-auto mx-auto" data-aos="fade-right" data-aos-delay="0">
                        <div className="relative w-full h-[350px] sm:h-[400px] mb-4">
                            <Image
                                src={`${prefix}/w2.jpg`}
                                alt="일반 회원권"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-orangym mb-3">일반 회원권</h3>
                        <p className="text-gray-700 text-base mb-3">헬스 시설 기간 이용권</p>
                        <div className="flex flex-wrap justify-center gap-2 text-base">
                            <span className="bg-orangym text-white px-4 py-2 rounded">유산소존</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">머신존</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">웨이트존</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">사워&탈의실</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">스트레칭존</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">체형분석존</span>
                        </div>
                    </div>

                    {/* VIP PT */}
                    <div className="bg-white rounded-lg shadow p-4 text-center w-full sm:w-[400px] h-auto mx-auto" data-aos="fade-up" data-aos-delay="300">
                        <div className="relative w-full h-[350px] sm:h-[400px] mb-4">
                            <Image
                                src={`${prefix}/service.png`}
                                alt="VIP PT"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-orangym mb-3">VIP PT</h3>
                        <p className="text-gray-700 text-base mb-3">운동 목표 책임달성</p>
                        <div className="flex flex-wrap justify-center gap-2 text-base">
                            <span className="bg-orangym text-white px-4 py-2 rounded">개인맞춤</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">체형교정</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">운동독립</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">목표달성</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">디테일</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">50분 레슨</span>
                        </div>
                    </div>

                    {/* PT25 */}
                    <div className="bg-white rounded-lg shadow p-4 text-center w-full sm:w-[400px] h-auto mx-auto" data-aos="fade-left" data-aos-delay="600">
                        <div className="relative w-full h-[350px] sm:h-[400px] mb-4">
                            <Image
                                src={`${prefix}/h2.png`}
                                alt="PT25"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-orangym mb-3">PT25</h3>
                        <p className="text-gray-700 text-base mb-3">헬린이를 위한 솔루션</p>
                        <div className="flex flex-wrap justify-center gap-2 text-base">
                            <span className="bg-orangym text-white px-4 py-2 rounded">운동습관</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">25분 레슨</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">시간효율</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">5가지 맞춤형</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">1회 1만원대</span>
                            <span className="bg-orangym text-white px-4 py-2 rounded">가볍지만 강력</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
