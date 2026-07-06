export default function FAQSection({ faqs, title = "常見問題" }) {
  return (
    <section className="space-y-5" aria-labelledby="faq-heading">
      <div>
        <p className="text-sm font-semibold text-emerald-700">FAQ</p>
        <h2 id="faq-heading" className="mt-2 text-2xl font-semibold text-stone-950">
          {title}
        </h2>
      </div>
      <div className="grid gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.id}
            className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
          >
            <summary className="cursor-pointer text-base font-semibold text-stone-950">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-stone-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
