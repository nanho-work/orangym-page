import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingButton from '@/components/common/FloatingButton'

const prefix = '';

export const metadata = {
  title: '오렌짐 | ORANGYM - PT & 피트니스',
  description: '오렌짐 산성역점: 맞춤형 PT, 청결한 시설, 전문 트레이너와 함께 건강한 루틴을 만드세요.',
  keywords: ['오렌짐', '헬스장', 'PT', '산성역 피트니스', '피트니스', '오렌짐 산성역점', '개인 PT'],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://orangym.co.kr',
  },
  authors: [{ name: 'ORANGYM', url: 'https://orangym.co.kr' }],
  creator: 'ORANGYM',
  publisher: 'ORANGYM',
  openGraph: {
    title: '오렌짐 | ORANGYM',
    description: '산성역 최고의 피트니스 클럽, 청결한 시설, 맞춤형 PT 제공',
    url: 'https://orangym.co.kr',
    siteName: '오렌짐',
    type: 'website',
    images: [
      {
        url: 'https://orangym.co.kr/1.png', // 절대경로
        width: 1200,
        height: 630,
        alt: '오렌짐 산성역점 대표 이미지',
      },
    ],
    locale: 'ko_KR',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#F97316', // 예: tailwind orange-500
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href={`${prefix}/favicon.ico`} />
      </head>
      <body>
        <Header />
        <FloatingButton />
        {children}
        <Footer />
      </body>
    </html>
  )
}
