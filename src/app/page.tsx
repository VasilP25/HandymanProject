import Image from "next/image";
import Link from "next/link";

const serviceTypes = [
  "Electricians",
  "Plumbers",
  "Painters",
  "Tile installers",
  "Flooring specialists",
  "Renovation contractors",
];

const trustPoints = [
  {
    value: "Verified context",
    label: "Reviews focus on real renovation work, pricing, and outcomes.",
  },
  {
    value: "Local insight",
    label: "Browse professionals by region before inviting anyone home.",
  },
  {
    value: "Clear comparisons",
    label: "Compare price, service type, and customer experience quickly.",
  },
];

const recentReviews = [
  {
    title: "Bathroom tile work finished on time",
    trade: "Tile installer",
    region: "Sofia",
    price: "BGN 1,850",
  },
  {
    title: "Electrical panel replacement with clean documentation",
    trade: "Electrician",
    region: "Plovdiv",
    price: "BGN 720",
  },
  {
    title: "Apartment repainting with careful prep work",
    trade: "Painter",
    region: "Varna",
    price: "BGN 1,200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-10">
          <div className="space-y-8">
            <nav className="flex items-center justify-between gap-4" aria-label="Primary">
              <Link href="/" className="text-lg font-bold tracking-tight text-slate-950">
                HandymanProject
              </Link>
              <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
                <Link className="transition hover:text-cyan-700" href="#browse">
                  Browse
                </Link>
                <Link className="transition hover:text-cyan-700" href="#reviews">
                  Reviews
                </Link>
                <Link className="transition hover:text-cyan-700" href="#share">
                  Share
                </Link>
              </div>
            </nav>

            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Contractor reviews for apartment owners
              </p>
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Find reliable renovation professionals before you hire.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
                  Read local experiences about electricians, plumbers, painters,
                  tile installers, and renovation contractors. Compare pricing,
                  regions, and customer feedback with confidence.
                </p>
              </div>
            </div>

            <form className="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 shadow-sm sm:grid-cols-[1fr_0.8fr_auto]">
              <label className="sr-only" htmlFor="service">
                Service or contractor
              </label>
              <input
                className="min-h-12 rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                id="service"
                name="service"
                placeholder="Search service or contractor"
                type="search"
              />
              <label className="sr-only" htmlFor="region">
                Region
              </label>
              <input
                className="min-h-12 rounded-md border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-500 focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100"
                id="region"
                name="region"
                placeholder="Region"
                type="search"
              />
              <button
                className="min-h-12 rounded-md bg-cyan-700 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                type="submit"
              >
                Search
              </button>
            </form>

            <div className="grid gap-4 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point.value} className="border-l-2 border-cyan-600 pl-4">
                  <p className="font-semibold text-slate-950">{point.value}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {point.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-x-8 -top-6 h-20 rounded-full bg-cyan-100 blur-3xl" />
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl">
              <Image
                alt="Apartment owner reviewing renovation contractor notes in a bright modern apartment"
                className="h-64 w-full object-cover sm:h-72"
                height={720}
                priority
                src="/renovation-review-hero.png"
                width={960}
              />
              <div className="bg-slate-950 px-5 py-4 text-white">
                <p className="text-sm font-semibold">Trusted review snapshot</p>
                <p className="mt-1 text-sm text-slate-300">
                  Clear details owners need before booking renovation work.
                </p>
              </div>
              <div className="space-y-4 p-5">
                {recentReviews.map((review) => (
                  <article
                    className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    key={review.title}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h2 className="text-base font-semibold text-slate-950">
                          {review.title}
                        </h2>
                        <p className="mt-1 text-sm text-slate-600">
                          {review.trade} in {review.region}
                        </p>
                      </div>
                      <p className="shrink-0 rounded-md bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                        {review.price}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-10" id="browse">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                Browse by service
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                Start with the work you need done.
              </h2>
            </div>
            <Link
              className="text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
              href="#reviews"
            >
              View recent reviews
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((service) => (
              <Link
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
                href="#reviews"
                key={service}
              >
                <h3 className="text-lg font-semibold text-slate-950">{service}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Compare local reviews, expected pricing, and homeowner
                  experiences for {service.toLowerCase()}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10" id="reviews">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
              Review quality
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">
              Built for transparency, not guesswork.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-700">
              Useful reviews include the contractor name, the type of work, the
              region, price context, and what went well or wrong during the job.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {["Price clarity", "Regional fit", "Owner experience"].map((item) => (
              <div
                className="rounded-lg border border-slate-200 bg-slate-50 p-5"
                key={item}
              >
                <h3 className="font-semibold text-slate-950">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  See the practical details that help you compare professionals
                  before making contact.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-14 text-white sm:px-10" id="share">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-3xl font-bold">Share your contractor experience.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Help other apartment owners choose reliable professionals and avoid
              costly surprises.
            </p>
          </div>
          <Link
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-cyan-50"
            href="#"
          >
            Write a review
          </Link>
        </div>
      </section>
    </main>
  );
}
