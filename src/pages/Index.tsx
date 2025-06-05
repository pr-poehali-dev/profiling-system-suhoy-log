import Hero from "@/components/Hero";
import CareerAssessment from "@/components/CareerAssessment";
import ProfessionCatalog from "@/components/ProfessionCatalog";
import ResultsDashboard from "@/components/ResultsDashboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-open-sans">
      <Hero />
      <CareerAssessment />
      <ProfessionCatalog />
      <ResultsDashboard />
    </div>
  );
};

export default Index;
