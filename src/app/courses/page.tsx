import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

export const metadata = {
  title: "훈련과정 안내 | 가람평생교육원",
  description: "가람평생교육원의 국비지원 직업능력개발훈련 과정을 안내합니다.",
};

const COURSES = [
  {
    id: "welfare-admin",
    title: "복지행정관리사",
    type: "혼합과정",
    totalHours: 40,
    onlineHours: 20,
    offlineHours: 20,
    status: "모집중" as const,
    period: "2026년 5월 ~ (월 1회차 운영)",
    target: "사회복지 분야 취업 또는 역량 강화를 원하는 분",
    description:
      "사회복지 행정실무와 AI활용 능력을 겸비한 복지행정 전문가 양성 과정입니다. 행정서류 작성, 복지정책 이해, AI 도구 활용 등 실무 중심으로 교육합니다.",
    icon: "📋",
    curriculum: [
      { section: "온라인 (20시간)", items: ["사회복지 행정 이론", "복지정책 및 법규 이해", "행정서류 작성 실무", "사례관리 기초", "복지행정 정보시스템 활용"] },
      { section: "대면 - AI활용 (12시간)", items: ["AI 기반 문서 작성", "ChatGPT 활용 행정업무 자동화", "AI 데이터 분석 기초", "실무 프로젝트 실습"] },
      { section: "대면 - 실무서류 (8시간)", items: ["행정서류 실습", "공문서 작성 실무", "보고서 작성 실습", "실무 평가"] },
    ],
    tags: ["국비지원", "AI활용", "사회복지", "혼합과정"],
  },
  {
    id: "ai-content-creator",
    title: "AI디지털콘텐츠크리에이터",
    type: "혼합과정",
    totalHours: 40,
    onlineHours: 20,
    offlineHours: 20,
    status: "준비중" as const,
    period: "2027년 예정 (실시가능직종 승인 진행중)",
    target: "디지털 콘텐츠 제작 역량을 키우고 싶은 분",
    description:
      "AI 도구를 활용한 디지털 콘텐츠 기획·제작·편집 전문가 양성 과정입니다. 실무에서 바로 활용할 수 있는 콘텐츠 크리에이션 역량을 개발합니다.",
    icon: "🎨",
    curriculum: [
      { section: "온라인 (20시간)", items: ["디지털 콘텐츠 기획 이론", "콘텐츠 마케팅 전략", "저작권과 윤리", "플랫폼별 콘텐츠 이해"] },
      { section: "대면 (20시간)", items: ["AI 이미지 생성 실습", "AI 영상 편집 실습", "SNS 콘텐츠 제작", "포트폴리오 프로젝트"] },
    ],
    tags: ["국비지원", "AI활용", "디지털콘텐츠", "혼합과정"],
  },
  {
    id: "child-care",
    title: "초등돌봄지도사",
    type: "집체훈련",
    totalHours: 40,
    onlineHours: 0,
    offlineHours: 40,
    status: "모집중" as const,
    period: "2026년 5월 ~ (월 1회차 운영)",
    target: "초등돌봄 분야 취업을 희망하는 분",
    description:
      "초등학교 돌봄교실 운영에 필요한 전문 역량을 갖춘 돌봄지도사 양성 과정입니다. 아동 발달 이해, 안전관리, 프로그램 기획 및 운영 실무를 교육합니다.",
    icon: "👧",
    curriculum: [
      { section: "대면 (40시간)", items: ["아동 발달 심리", "돌봄교실 운영 실무", "아동 안전 및 응급처치", "놀이·학습 프로그램 기획", "학부모 상담 기법", "현장 실습"] },
    ],
    tags: ["국비지원", "돌봄교육", "아동", "집체훈련"],
  },
  {
    id: "design-platform",
    title: "디자인플랫폼 활용",
    type: "집체훈련",
    totalHours: 20,
    onlineHours: 0,
    offlineHours: 20,
    status: "운영중" as const,
    period: "수시 운영",
    target: "디자인 플랫폼을 활용해 업무 효율을 높이고 싶은 분",
    description:
      "Canva, 미리캔버스 등 디자인 플랫폼을 활용하여 실무에 필요한 홍보물, 카드뉴스, 프레젠테이션을 직접 제작하는 실습 중심 과정입니다.",
    icon: "🖌️",
    curriculum: [
      { section: "대면 (20시간)", items: ["디자인 기초 이론", "Canva 기본 활용", "미리캔버스 활용", "카드뉴스 제작", "프레젠테이션 디자인", "홍보물 제작 실습"] },
    ],
    tags: ["디자인", "실무활용", "집체훈련"],
  },
];

const STATUS_STYLE = {
  모집중: "bg-green-100 text-green-700 border-green-200",
  준비중: "bg-amber-100 text-amber-700 border-amber-200",
  운영중: "bg-blue-100 text-blue-700 border-blue-200",
  마감: "bg-gray-100 text-gray-500 border-gray-200",
};

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="훈련과정 안내"
        description="국비지원 직업능력개발훈련 과정을 확인하고 신청하세요"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "훈련과정" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 안내 배너 */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-10 flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm text-blue-800">
              <p className="font-medium">국비지원 안내</p>
              <p className="mt-1 text-blue-700">
                본 교육원의 직업능력개발훈련 과정은 고용노동부 인정 과정으로 수강료가 100% 국비 지원됩니다.{" "}
                <a href="https://www.hrd.go.kr" target="_blank" rel="noopener noreferrer" className="underline font-medium">
                  HRD-Net
                </a>
                에서 자세한 내용을 확인하세요.
              </p>
            </div>
          </div>

          {/* 과정 목록 */}
          <div className="space-y-10">
            {COURSES.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden scroll-mt-24"
              >
                {/* 과정 헤더 */}
                <div className="p-6 sm:p-8 border-b border-[var(--color-border)]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="text-4xl">{course.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                            {course.title}
                          </h3>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${STATUS_STYLE[course.status]}`}
                          >
                            {course.status}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-[var(--color-text-light)] max-w-2xl leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                    {(course.status === "모집중" || course.status === "운영중") && (
                      <Link
                        href="/apply"
                        className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
                      >
                        수강신청
                      </Link>
                    )}
                  </div>

                  {/* 과정 정보 */}
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-[var(--color-warm-bg)] rounded-lg p-3">
                      <div className="text-xs text-[var(--color-text-light)]">과정유형</div>
                      <div className="font-medium text-sm">{course.type}</div>
                    </div>
                    <div className="bg-[var(--color-warm-bg)] rounded-lg p-3">
                      <div className="text-xs text-[var(--color-text-light)]">총 교육시간</div>
                      <div className="font-medium text-sm">{course.totalHours}시간</div>
                    </div>
                    <div className="bg-[var(--color-warm-bg)] rounded-lg p-3">
                      <div className="text-xs text-[var(--color-text-light)]">교육기간</div>
                      <div className="font-medium text-sm">{course.period}</div>
                    </div>
                    <div className="bg-[var(--color-warm-bg)] rounded-lg p-3">
                      <div className="text-xs text-[var(--color-text-light)]">교육대상</div>
                      <div className="font-medium text-sm truncate">{course.target}</div>
                    </div>
                  </div>

                  {/* 시간 배분 바 */}
                  {course.onlineHours > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-4 text-xs text-[var(--color-text-light)] mb-1">
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded bg-[var(--color-primary-light)]" />
                          온라인 {course.onlineHours}시간
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-3 h-3 rounded bg-[var(--color-accent)]" />
                          대면 {course.offlineHours}시간
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden flex">
                        <div
                          className="bg-[var(--color-primary-light)] h-full"
                          style={{ width: `${(course.onlineHours / course.totalHours) * 100}%` }}
                        />
                        <div
                          className="bg-[var(--color-accent)] h-full"
                          style={{ width: `${(course.offlineHours / course.totalHours) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 커리큘럼 */}
                <div className="p-6 sm:p-8 bg-[var(--color-warm-bg)]/50">
                  <h4 className="font-bold text-[var(--color-text)] mb-4">커리큘럼</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {course.curriculum.map((section) => (
                      <div key={section.section} className="bg-white rounded-xl border border-[var(--color-border)] p-4">
                        <h5 className="text-sm font-bold text-[var(--color-primary)] mb-3">
                          {section.section}
                        </h5>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-light)]">
                              <svg className="w-4 h-4 mt-0.5 text-[var(--color-accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
