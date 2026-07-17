import { Cloud, FolderOpen, HardDrive, Search } from "lucide-react";

const stats = [
  {
    icon: FolderOpen,
    value: "12K+",
    label: "Files Managed",
  },
  {
    icon: Cloud,
    value: "Unlimited",
    label: "Telegram Storage",
  },
  {
    icon: Search,
    value: "<1 sec",
    label: "Search Speed",
  },
  {
    icon: HardDrive,
    value: "99.9%",
    label: "Reliability",
  },
];

export function Stats() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400">
                <Icon size={28} />
              </div>

              <h3 className="text-4xl font-bold text-white">{stat.value}</h3>

              <p className="mt-3 text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
