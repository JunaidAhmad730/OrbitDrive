import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020617] px-6 text-center">
      <h1 className="text-7xl font-black text-white">
        404
      </h1>

      <p className="mt-6 text-2xl text-slate-300">
        Lost in Space
      </p>

      <p className="mt-4 max-w-md text-slate-500">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
      >
        Return Home
      </Link>
    </main>
  );
}