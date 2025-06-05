import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerAssessment from "@/components/CareerAssessment";
import ProfessionCatalog from "@/components/ProfessionCatalog";
import ResultsDashboard from "@/components/ResultsDashboard";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  const handleNavigate = (section: string) => {
    setCurrentSection(section);

    // Плавная прокрутка к секции
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-open-sans">
      <Header onNavigate={handleNavigate} currentSection={currentSection} />

      <div id="hero">
        <Hero onNavigate={handleNavigate} />
      </div>

      <div id="assessment">
        <CareerAssessment onNavigate={handleNavigate} />
      </div>

      <div id="catalog">
        <ProfessionCatalog onNavigate={handleNavigate} />
      </div>

      <div id="results">
        <ResultsDashboard onNavigate={handleNavigate} />
      </div>
    </div>
  );
};

export default Index;
