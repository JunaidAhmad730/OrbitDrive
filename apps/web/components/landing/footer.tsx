import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Orbit<span className="text-blue-400">Drive</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Your Universe. Your Files.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <Link href="#">Features</Link>
          <Link href="#">Roadmap</Link>
          <Link href="https://github.com/JunaidAhmad730/OrbitDrive">
            GitHub
          </Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Contact</Link>
        </nav>

        <p className="text-sm text-slate-500">
          © 2026 OrbitDrive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
