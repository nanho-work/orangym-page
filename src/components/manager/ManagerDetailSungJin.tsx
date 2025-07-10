'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const prefix = '';

const ManagerDetailSungJin: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const name = '성진 트레이너';
    const imageUrl = '/manager/ansungjin.png';  // public 폴더에 넣어둔 이미지 경로
    const description = `저는 건강하고, 아프지 않을 수 있는 신체를 만드는 것을 기본으로 생각하고 수업하는 트레이너에요.
삶의 질이라는 단어를 얘기할 때 첫번째로 "아프지 않은 신체, 불편하지 않은 몸" 이라고 생각해요.
트레이너를 직업으로 선택하며 많은 회원분들을 만난 결과 많은 분들이 아프지는 않더라도 불편한 신체(목, 허리, 무릎)등을 갖고 있다는 걸 알게 되었어요. 대다수의 분들이 병원을 오랫동안 다녔고, 치료를 받았지만 통증이 있는 경우가 많아요. 대부분 이런 경우에 몸의 정렬이 무너지며 근육들의 제기능을 못하는 경우가 많아요. 그래서!
저는 목표에 따라 다이어트, 근육만들기 등 몸의 외적인 부분은 완성하는 트레이닝도 물론이지만, 건강한 신체를 만들어드리는 것을 기본으로 생각하는 트레이너에요.

PT라는 것은 결국 "혼자 운동 할 수 있게 만들어드리는 것" 이라는 생각을 해요.
누구나 각자의 목적과 목표를 갖고 PT를 받게 됩니다. 트레이너와 수업으로 인해 목표에 가깝게 다가가는건 당연한 결과에요. 주머니 사정이 좋아 계속 코칭을 받으며 운동을 지속하면 좋겠지만 지속적으로 지출이 생기는 일이라는 것이 쉽지 않은 일이에요. 결국, 운동은 혼자 할 수 있게 되어야 해요.
PT 수업 만으로 끝나는 일회성 이벤트가 아니라 나 혼자서 스스로 운동을 할 수 있는 기술을 가르쳐 드리는 시간이라는 생각을 갖고 수업을 진행해요.

처음 시작은 누구나 어려워요. 그러나 고민만 한다면 변화는 일어나지 않습니다! 지금 이 글을 읽고 계시다면 반은 성공이라고 생각해요. 나머지 반의 성공은 오렌짐에서 책임져드릴게요! 헬스장에 가서 PT 수업을 받는다는 것은 목표로 했던 부분을 빠르게 이룰 수 있는 수단이라고 생각하고, 고민만 하지 마시고, 방문해주시면 목표를 이루는 것과 더불어 혼자서 운동할 수 있는 기술까지 배우는 기회라고 생각하고 오렌짐에 방문해 주시면 감사하겠습니다.`;

    return (
        <div id="seongjin" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center rounded-lg overflow-hidden">
            {/* Left: Image */}
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

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-2xl font-bold text-orangym mb-4">{name}</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
            </div>
        </div>
    );
};

export default ManagerDetailSungJin;