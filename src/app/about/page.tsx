import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";

export const metadata = {
  title: "교육원 소개 | 가람평생교육원",
  description: "가람평생교육원은 사단법인 더불어함께가 운영하는 직업능력개발훈련 전문 평생교육원입니다.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="교육원 소개"
        description="사단법인 더불어함께가 운영하는 직업능력개발훈련 전문 평생교육원"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "교육원 소개" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 인사말 */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle title="가람평생교육원에 오신 것을 환영합니다" center />
            <p className="text-[var(--color-text-light)] leading-relaxed">
              가람평생교육원은 <strong>사단법인 더불어함께</strong> 부설 평생교육원으로,
              고용노동부 인정 직업능력개발훈련을 통해 지역사회 주민의 역량 개발과
              취업 역량 강화를 지원하고 있습니다.
            </p>
            <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
              AI 기술을 접목한 혁신적인 훈련과정과 체계적인 교육 시스템을 갖추고 있으며,
              수료 후 자격 취득 및 취업까지 연계하는 원스톱 교육 서비스를 제공합니다.
            </p>
          </div>

          {/* 기관 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: "🏛️",
                label: "운영기관",
                value: "사단법인 더불어함께",
                sub: "부설 가람평생교육원",
              },
              {
                icon: "📍",
                label: "교육 거점",
                value: "경기도 시흥시 신천동",
                sub: "가람평생교육원",
              },
              {
                icon: "📅",
                label: "교육 기간",
                value: "연 5회차 운영",
                sub: "5월, 6월, 9월, 10월, 11월",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl border border-[var(--color-border)] p-6 text-center"
              >
                <span className="text-4xl">{info.icon}</span>
                <div className="mt-3 text-sm text-[var(--color-text-light)]">{info.label}</div>
                <div className="mt-1 text-lg font-bold text-[var(--color-text)]">{info.value}</div>
                <div className="mt-1 text-sm text-[var(--color-text-light)]">{info.sub}</div>
              </div>
            ))}
          </div>

          {/* 비전 & 미션 */}
          <SectionTitle title="비전 & 미션" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">비전</h4>
              <p className="text-white/80 leading-relaxed">
                AI 시대에 맞는 실무 역량을 갖춘 전문 인력을 양성하여
                지역사회의 복지와 교육 발전에 기여하는 평생교육의 허브가 됩니다.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-8">
              <h4 className="text-xl font-bold text-[var(--color-primary-dark)] mb-4">미션</h4>
              <ul className="space-y-3 text-[var(--color-text-light)] text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">●</span>
                  AI 융합 교육을 통한 미래 직업 역량 개발
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">●</span>
                  국비지원 직업훈련으로 교육 접근성 향상
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">●</span>
                  실무 중심 교육과 자격 취득 연계
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">●</span>
                  지역사회 교육 인프라 강화 및 일자리 창출
                </li>
              </ul>
            </div>
          </div>

          {/* 교육 체계 */}
          <div className="mt-16">
            <SectionTitle title="교육 운영 체계" center />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {[
                { step: "01", title: "과정 기획", desc: "산업 수요 기반 훈련과정 설계 및 교안 개발" },
                { step: "02", title: "수강생 모집", desc: "HRD-Net 등록 및 온·오프라인 홍보를 통한 모집" },
                { step: "03", title: "교육 운영", desc: "LMS 온라인 학습 + 대면 실습 혼합 교육 진행" },
                { step: "04", title: "수료 & 연계", desc: "수료증 발급, 자격시험 지원, 취업 연계" },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-5 relative"
                >
                  <span className="text-3xl font-bold text-[var(--color-primary)]/20">
                    {item.step}
                  </span>
                  <h4 className="mt-2 font-bold text-[var(--color-text)]">{item.title}</h4>
                  <p className="mt-1 text-sm text-[var(--color-text-light)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 협력기관 */}
          <div className="mt-16">
            <SectionTitle title="협력기관" center />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                "사단법인 더불어함께",
                "배곧아이누리",
                "한국직업능력연구원",
                "스마택트",
              ].map((partner) => (
                <div
                  key={partner}
                  className="bg-white rounded-xl border border-[var(--color-border)] p-4 text-center text-sm font-medium text-[var(--color-text)]"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
