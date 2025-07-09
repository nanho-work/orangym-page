'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ManagerDetailJuneho: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const name = '준호 트레이너';
    const imageUrl = '/manager/choijunho.png';  // public 폴더에 넣은 이미지 경로 (파일명 확인)
    const description = `오렌짐 1호점부터 오픈 멤버로 시작해 현재 장안점 2호점 오렌짐에서 매니저를 맡고 있는 최준호 코치입니다.

트레이닝 경력 8년으로 10대부터 80대 남녀노소 다양한 연령대를 수업 진행한 경험이 있으며 회원님들의 눈높이에 맞춰 트레이닝 설명과 운동을 어렵지 않게 접할 수 있게 도와드리고 있습니다.

보통 헬스장에서 회원님들이 많이 접하는 웨이트 트레이닝을 주로 코칭을 하지만 웨이트 트레이닝을 잘할 수 있는 몸을 먼저 만들고 그 이후에 본격적인 웨이트 트레이닝을 코칭하고 있습니다.

이를 위해 기능적인 몸의 움직임을 만들 수 있는 평셔널 트레이닝을 통해 (케틀벨, 불가리안백, 플라이오매트릭) 회원님들의 몸의 기능을 향상시키고 이후 부상 없이 웨이트 트레이닝을 잘할 수 있는 단계를 만들어 드리고 있습니다.

무작정 빡세고 힘든 운동만이 운동이 아니라 본인한테 맞는 운동을 컨설팅해서 운동을 쉽게 접근할 수 있게 지도해 드리고 있습니다.`;

    return (
        <div id="juneho" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden">
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

export default ManagerDetailJuneho;