

export const metadata = {
  title: '오렌짐 시설 안내 | 산성역 프리미엄 피트니스',
  description: '오렌짐 산성역점의 인포메이션, 웨이트존, 유산소존, 샤워실 등 프리미엄 피트니스 시설을 확인하세요.',
  openGraph: {
    title: '오렌짐 시설 안내',
    description: '오렌짐 산성역 프리미엄 피트니스 시설을 소개합니다.',
    url: 'https://orangym.co.kr/facility',
    siteName: '오렌짐',
    type: 'website'
  }
};

const prefix = '';

export default function FacilityPage() {
    return (
        <main className="bg-white text-gray-900 px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-orangym">시설 안내</h1>
                <p className="text-lg mb-12">
                    오렌짐 산성역점은 프리미엄 피트니스 공간으로 설계되었습니다. 다양한 운동 목적을 고려한
                    최신 장비와 청결한 공간을 직접 확인해보세요.
                </p>

                <div className="space-y-12">
                    {/* 인포메이션 / 프론트 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-orangym mb-4">인포메이션</h2>
                        <div className="carousel grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <img src={`${prefix}/info.jpg`} alt="프론트1" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                            <img src={`${prefix}/info2.jpg`} alt="프론트2" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                            <img src={`${prefix}/info3.jpg`} alt="프론트3" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                        </div>
                        <p className="text-gray-600 mt-2">
                            쾌적하고 친절한 인포메이션 공간에서 모든 안내를 도와드립니다.
                        </p>
                    </section>
                    {/* 웨이트 존 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-orangym mb-4">웨이트 존</h2>
                        <div className="carousel grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <img src={`${prefix}/w1.jpg`} alt="웨이트기구1" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                            <img src={`${prefix}/w2.jpg`} alt="웨이트기구2" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                        </div>
                        <p className="text-gray-600 mt-2">
                            다양한 프리웨이트, 머신 웨이트 기구가 구비되어 있어 효율적인 근력 운동이 가능합니다.
                        </p>
                    </section>

                    {/* 유산소 존 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-orangym mb-4">유산소 존</h2>
                        <div className="carousel grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <img src={`${prefix}/u1.jpg`} alt="유산소1" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                            <img src={`${prefix}/u2.jpg`} alt="유산소2" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                        </div>
                        <p className="text-gray-600 mt-2">
                            러닝머신, 싸이클, 계단오르기 등 고성능 유산소 장비가 마련되어 있습니다.
                        </p>
                    </section>

                    {/* 샤워실 / 락커룸 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-orangym mb-4">샤워실 / 락커룸</h2>
                        <div className="carousel grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <img src={`${prefix}/t1.jpg`} alt="샤워실1" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                            <img src={`${prefix}/t2.jpg`} alt="샤워실2" loading="lazy" className="rounded shadow w-full h-64 object-cover" />
                        </div>
                        <p className="text-gray-600 mt-2">
                            청결하고 넓은 샤워실과 락커룸이 제공되어 운동 후 상쾌한 마무리를 도와드립니다.
                        </p>
                    </section>



                </div>
            </div>
        </main>
    );
}