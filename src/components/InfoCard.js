import Link from "next/link";

export default function InfoCard({ title, description, href, meta, accent = "emerald" }) {
  const accentClasses = {
    emerald: "border-t-emerald-600",
    sky: "border-t-sky-600",
    amber: "border-t-amber-500",
    rose: "border-t-rose-500",
    indigo: "border-t-indigo-600",
  };

  const content = (
    <article
      className={`h-full rounded-lg border border-stone-200 border-t-4 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        accentClasses[accent] || accentClasses.emerald
      }`}
    >
      {meta ? (
        <p className="mb-3 text-xs font-semibold uppercase text-stone-500">
          {meta}
        </p>
      ) : null}
      <h3 className="text-lg font-semibold text-stone-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-stone-700">{description}</p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
