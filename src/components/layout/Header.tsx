'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-orange-50 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/mark.png"
            alt="오렌짐 심볼"
            width={140}
            height={140}
            priority
          />
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <Link href="/about"
            className={`pt-2 px-2 transition 
            ${pathname === '/about' ? 'text-orangym font-bold' : 'text-gray-800 hover:text-orangym'}`}>
            소개
          </Link>

          <Link href="/trainers"
            className={`pt-2 px-2 transition 
            ${pathname === '/trainers' ? 'text-orangym font-bold' : 'text-gray-800 hover:text-orangym'}`}>
            트레이너
          </Link>

          <Link href="/facility"
            className={`pt-2 px-2 transition 
            ${pathname === '/facility' ? 'text-orangym font-bold' : 'text-gray-800 hover:text-orangym'}`}>
            시설
          </Link>

          <Link href="/location"
            className={`pt-2 px-2 transition 
            ${pathname === '/location' ? 'text-orangym font-bold' : 'text-gray-800 hover:text-orangym'}`}>
            지점안내
          </Link>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-gray-700 text-3xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t px-4 pb-4 mt-5 flex flex-col gap-4 p-2 text-sm font-semibold text-right">
          <Link href="/about" className="hover:text-orangym transition" onClick={() => setMenuOpen(false)}>소개</Link>
          <Link href="/trainers" className="hover:text-orangym transition" onClick={() => setMenuOpen(false)}>트레이너</Link>
          <Link href="/facility" className="hover:text-orangym transition" onClick={() => setMenuOpen(false)}>시설</Link>
          {/* <Link href="/review" className="hover:text-orangym transition">후기</Link> */}
          <Link href="/location" className="hover:text-orangym transition" onClick={() => setMenuOpen(false)}>오시는 길</Link>
          {/* <Link href="/consult" className="bg-orangym text-white px-4 py-2 rounded text-center hover:bg-orangym-dark transition">상담 신청</Link> */}
        </nav>
      )}
    </header>
  )
}