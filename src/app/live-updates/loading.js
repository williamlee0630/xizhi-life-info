export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-emerald-100 bg-white p-6 shadow-sm">
        <div className="h-4 w-36 rounded bg-emerald-100" />
        <div className="mt-4 h-10 w-2/3 rounded bg-stone-100" />
        <div className="mt-4 space-y-3">
          <div className="h-4 rounded bg-stone-100" />
          <div className="h-4 w-5/6 rounded bg-stone-100" />
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-44 rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
          >
            <div className="h-4 w-24 rounded bg-emerald-100" />
            <div className="mt-5 h-6 w-3/4 rounded bg-stone-100" />
            <div className="mt-4 h-4 rounded bg-stone-100" />
            <div className="mt-3 h-4 w-2/3 rounded bg-stone-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
