'use client'

import Image from 'next/image'

export default function About() {
  return (
    <main className="bg-gray-50 text-gray-800 min-h-screen py-16 px-4">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-orangym mb-4">오렌짐</h1>
          <p className="text-lg text-gray-700">
            건강한 성장을 만드는 <span className="font-medium text-orangym-dark">Fitness Lifestyle Club</span>
            <br />
            단기간의 운동 목표가 아닌,
            <br />
            <span className="text-orange-600 font-semibold">건강한 습관을 위한 작은 실천</span>을 지향합니다.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/about1.JPG"
            alt="오렌짐 소개 이미지"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
            priority
          />
        </div>
      </section>
      {/* Service Sections */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Image
            src="/about2.png"
            alt="ORANGYM 아이콘"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          <h2 className="text-2xl font-semibold text-orangym mt-4 mb-2">ORANGYM</h2>
          <p className="text-gray-700">
            오프라인 공간에서 헬스와 PT를 경험할 수 있는 프리미엄 피트니스 공간입니다.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <Image
            src="/about3.png"
            alt="헬스해유 아이콘"
            width={600}
            height={400}
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
          <h2 className="text-2xl font-semibold text-orangym mt-4 mb-2">헬스해유</h2>
          <p className="text-gray-700">
            Youtube 커뮤니티 플랫폼을 통해 다양한 운동 콘텐츠와 커뮤니케이션을 제공합니다.
          </p>
        </div>
      </section>
    </main>
  )
}