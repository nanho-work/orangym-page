'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const prefix = '';

const ManagerDetailSeongHyeok : React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const name = '성혁 트레이너';
    const imageUrl = '/manager/anseonghyeok.png';
    const description = `운동을 통해 삶이 바뀌었던 저의 변화를 전수해 드리고 싶은 트레이너입니다.
학창 시절 무기력하고 우울한 감정을 겪는 순간들을 해소하는 데 있어 웨이트 트레이닝이 큰 도움이 되었습니다.
웨이트 트레이닝을 통해 외적으로만 변화한 것만 아니라 내적인 자신감, 또 하나의 일을 해냈다는 성취감을 이뤄 내며 성장해왔습니다.
현재까지 웨이트 트레이닝을 사랑하며 단지 운동을 사랑하는 사람이 아니라 저의 긍정적인 변화의 기술들을 전수해 드리고자 하는 트레이너입니다.

웨이트 트레이닝은 꾸준함이 바탕이 되어야 하며, 꾸준함은 몸의 변화를 만들어 냅니다.
하지만 이 꾸준한 웨이트 트레이닝을 하기 위해서는 안전하게 그리고 운동을 "잘" 할 수 있는 방법이 필요합니다.
저와의 수업은 이 꾸준함을 이어 가고 운동을 안전하게 잘할 수 있도록 하는 "기술"을 전수해 드리는 것이라고 생각합니다.

운동을 하기 위해 시간을 쪼개어 나오시는 게 쉽지 않음을 공감하고 저 또한 겪어왔기에 이러한 고충들을 누구보다도 잘 알고 있습니다.
하지만 저를 찾아와주신다면 어떻게 운동해야 하는지, 또 다치지 않고 가장 안정적인 방법을 가꾸어 나갈 수 있도록 제가 옆에서 도와드리겠습니다.
무엇보다 단지 운동만 하고 끝나는 것이 아닌 각 운동을 통해 각각의 회원님들 목표에 방향성을 잡아 나아가도록 제가 옆에서 도와드리겠습니다.
회원님 목표에 대한 투자라고 생각하시고 수업에 나와주신다면 운동을 통해 삶의 고충을 덜어내며 성과를 만들어 갈 수 있겠고 확신합니다.`;

    return (
        <div id="seonghyuk" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden">
            <div className="relative md:w-1/2 w-full h-auto max-w-md">
                <Image
                    src={`${prefix}${imageUrl}`}
                    alt={name}
                    width={600}
                    height={800}
                    objectFit="contain"
                    className="rounded-lg"
                />
            </div>

            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-orangym mb-4">{name}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

export default ManagerDetailSeongHyeok;