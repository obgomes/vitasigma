import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DiagnosticsSection from "@/components/DiagnosticsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import ExamsSection from "@/components/ExamsSection";
import TechnologySection from "@/components/TechnologySection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SegmentsSection from "@/components/SegmentsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Separator />
        <DiagnosticsSection />
        <Separator />
        <ProblemSection />
        <Separator />
        <SolutionSection />
        <Separator />
        <ServicesSection />
        <Separator />
        <ExamsSection />
        <Separator />
        <TechnologySection />
        <Separator />
        <DifferentialsSection />
        <Separator />
        <SegmentsSection />
        <Separator />
        <BlogPreviewSection />
        <Separator />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
