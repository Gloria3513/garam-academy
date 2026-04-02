import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 교육원 정보 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-sm">
                가
              </div>
              <span className="text-lg font-bold">가람평생교육원</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              사단법인 더불어함께가 운영하는 직업능력개발훈련 전문
              평생교육원입니다. 국비지원 교육을 통해 여러분의 역량 개발을
              지원합니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="font-bold mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  훈련과정 안내
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-white transition-colors">
                  수강신청
                </Link>
              </li>
              <li>
                <Link href="/notice" className="hover:text-white transition-colors">
                  공지사항
                </Link>
              </li>
              <li>
                <a
                  href="https://www.hrd.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  HRD-Net (직업훈련포털)
                </a>
              </li>
              <li>
                <a
                  href="https://www.step.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  한국직업능력연구원
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                경기도 시흥시 신천동
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:garam@sdh.or.kr" className="hover:text-white transition-colors">
                  garam@sdh.or.kr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} 가람평생교육원 (사단법인 더불어함께). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
