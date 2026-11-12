function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-16 text-slate-100">
      <section className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20 sm:p-12">
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-200">
          React + Tailwind CSS
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Your next idea starts here.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          A clean, ready-to-build starter. Edit{' '}
          <code className="rounded bg-white/10 px-2 py-1 text-sm text-cyan-100">
            src/App.jsx
          </code>{' '}
          and use Tailwind utility classes to make it yours.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            className="rounded-lg bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Explore React
          </a>
          <a
            className="rounded-lg border border-white/15 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/10"
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind docs
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
