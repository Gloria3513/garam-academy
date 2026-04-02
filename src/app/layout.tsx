import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "가람평생교육원 | 사단법인 더불어함께",
  description:
    "가람평생교육원은 사단법인 더불어함께가 운영하는 직업능력개발훈련 전문 평생교육원입니다. 복지행정관리사, AI디지털콘텐츠크리에이터, 초등돌봄지도사 등 국비지원 교육과정을 운영합니다.",
  keywords:
    "가람평생교육원, 직업능력개발훈련, 국비지원교육, 복지행정관리사, AI디지털콘텐츠, 초등돌봄지도사, 시흥, 배곧",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
