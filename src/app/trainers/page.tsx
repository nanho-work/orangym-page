


export const metadata = {
  title: '오렌짐 트레이너 | 전문 퍼스널트레이너 소개',
  description: 'ORANGYM 소속 전문 트레이너진을 소개합니다. 체계적인 1:1 PT와 건강한 코칭을 경험해보세요.',
  openGraph: {
    title: '오렌짐 트레이너',
    description: '전문 트레이너진과 1:1 맞춤 퍼스널트레이닝 제공',
    url: 'https://orangym.co.kr/trainers',
    siteName: '오렌짐',
    type: 'website'
  }
};

import ManagerCarousel from '@/components/manager/ManagerCarousel';
import ManagerDetailSeongJin from '@/components/manager/ManagerDetailSungJin';
import ManagerSidebar from '@/components/manager/ManagerSidebar';
import ManagerDetailJaewon from '@/components/manager/ManagerDetailJaewon';
import ManagerDetailSungHyeok from '@/components/manager/ManagerDetailSeongHyeok';
import ManagerDetailJongChun from '@/components/manager/ManagerDetailJongChun';
import ManagerDetailJuneho from '@/components/manager/ManagerDetailJuneHo';
export default function ManagerPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <ManagerCarousel />
      <div className="bg-gradient-to-b from-white to-orange-50 py-8 max-w-6xl mx-auto text-center my-8">
        <h2 className="text-3xl font-bold text-orangym">전문 트레이너 소개</h2>
        <p className="text-gray-500 mt-2">ORANGYM에서 여러분을 책임질 전문 트레이너를 소개합니다</p>
      </div>

      {/* 모바일 전용 사이드바 (위로 분리) */}
      <div className="block md:hidden mb-4">
        <ManagerSidebar />
      </div>

      {/* PC 전용 grid 레이아웃 */}
      <div className="hidden md:grid md:grid-cols-[200px_1fr]">
        <div className="sticky top-[145px] self-start">
          <ManagerSidebar />
        </div>

        <div className="flex-1 space-y-20">
          <div id="jongchun" className="scroll-mt-[150px]"><ManagerDetailJongChun /></div>
          <div id="seongjin" className="scroll-mt-[150px]"><ManagerDetailSeongJin /></div>
          <div id="jaewon" className="scroll-mt-[150px]"><ManagerDetailJaewon /></div>
          <div id="seonghyuk" className="scroll-mt-[150px]"><ManagerDetailSungHyeok /></div>
          <div id="juneho" className="scroll-mt-[150px]"><ManagerDetailJuneho /></div>
        </div>
      </div>

      {/* 모바일 전용 상세 리스트 */}
      <div className="block md:hidden space-y-20">
        <div className="flex-1 space-y-20">
          <div id="jongchun" className="scroll-mt-[150px]"><ManagerDetailJongChun /></div>
          <div id="seongjin" className="scroll-mt-[150px]"><ManagerDetailSeongJin /></div>
          <div id="jaewon" className="scroll-mt-[150px]"><ManagerDetailJaewon /></div>
          <div id="seonghyuk" className="scroll-mt-[150px]"><ManagerDetailSungHyeok /></div>
          <div id="juneho" className="scroll-mt-[150px]"><ManagerDetailJuneho /></div>
        </div>
      </div>

    </div>
  );
}