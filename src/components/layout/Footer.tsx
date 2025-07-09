
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-orange-50  text-gray-800 text-sm py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 브랜드/로고 */}
        <div>
          <h2 className="text-orange-600 text-lg font-bold mb-2">ORANGYM</h2>
          <p>운동의 시작, 오렌짐과 함께 하세요.</p>


        </div>

        {/* 링크 */}
        <div className="space-y-2">
          <h3 className="text-orange-600 text-lg font-bold mb-2">바로가기</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="hover:text-orange-400 transition">오렌짐 소개</Link></li>
            <li><Link href="/trainers" className="hover:text-orange-400 transition">트레이너</Link></li>


            {/* <li><Link href="/consult" className="hover:text-orange-400 transition">상담 신청</Link></li> */}
          </ul>
        </div>

        {/* 연락처 */}
        <div className="space-y-2">

          <div className="space-y-2">
            <h3 className="text-orange-600 text-lg font-bold mb-2">지점 안내</h3><p> 031-747-3777 </p>
            <p>산성역점: 경기도 성남시 수정구 수정로 326, 2층</p>
            <p>장안점: 서울 동대문구 장한로 129 지하1층</p>
            <p>수원인계점: 경기 수원시 팔달구 효원로265번길 20</p>
          </div>
          <p>© 2022–2025 ORANGYM · LaonCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}