"use client"
import React, { useMemo, useState } from "react";

// Demo static dataset – replace with your own JSON or fetch at build time
// Each job has: id, title, businessUnit, division, level, location, summary
const JOBS = [
  {
    id: "J-1001",
    title: "Backend Engineer",
    businessUnit: "Technology",
    division: "Platform",
    level: "Mid",
    location: "Phnom Penh",
    summary: "Own APIs for auth, billing, and internal services.",
  },
  {
    id: "J-1002",
    title: "Frontend Engineer",
    businessUnit: "Technology",
    division: "Web",
    level: "Junior",
    location: "Remote",
    summary: "Build accessible UI and design systems for our web apps.",
  },
  {
    id: "J-1003",
    title: "DevOps Engineer",
    businessUnit: "Technology",
    division: "Platform",
    level: "Senior",
    location: "Hybrid (PP)",
    summary: "Operate CI/CD, observability, IaC, and Kubernetes clusters.",
  },
  {
    id: "J-1004",
    title: "Sales Consultant",
    businessUnit: "Commercial",
    division: "Field Sales",
    level: "Mid",
    location: "Takéo",
    summary: "Drive revenue growth with enterprise customers in-region.",
  },
  {
    id: "J-1005",
    title: "HR Generalist",
    businessUnit: "People",
    division: "Talent Ops",
    level: "Junior",
    location: "Phnom Penh",
    summary: "Support recruitment, onboarding, and people programs.",
  },
  {
    id: "J-1006",
    title: "Account Manager",
    businessUnit: "Commercial",
    division: "Key Accounts",
    level: "Senior",
    location: "Phnom Penh",
    summary: "Own strategic accounts and cross-sell product portfolio.",
  },
  {
    id: "J-1007",
    title: "Account Manager HOD",
    businessUnit: "Commercial",
    division: "Key Accounts",
    level: "Manager HOD",
    location: "Phnom Penh",
    summary: "Own strategic accounts and cross-sell product portfolio.",
  },
  {
    id: "J-1008",
    title: "Account Manager HOD Plus",
    businessUnit: "Commercial",
    division: "Key Accounts",
    level: "Manager HOD Plus",
    location: "Phnom Penh",
    summary: "Own strategic accounts and cross-sell product portfolio.",
  },
];

// Utility: unique sorted values for a field
const getOptions = (list: typeof JOBS, key: keyof (typeof JOBS)[number]) =>
  Array.from(new Set(list.map((j) => j[key] as string))).sort();

// Types for the form state
type Filters = {
  businessUnit: string;
  division: string;
  level: string;
};

const EMPTY_FILTERS: Filters = { businessUnit: "", division: "", level: "" };

export default function CareersPage() {
  // Pending (form) state and applied state (used for filtering only when user clicks Search)
  const [pending, setPending] = useState<Filters>({ ...EMPTY_FILTERS });
  const [applied, setApplied] = useState<Filters>({ ...EMPTY_FILTERS });

  const businessUnits = useMemo(() => getOptions(JOBS, "businessUnit"), []);
  const divisions = useMemo(() => getOptions(JOBS, "division"), []);
  const levels = useMemo(() => getOptions(JOBS, "level"), []);

  const results = useMemo(() => {
    return JOBS.filter((j) => {
      const byBU = applied.businessUnit
        ? j.businessUnit === applied.businessUnit
        : true;
      const byDiv = applied.division ? j.division === applied.division : true;
      const byLvl = applied.level ? j.level === applied.level : true;
      return byBU && byDiv && byLvl;
    });
  }, [applied]);

  const onSearch = () => setApplied(pending);

  const onReset = () => {
    setPending({ ...EMPTY_FILTERS });
    setApplied({ ...EMPTY_FILTERS });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Careers</h1>
          <p className="text-gray-600 mt-1">
            Search by Business Unit, Division, and Level. Client-side filtering
            with static data.
          </p>
        </header>

        {/* Filter Bar */}
        <section className="bg-white rounded-2xl shadow p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Business Unit */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Unit
              </label>
              <select
                className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black"
                value={pending.businessUnit}
                onChange={(e) =>
                  setPending((s) => ({ ...s, businessUnit: e.target.value }))
                }
              >
                <option value="">All</option>
                {businessUnits.map((bu) => (
                  <option key={bu} value={bu}>
                    {bu}
                  </option>
                ))}
              </select>
            </div>

            {/* Division */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Division
              </label>
              <select
                className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black"
                value={pending.division}
                onChange={(e) =>
                  setPending((s) => ({ ...s, division: e.target.value }))
                }
              >
                <option value="">All</option>
                {divisions.map((div) => (
                  <option key={div} value={div}>
                    {div}
                  </option>
                ))}
              </select>
            </div>

            {/* Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Level
              </label>
              <select
                className="w-full rounded-xl border-gray-300 focus:border-black focus:ring-black"
                value={pending.level}
                onChange={(e) =>
                  setPending((s) => ({ ...s, level: e.target.value }))
                }
              >
                <option value="">All</option>
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={onSearch}
                className="flex-1 rounded-xl bg-black text-white font-semibold py-2.5 hover:opacity-90"
              >
                Search
              </button>
              <button
                onClick={onReset}
                className="rounded-xl border font-medium py-2.5 px-4 hover:bg-gray-50"
                title="Clear all filters"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Applied chips */}
          <div className="flex flex-wrap gap-2 mt-4">
            {Object.entries(applied).map(([k, v]) =>
              v ? (
                <span
                  key={k}
                  className="text-sm rounded-full bg-gray-100 px-3 py-1"
                >
                  {k}: {v}
                </span>
              ) : null
            )}
            {Object.values(applied).every((v) => !v) && (
              <span className="text-sm text-gray-500">No filters applied</span>
            )}
          </div>
        </section>

        {/* Results */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold">Results</h2>
            <p className="text-sm text-gray-600">
              {results.length} position{results.length === 1 ? "" : "s"} found
            </p>
          </div>

          {results.length === 0 ? (
            <EmptyState />
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((job) => (
                <li key={job.id} className="bg-white rounded-2xl shadow p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className="text-sm text-gray-600 mt-0.5">
                        {job.location} · {job.level}
                      </p>
                    </div>
                    <span className="text-xs bg-gray-100 rounded-full px-3 py-1">
                      {job.id}
                    </span>
                  </div>
                  <div className="mt-3 text-gray-700 text-sm">
                    {job.summary}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag>{job.businessUnit}</Tag>
                    <Tag>{job.division}</Tag>
                    <Tag>{job.level}</Tag>
                  </div>
                  <div className="mt-5">
                    <a
                      href={`#/jobs/${job.id}`}
                      className="inline-block rounded-xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
                    >
                      View details
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs bg-gray-100 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed p-10 bg-white text-center text-gray-600">
      No jobs match your filters. Try broadening your search.
    </div>
  );
}
