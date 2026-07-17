import { Background } from "@/components/landing/background";
import { DashboardPreview } from "@/components/landing/dashboard-preview";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";
import { Stats } from "@/components/landing/stats";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <DashboardPreview />
      <Features />
      <Footer />
    </>
  );
}
