import { EmptyState } from "@/components/empty-state";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
            Handyman marketplace
          </p>
          <h1 className="max-w-3xl text-4xl font-bold text-slate-950 sm:text-5xl">
            Find reliable local help and manage ads cleanly.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-700">
            The app scaffold is ready for Next.js, Tailwind, NeonDB, and Drizzle
            ORM.
          </p>
        </div>

        <EmptyState
          title="No ads loaded yet"
          description="Connect the Neon database and add server queries when you are ready to show marketplace listings."
        />
      </section>
    </main>
  );
}
