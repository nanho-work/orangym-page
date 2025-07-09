'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const prefix = '/orangym-page';

const ManagerDetailJongchun: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const name = '종춘 트레이너';
    const imageUrl = '/manager/jongchun.png';
    const description = `회원의 컨디션과 운동동작에 대해서 집중하는 트레이너입니다. 제가 지도한 회원이 변화하는 모습을 보고 체력을 키워가는 모습을 만족하면서 일을 하고 있습니다. 
회원이 성장하는 지도자가 되는 것이 트레이너의 기본 자세라고 생각하면서 그것을 통해서 회원의 어려움을 해결해주는 트레이너입니다.

트레이너는 운동에 대한 방법적인 것만 생각해서는 안되고 회원이 원하는 최종 목표에 도달하는 것까지 이끌어주는 역할이에요. 회원은 운동전문가 혹은 선수가 아니라는 것을 꼭 기억해야 한다고 생각해요.
운동을 시작하는 목적과 상세히 차지하는 비중이 모두 똑같지 않아요. 그리고 현재 운동을 할 수 있는 역치의 범위가 크지 않을 수 있어요. 그런데 회원에게 NO PAIN, NO GAIN은 외치면서 모두가 그것을 이겨내려한다는 생각은 실수라고 생각해요. 
그래서 운동이라는 과제가 과중하게 느껴졌다면 가볍게 느껴지게 만들어 주는 방향이 저의 트레이닝 가치관입니다.

좋은 호흡과 소통을 통해서 우리 삶에 필요한 운동을 지속하도록 옆에서 도와드리도록 할게요. 그리고 회원의 눈높이에서 바라보고 지도하는 트레이너가 되어드릴게요.`;

    return (
        <div id="jongchun" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden">
            <div className="relative md:w-1/2 w-full h-auto max-w-md">
                <Image
                    src={`${prefix}${imageUrl}`}
                    alt={name}
                    width={600}
                    height={800}
                    className="rounded-lg object-contain w-full h-auto"
                />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-orangym mb-4">{name}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

export default ManagerDetailJongchun;