import { Cloud, FolderOpen, Search, Zap } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description:
      "Upload, download and organize your files instantly with a modern interface.",
    icon: Zap,
  },
  {
    title: "Smart Organization",
    description:
      "Automatically organize photos, videos, documents and music into categories.",
    icon: FolderOpen,
  },
  {
    title: "Powerful Search",
    description:
      "Find any file within seconds using intelligent search and filters.",
    icon: Search,
  },
  {
    title: "Telegram Cloud",
    description:
      "Manage your Telegram cloud storage from one beautiful dashboard.",
    icon: Cloud,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-blue-400 font-semibold">WHY ORBITDRIVE</p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            Everything you need.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Designed to make Telegram cloud storage feel like a premium file
            manager.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 transition group-hover:scale-110">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
