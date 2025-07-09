

export const metadata = {
  title: '오렌짐 소개 | 피트니스 라이프스타일 클럽',
  description: '오렌짐은 단기간 목표가 아닌 건강한 습관을 위한 프리미엄 피트니스 라이프스타일을 제공합니다.',
  openGraph: {
    title: '오렌짐 소개',
    description: '오렌짐의 철학과 프리미엄 피트니스 공간을 소개합니다.',
    url: 'https://orangym.co.kr/about',
    siteName: '오렌짐',
    type: 'website'
  }
};

import About from '@/components/home/About';

export default function AboutPage() {
  return <About />
}