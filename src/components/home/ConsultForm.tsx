'use client'

export default function ConsultForm() {
  return (
    <section id="consult" className="bg-white py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="section-title text-center">상담 신청</h2>
        <form className="space-y-4 mt-6">
          <input
            type="text"
            placeholder="이름"
            className="w-full border rounded px-4 py-2"
          />
          <input
            type="tel"
            placeholder="연락처"
            className="w-full border rounded px-4 py-2"
          />
          <textarea
            placeholder="문의 내용"
            className="w-full border rounded px-4 py-2"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="btn-primary w-full text-center"
          >
            상담 신청하기
          </button>
        </form>
      </div>
    </section>
  )
}