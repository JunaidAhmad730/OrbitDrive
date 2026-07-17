export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#020617]">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />

        <h1 className="text-3xl font-bold text-white">
          Orbit<span className="text-blue-400">Drive</span>
        </h1>

        <p className="text-slate-400">
          Loading your universe...
        </p>
      </div>
    </main>
  );
}