"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const COURSES = [
  { value: "welfare-admin", label: "복지행정관리사 (혼합과정 40시간)" },
  { value: "ai-content-creator", label: "AI디지털콘텐츠크리에이터 (혼합과정 40시간)" },
  { value: "child-care", label: "초등돌봄지도사 (집체훈련 40시간)" },
  { value: "design-platform", label: "디자인플랫폼 활용 (집체훈련 20시간)" },
];

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    // 실제 구현 시 API 엔드포인트로 전송
    // await fetch('/api/apply', { method: 'POST', body: JSON.stringify(form) })
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSending(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <PageHero
          title="수강신청"
          description="훈련과정 수강을 신청해 주세요"
          breadcrumb={[
            { label: "홈", href: "/" },
            { label: "수강신청" },
          ]}
        />
        <section className="py-20">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[var(--color-text)]">
              신청이 접수되었습니다
            </h3>
            <p className="mt-3 text-[var(--color-text-light)]">
              입력하신 연락처로 상세 안내를 드리겠습니다.
              <br />
              문의사항은{" "}
              <a href="mailto:garam@sdh.or.kr" className="text-[var(--color-primary)] font-medium">
                garam@sdh.or.kr
              </a>
              로 연락해 주세요.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", phone: "", email: "", course: "", message: "" });
              }}
              className="mt-6 px-6 py-2.5 rounded-lg text-sm font-medium text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-colors"
            >
              추가 신청하기
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="수강신청"
        description="훈련과정 수강을 신청해 주세요"
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "수강신청" },
        ]}
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* 신청 폼 */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[var(--color-text)] mb-6">
                  수강신청서
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      이메일
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      희망과정 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="course"
                      required
                      value={form.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all"
                    >
                      <option value="">과정을 선택해 주세요</option>
                      {COURSES.map((c) => (
                        <option key={c.value} value={c.value}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-1.5">
                      문의사항
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="궁금하신 사항이 있으시면 적어주세요"
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--color-border)] text-sm focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 rounded-lg text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] disabled:opacity-50 transition-colors"
                  >
                    {sending ? "신청 중..." : "수강신청"}
                  </button>
                </form>
              </div>
            </div>

            {/* 안내 사이드바 */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6">
                <h4 className="font-bold text-[var(--color-text)] mb-3">신청 안내</h4>
                <ul className="space-y-3 text-sm text-[var(--color-text-light)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-bold">1</span>
                    온라인 신청서를 작성해 주세요
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-bold">2</span>
                    담당자가 연락처로 상세 안내를 드립니다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-bold">3</span>
                    HRD-Net 수강신청을 완료합니다
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-bold">4</span>
                    교육에 참여합니다
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--color-primary)]/5 rounded-2xl p-6">
                <h4 className="font-bold text-[var(--color-primary-dark)] mb-3">문의</h4>
                <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
                  <li>
                    이메일:{" "}
                    <a href="mailto:garam@sdh.or.kr" className="text-[var(--color-primary)] font-medium">
                      garam@sdh.or.kr
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h4 className="font-bold text-amber-800 mb-2">유의사항</h4>
                <ul className="space-y-1.5 text-xs text-amber-700">
                  <li>• 국비지원 과정은 HRD-Net 등록이 필요합니다</li>
                  <li>• 과정별 모집 인원이 제한될 수 있습니다</li>
                  <li>• 혼합과정의 온라인 수업은 LMS를 통해 진행됩니다</li>
                  <li>• 대면 수업 장소는 별도 안내됩니다</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
