import Image from "next/image";
import Link from "next/link";
import { Menu, Send } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="OrbitDrive Logo"
            width={42}
            height={42}
            className="rounded-xl"
          />

          <div>
            <h1 className="text-lg font-bold text-white sm:text-xl">
              Orbit<span className="text-blue-400">Drive</span>
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              Telegram Cloud Manager
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#features" className="text-slate-300 hover:text-blue-400">
            Features
          </Link>

          <Link
            href="#dashboard"
            className="text-slate-300 hover:text-blue-400"
          >
            Dashboard
          </Link>

          <Link href="#roadmap" className="text-slate-300 hover:text-blue-400">
            Roadmap
          </Link>

          <Link
            href="https://github.com/JunaidAhmad730/OrbitDrive"
            target="_blank"
            className="text-slate-300 hover:text-blue-400"
          >
            GitHub
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-500 md:flex">
            <Send size={18} />
            Continue
          </button>

          <button className="rounded-xl border border-white/10 p-2 text-white lg:hidden">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
