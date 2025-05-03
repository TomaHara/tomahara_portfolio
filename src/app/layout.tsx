import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '原 透真 - Toma Hara',
  description:
    '原透真のポートフォリオサイト。大阪公立大学大学院 知能メディア処理研究室所属。HCI分野でOura Ringを用いた睡眠研究を行い、Augmented Humans Conference 2025でBest Poster Award受賞。燈株式会社にてソフトウェアエンジニアとして長期インターンシップに従事。Webエンジニアとしてのスキルを活かし、フルスタックな開発に取り組む。',
  openGraph: {
    title: '原 透真 - Toma Hara',
    description:
      '原透真 |大阪公立大学大学院 知能メディア処理研究室所属 | Webエンジニア | AHs2025最優秀ポスター賞受賞 | Oura Ringを用いた睡眠研究 | 燈株式会社インターンシップ',
    url: 'https://toma-hara.com',
    siteName: 'Toma Hara Portfolio',
    locale: 'ja_JP',
    type: 'website',
    emails: ['tomaa.hara@gmail.com'],
    images: [
      {
        url: '/pictures/profile.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  keywords: [
    '原透真',
    '原 透真',
    'はらとうま',
    'Toma Hara',
    'Hara Toma',
    '大阪公立大学大学院',
    '大阪公立大学',
    '知能メディア処理研究室',
    '知能メディア処理研究グループ',
    'ヒューマンコンピュータインタラクション',
    'HCI',
    'Oura Ring',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
