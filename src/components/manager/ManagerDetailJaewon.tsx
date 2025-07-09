'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ManagerDetailJaewon : React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const name = '재원 트레이너';
    const imageUrl = '/manager/moonjaewon.png';  // public 폴더에 넣어둔 이미지 경로
    const description = `트레이너이자 관리자 경력 11년차로 다양한 회원과 소통하며 건강한 삶을 위한 운동을 지원하고 있습니다. 용인대학교 사회체육학과와 경영학과를 졸업하고, 삼성 SDS와 DSR 임직원 강사로 활동하며 기업 맞춤형 건강관리 프로그램을 진행한 경험이 있습니다.

짐퍼스트 휘트니스 동작점과 굿데이짐 하남미사점을 운영하며 약 1000명 이상의 회원들과 함께 건강 관리를 진행해 왔습니다. 또한 생활체육지도자(보디빌딩) 자격을 취득하여 체계적인 운동법을 제공합니다.

운동을 통한 몸의 변화뿐 아니라 삶의 질을 높이고, 신체적·정신적으로 건강한 삶을 지향합니다. 회원님의 목표에 맞춘 맞춤형 트레이닝과 지속 가능한 습관 형성을 통해 회원분들의 도전과 성장을 돕고 있습니다.

회원님들과 함께 행복한 운동 생활을 만들어가겠습니다.`;


    return (
        <div id="jaewon" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden">

            {/* Left: Image */}
            <div className="relative md:w-1/2 w-full h-auto max-w-md">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={600}
                    height={800}
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-orangym mb-4">{name}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

export default ManagerDetailJaewon;