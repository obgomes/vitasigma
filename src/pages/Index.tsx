import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ExamsSection />
        <TechnologySection />
        <DifferentialsSection />
        <SegmentsSection />
        <BlogPreviewSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
