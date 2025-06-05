import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 font-montserrat">
            Система профориентации
          </h1>
          <h2 className="text-2xl mb-6 opacity-90">ГКУ СРЦН Сухой Лог</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-85">
            Откройте свой профессиональный путь с помощью современных методов
            профориентации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <Icon
              name="Users"
              size={48}
              className="mx-auto mb-4 text-yellow-300"
            />
            <h3 className="text-lg font-semibold mb-2">Персональный подход</h3>
            <p className="text-sm opacity-80">
              Индивидуальные рекомендации на основе ваших интересов
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <Icon
              name="Target"
              size={48}
              className="mx-auto mb-4 text-green-300"
            />
            <h3 className="text-lg font-semibold mb-2">Точная диагностика</h3>
            <p className="text-sm opacity-80">
              Современные методы оценки способностей и склонностей
            </p>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
            <Icon
              name="BookOpen"
              size={48}
              className="mx-auto mb-4 text-blue-300"
            />
            <h3 className="text-lg font-semibold mb-2">База знаний</h3>
            <p className="text-sm opacity-80">
              Полная информация о профессиях и образовательных путях
            </p>
          </Card>
        </div>

        <Button
          size="lg"
          className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
        >
          Начать профориентацию
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
