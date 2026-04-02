import PageHero from "@/components/PageHero";

export const metadata = {
  title: "강사소개 | 가람평생교육원",
  description: "가람평생교육원의 전문 강사진을 소개합니다.",
};

const INSTRUCTORS = [
  {
    name: "안정남",
    role: "센터장",
    org: "배곧아이누리",
    specialties: ["복지행정관리사", "사회복지 행정실무", "복지정책"],
    description:
      "사회복지 행정 분야의 풍부한 실무 경험을 바탕으로 복지행정관리사 과정의 행정실무 교육을 담당합니다.",
    courses: ["복지행정관리사 (행정실무 이론 및 서류작성)"],
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "강미경",
    role: "센터장",
    org: "교육 전문가",
    specialties: ["초등돌봄지도사", "아동교육", "돌봄프로그램"],
    description:
      "아동교육 및 돌봄 분야의 전문가로서 초등돌봄지도사 과정의 교육을 담당합니다.",
    courses: ["초등돌봄지도사"],
    color: "bg-pink-50 text-pink-700",
  },
  {
    name: "조진영",
    role: "대표",
    org: "스마택트",
    specialties: ["AI 활용 교육", "디지털콘텐츠", "디자인플랫폼"],
    description:
      "AI 기술 활용 교육 전문가로서 AI디지털콘텐츠크리에이터, 디자인플랫폼 활용 등 AI 융합 교육을 담당합니다.",
    courses: [
      "복지행정관리사 (AI활용 대면 교육)",
      "AI디지털콘텐츠크리에이터",
      "디자인플랫폼 활용",
    ],
    color: "bg-teal-50 text-teal-700",
  },
  {
    name: "서선희",
    role: "센터장",
    org: "배곧아이누리 17호점",
    specialties: ["교육과정 기획", "훈련과정 운영", "HRD 관리"],
    description:
      "가람평생교육원의 훈련과정 총괄 기획 및 운영을 담당합니다. 직업능력개발훈련 심사평가 및 실시가능직종 승인 관리를 수행합니다.",
    courses: ["교육과정 총괄 기획 및 운영"],
    color: "bg-purple-50 text-purple-700",
  },
];

export default function InstructorsPage() {
  return (
    <>
      <PageHero
        title="강사소개"
        description="전문 분야의 실무 경험을 갖춘 강사진이 교육합니다"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "강사소개" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTRUCTORS.map((instructor) => (
              <div
                key={instructor.name}
                className="bg-white rounded-2xl border border-[var(--color-border)] overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  {/* 프로필 헤더 */}
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl font-bold text-[var(--color-primary)]">
                      {instructor.name[0]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--color-text)]">
                        {instructor.name}
                      </h3>
                      <p className="text-sm text-[var(--color-text-light)]">
                        {instructor.role} · {instructor.org}
                      </p>
                    </div>
                  </div>

                  {/* 소개 */}
                  <p className="mt-4 text-sm text-[var(--color-text-light)] leading-relaxed">
                    {instructor.description}
                  </p>

                  {/* 전문분야 */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {instructor.specialties.map((s) => (
                      <span
                        key={s}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium ${instructor.color}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* 담당과정 */}
                  <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                    <h4 className="text-xs font-bold text-[var(--color-text-light)] uppercase tracking-wide mb-2">
                      담당과정
                    </h4>
                    <ul className="space-y-1">
                      {instructor.courses.map((course) => (
                        <li
                          key={course}
                          className="flex items-center gap-2 text-sm text-[var(--color-text)]"
                        >
                          <svg
                            className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {course}
                        </li>
                      ))}
                    </ul>
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
