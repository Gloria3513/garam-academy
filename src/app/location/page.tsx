import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "오시는 길 | 가람평생교육원",
  description: "가람평생교육원 위치 및 연락처 안내",
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        title="오시는 길"
        description="가람평생교육원 위치와 연락처를 안내합니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "오시는 길" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 지도 영역 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden">
                {/* 카카오맵/네이버맵 iframe 자리 */}
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
                  <div className="text-center px-4">
                    <svg
                      className="w-16 h-16 mx-auto text-[var(--color-text-light)]/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="mt-3 text-sm text-[var(--color-text-light)]">
                      경기도 시흥시 신천동
                    </p>
                    <p className="mt-1 text-xs text-[var(--color-text-light)]/60">
                      지도 서비스 연동 예정
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 정보 사이드바 */}
            <div className="space-y-6">
              {/* 주소 */}
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="font-bold text-[var(--color-text)] mb-4">교육원 정보</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[var(--color-text-light)]">주소</div>
                      <div className="text-sm font-medium text-[var(--color-text)]">
                        경기도 시흥시 신천동
                      </div>
                      <div className="text-xs text-[var(--color-text-light)] mt-0.5">
                        (가람평생교육원)
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[var(--color-text-light)]">이메일</div>
                      <a
                        href="mailto:garam@sdh.or.kr"
                        className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                      >
                        garam@sdh.or.kr
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <div>
                      <div className="text-xs text-[var(--color-text-light)]">운영기관</div>
                      <div className="text-sm font-medium text-[var(--color-text)]">
                        사단법인 더불어함께
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* 관련 링크 */}
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="font-bold text-[var(--color-text)] mb-4">관련 사이트</h3>
                <ul className="space-y-2">
                  {[
                    { label: "HRD-Net (직업훈련포털)", url: "https://www.hrd.go.kr" },
                    { label: "한국직업능력연구원", url: "https://www.step.or.kr" },
                    { label: "한국사회복지품질원", url: "https://www.ksqa.or.kr" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        <svg
                          className="w-3.5 h-3.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/apply"
                className="block text-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                수강신청 바로가기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
