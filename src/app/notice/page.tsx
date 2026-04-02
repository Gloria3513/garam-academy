import PageHero from "@/components/PageHero";

export const metadata = {
  title: "공지사항 | 가람평생교육원",
  description: "가람평생교육원의 최신 소식과 공지사항을 확인하세요.",
};

const NOTICES = [
  {
    id: 1,
    title: "2026년 하반기 복지행정관리사 과정 수강생 모집",
    date: "2026.04.01",
    badge: "모집",
    content:
      "2026년 하반기 복지행정관리사 과정(혼합과정 40시간) 수강생을 모집합니다. 6월, 9월, 10월, 11월 회차별로 운영되며, 국비 지원됩니다 (자부담 일부). 관심 있는 분은 수강신청 페이지에서 신청해 주세요.",
  },
  {
    id: 2,
    title: "2027년 훈련과정 실시가능직종 승인 신청 안내",
    date: "2026.03.26",
    badge: "안내",
    content:
      "2027년도 신규 훈련과정(AI디지털콘텐츠크리에이터 등) 실시가능직종 승인 신청을 진행합니다. 혼합과정 40시간 이상으로 편성되며, 승인 후 2027년부터 운영 예정입니다.",
  },
  {
    id: 3,
    title: "AI디지털콘텐츠크리에이터 과정 강사 모집",
    date: "2026.03.20",
    badge: "채용",
    content:
      "2027년 개설 예정인 AI디지털콘텐츠크리에이터 과정의 강사를 모집합니다. AI 도구 활용, 디지털 콘텐츠 제작 분야 전문가를 찾고 있습니다. 관심 있는 분은 garam@sdh.or.kr로 이력서를 보내주세요.",
  },
  {
    id: 4,
    title: "2026년 1차시 복지행정관리사 과정 일정 안내",
    date: "2026.03.16",
    badge: "안내",
    content:
      "2026년 1차시 복지행정관리사 과정이 5월부터 시작됩니다. 온라인 20시간 + 대면 20시간 혼합과정으로 운영되며, 대면 수업은 월 단위로 진행됩니다. 상세 일정은 추후 공지됩니다.",
  },
  {
    id: 5,
    title: "가람평생교육원 LMS 시스템 오픈 안내",
    date: "2026.03.10",
    badge: "안내",
    content:
      "가람평생교육원 온라인 학습관리시스템(LMS)이 오픈되었습니다. 혼합과정의 온라인 강의를 수강하실 수 있으며, 5월 15일까지 전 과정 콘텐츠가 탑재될 예정입니다.",
  },
  {
    id: 6,
    title: "가람평생교육원 홈페이지 오픈",
    date: "2026.03.01",
    badge: "안내",
    content:
      "가람평생교육원 홈페이지가 오픈되었습니다. 훈련과정 안내, 수강신청, 공지사항 등을 확인하실 수 있습니다. 많은 관심 부탁드립니다.",
  },
];

const BADGE_STYLE: Record<string, string> = {
  모집: "bg-green-100 text-green-700",
  안내: "bg-blue-100 text-blue-700",
  채용: "bg-purple-100 text-purple-700",
};

export default function NoticePage() {
  return (
    <>
      <PageHero
        title="공지사항"
        description="교육원의 최신 소식과 모집 안내를 확인하세요"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "공지사항" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {NOTICES.map((notice) => (
              <details
                key={notice.id}
                id={String(notice.id)}
                className="group bg-white rounded-xl border border-[var(--color-border)] overflow-hidden scroll-mt-24"
              >
                <summary className="flex items-center gap-3 p-4 sm:p-5 cursor-pointer hover:bg-[var(--color-warm-bg)] transition-colors list-none">
                  <span
                    className={`shrink-0 px-2.5 py-0.5 rounded text-xs font-medium ${BADGE_STYLE[notice.badge] || "bg-gray-100 text-gray-600"}`}
                  >
                    {notice.badge}
                  </span>
                  <span className="flex-1 font-medium text-sm text-[var(--color-text)] group-open:text-[var(--color-primary)]">
                    {notice.title}
                  </span>
                  <span className="shrink-0 text-xs text-[var(--color-text-light)]">
                    {notice.date}
                  </span>
                  <svg
                    className="w-4 h-4 text-[var(--color-text-light)] group-open:rotate-180 transition-transform shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-[var(--color-border)]">
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed whitespace-pre-line">
                    {notice.content}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
