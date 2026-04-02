import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const COURSES = [
  {
    id: "welfare-admin",
    title: "복지행정관리사",
    type: "혼합과정",
    hours: "40시간",
    format: "온라인 20h + 대면 20h",
    status: "모집중" as const,
    description:
      "사회복지 행정실무와 AI활용 능력을 겸비한 복지행정 전문가를 양성합니다. 행정실무 이론(온라인)과 AI활용 실습(대면)을 병행합니다.",
    tags: ["국비지원", "AI활용", "사회복지"],
    icon: "📋",
  },
  {
    id: "ai-content-creator",
    title: "AI디지털콘텐츠크리에이터",
    type: "혼합과정",
    hours: "40시간",
    format: "온라인 20h + 대면 20h",
    status: "준비중" as const,
    description:
      "AI 도구를 활용한 디지털 콘텐츠 제작 능력을 키웁니다. 실무에서 바로 활용할 수 있는 콘텐츠 기획, 제작, 편집 역량을 개발합니다.",
    tags: ["국비지원", "AI활용", "디지털콘텐츠"],
    icon: "🎨",
  },
  {
    id: "child-care",
    title: "초등돌봄지도사",
    type: "집체훈련",
    hours: "40시간",
    format: "대면",
    status: "모집중" as const,
    description:
      "초등학교 돌봄교실 운영에 필요한 전문 역량을 갖춘 돌봄지도사를 양성합니다. 아동 발달, 안전관리, 프로그램 운영 실무를 배웁니다.",
    tags: ["국비지원", "돌봄교육", "아동"],
    icon: "👧",
  },
  {
    id: "design-platform",
    title: "디자인플랫폼 활용",
    type: "집체훈련",
    hours: "20시간",
    format: "대면",
    status: "운영중" as const,
    description:
      "Canva, 미리캔버스 등 디자인 플랫폼을 활용하여 실무에 필요한 홍보물, 카드뉴스, 프레젠테이션을 직접 제작하는 과정입니다.",
    tags: ["디자인", "실무활용"],
    icon: "🖌️",
  },
];

const NOTICES = [
  {
    id: 1,
    title: "2026년 하반기 복지행정관리사 과정 수강생 모집",
    date: "2026.04.01",
    badge: "모집",
  },
  {
    id: 2,
    title: "2027년 훈련과정 실시가능직종 승인 신청 안내",
    date: "2026.03.26",
    badge: "안내",
  },
  {
    id: 3,
    title: "AI디지털콘텐츠크리에이터 과정 강사 모집",
    date: "2026.03.20",
    badge: "채용",
  },
  {
    id: 4,
    title: "2026년 1차시 복지행정관리사 과정 일정 안내",
    date: "2026.03.16",
    badge: "안내",
  },
  {
    id: 5,
    title: "가람평생교육원 LMS 시스템 오픈 안내",
    date: "2026.03.10",
    badge: "안내",
  },
];

const STATUS_STYLE = {
  모집중: "bg-green-100 text-green-700",
  준비중: "bg-amber-100 text-amber-700",
  운영중: "bg-blue-100 text-blue-700",
  마감: "bg-gray-100 text-gray-500",
};

const BADGE_STYLE: Record<string, string> = {
  모집: "bg-green-100 text-green-700",
  안내: "bg-blue-100 text-blue-700",
  채용: "bg-purple-100 text-purple-700",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-sm font-medium mb-6">
              사단법인 더불어함께 부설
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              가람평생교육원
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-white/80 font-light">
              국비지원 직업능력개발훈련으로
              <br />
              당신의 새로운 시작을 함께합니다
            </p>
            <p className="mt-4 text-base text-white/60 max-w-xl">
              복지행정관리사, AI디지털콘텐츠크리에이터, 초등돌봄지도사 등 실무
              중심의 훈련과정을 운영합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="px-6 py-3 rounded-xl bg-white text-[var(--color-primary-dark)] font-bold text-sm hover:bg-white/90 transition-colors"
              >
                훈련과정 보기
              </Link>
              <Link
                href="/apply"
                className="px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-bold text-sm hover:bg-[var(--color-accent-light)] transition-colors"
              >
                수강신청
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "4개", label: "훈련과정 운영" },
              { value: "40시간", label: "과정별 교육시간" },
              { value: "국비지원", label: "자부담 일부" },
              { value: "신천동", label: "교육 거점" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-text-light)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="훈련과정 안내"
            subtitle="실무 중심의 국비지원 직업능력개발훈련 과정을 소개합니다"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/courses#${course.id}`}
                className="group bg-white rounded-2xl border border-[var(--color-border)] p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{course.icon}</span>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${STATUS_STYLE[course.status]}`}
                  >
                    {course.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {course.title}
                </h4>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-[var(--color-text-light)]">
                  <span className="px-2 py-0.5 bg-[var(--color-warm-bg)] rounded">
                    {course.type}
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--color-warm-bg)] rounded">
                    {course.hours}
                  </span>
                  <span className="px-2 py-0.5 bg-[var(--color-warm-bg)] rounded">
                    {course.format}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--color-text-light)] leading-relaxed line-clamp-2">
                  {course.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
            >
              전체 훈련과정 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="공지사항"
            subtitle="교육원의 최신 소식과 모집 안내를 확인하세요"
          />
          <div className="mt-6 divide-y divide-[var(--color-border)]">
            {NOTICES.map((notice) => (
              <Link
                key={notice.id}
                href={`/notice#${notice.id}`}
                className="flex items-center gap-3 py-4 hover:bg-[var(--color-warm-bg)] px-3 -mx-3 rounded-lg transition-colors group"
              >
                <span
                  className={`shrink-0 px-2 py-0.5 rounded text-xs font-medium ${BADGE_STYLE[notice.badge] || "bg-gray-100 text-gray-600"}`}
                >
                  {notice.badge}
                </span>
                <span className="flex-1 text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors truncate">
                  {notice.title}
                </span>
                <span className="shrink-0 text-xs text-[var(--color-text-light)]">
                  {notice.date}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/notice"
              className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
            >
              공지사항 전체보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="가람평생교육원의 특별함"
            subtitle="전문 강사진과 체계적인 훈련 시스템으로 교육합니다"
            center
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                icon: "🏫",
                title: "국비지원 교육",
                desc: "고용노동부 인정 직업능력개발훈련으로 수강료 대부분 국비 지원 (자부담 일부)",
              },
              {
                icon: "💻",
                title: "혼합 학습",
                desc: "온라인 이론학습과 대면 실습을 결합한 효과적인 혼합과정 운영",
              },
              {
                icon: "🤖",
                title: "AI 융합 교육",
                desc: "실무에서 바로 활용할 수 있는 AI 도구 활용 능력을 집중 교육",
              },
              {
                icon: "📜",
                title: "자격 연계",
                desc: "과정 수료 후 관련 자격증 취득 및 취업 연계까지 원스톱 지원",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-[var(--color-border)] p-6 text-center hover:shadow-md transition-shadow"
              >
                <span className="text-4xl">{item.icon}</span>
                <h4 className="mt-4 font-bold text-[var(--color-text)]">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-[var(--color-text-light)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">
            새로운 시작, 가람평생교육원과 함께하세요
          </h3>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            국비지원으로 부담 없이, 전문 강사진의 체계적인 교육으로 당신의 역량을
            키워보세요.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/apply"
              className="px-8 py-3 rounded-xl bg-[var(--color-accent)] text-white font-bold text-sm hover:bg-[var(--color-accent-light)] transition-colors"
            >
              수강신청 바로가기
            </Link>
            <Link
              href="/location"
              className="px-8 py-3 rounded-xl bg-white/15 text-white font-bold text-sm hover:bg-white/25 transition-colors"
            >
              오시는 길
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
