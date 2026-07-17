"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Cloud,
  FileText,
  Folder,
  ImageIcon,
  Music,
  Search,
  Upload,
  User,
  Video,
} from "lucide-react";

const files = [
  { name: "Vacation.jpg", type: "Image", size: "5.4 MB" },
  { name: "Resume.pdf", type: "PDF", size: "780 KB" },
  { name: "Project.fig", type: "Design", size: "11.2 MB" },
  { name: "Music.mp3", type: "Audio", size: "8.9 MB" },
];

export function DashboardPreview() {
  return (
    <section
      id="dashboard"
      className="relative -mt-20 px-6 pb-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60 shadow-[0_0_80px_rgba(59,130,246,0.18)] backdrop-blur-2xl"
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">

          <div>
            <h2 className="text-2xl font-bold text-white">
              OrbitDrive Dashboard
            </h2>

            <p className="text-slate-400">
              Manage everything from one place.
            </p>
          </div>

          <div className="flex items-center gap-3">

            <button className="rounded-xl border border-white/10 p-3 hover:bg-white/10">
              <Search size={18}/>
            </button>

            <button className="rounded-xl border border-white/10 p-3 hover:bg-white/10">
              <Bell size={18}/>
            </button>

            <button className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-500">
              <Upload className="mr-2 inline h-4 w-4"/>
              Upload
            </button>

          </div>

        </div>

        <div className="grid lg:grid-cols-[260px_1fr]">

          {/* Sidebar */}

          <aside className="border-r border-white/10 p-6">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                <User />
              </div>

              <div>

                <p className="font-semibold text-white">
                  Junaid Ahmad
                </p>

                <p className="text-sm text-slate-400">
                  Premium User
                </p>

              </div>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 p-6">

              <Cloud className="mb-4 text-blue-400"/>

              <h3 className="text-4xl font-bold text-white">
                28.4 GB
              </h3>

              <p className="mt-2 text-slate-300">
                Telegram Cloud Used
              </p>

              <div className="mt-6 h-3 rounded-full bg-slate-700">

                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"/>

              </div>

            </div>

            <div className="mt-10 space-y-4">

              {[
                ["My Drive", Folder],
                ["Photos", ImageIcon],
                ["Videos", Video],
                ["Music", Music],
                ["Documents", FileText],
              ].map(([title, Icon]) => (
                <div
                  key={title}
                  className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                  {title}
                </div>
              ))}

            </div>

          </aside>

          {/* Main */}

          <main className="p-8">

            <div className="mb-8 flex items-center justify-between">

              <h3 className="text-3xl font-bold text-white">
                Recent Files
              </h3>

              <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
                124 Files
              </span>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {files.map((file) => (
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  key={file.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 transition"
                >

                  <FileText className="mb-5 text-blue-400"/>

                  <h4 className="font-semibold text-white">
                    {file.name}
                  </h4>

                  <p className="mt-2 text-slate-400">
                    {file.type}
                  </p>

                  <p className="mt-5 text-blue-400">
                    {file.size}
                  </p>

                </motion.div>
              ))}

            </div>

          </main>

        </div>

      </motion.div>
    </section>
  );
}