import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ResultsDashboardProps {
  onNavigate: (section: string) => void;
}

const mockResults = {
  personalityType: "Исследователь",
  topInterests: [
    { name: "Технологии", percentage: 85 },
    { name: "Анализ данных", percentage: 78 },
    { name: "Решение проблем", percentage: 72 },
  ],
  recommendedProfessions: [
    {
      title: "Data Scientist",
      match: 92,
      description: "Анализ больших данных и создание прогностических моделей",
      category: "IT и аналитика",
    },
    {
      title: "Системный аналитик",
      match: 87,
      description: "Анализ бизнес-процессов и проектирование IT-решений",
      category: "IT и бизнес",
    },
    {
      title: "UX-исследователь",
      match: 81,
      description: "Исследование пользовательского опыта и поведения",
      category: "Дизайн и исследования",
    },
  ],
  skills: [
    { name: "Аналитическое мышление", level: 90 },
    { name: "Внимание к деталям", level: 85 },
    { name: "Системный подход", level: 80 },
    { name: "Коммуникативные навыки", level: 65 },
  ],
};

const ResultsDashboard = ({ onNavigate }: ResultsDashboardProps) => {
  const getMatchColor = (match: number) => {
    if (match >= 85) return "text-green-600 bg-green-50";
    if (match >= 70) return "text-yellow-600 bg-yellow-50";
    return "text-orange-600 bg-orange-50";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Icon
            name="TrendingUp"
            size={64}
            className="mx-auto text-purple-600 mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Результаты профориентации
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            На основе ваших ответов мы подготовили персональные рекомендации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Тип личности */}
          <Card className="bg-gradient-to-br from-purple-500 to-blue-600 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="User" size={24} />
                Ваш тип личности
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">
                  {mockResults.personalityType}
                </h3>
                <p className="opacity-90">
                  Вы любите изучать новое, задавать вопросы и докапываться до
                  сути вещей. Предпочитаете работать с данными и фактами.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Основные интересы */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={24} className="text-purple-600" />
                Ваши интересы
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockResults.topInterests.map((interest) => (
                <div key={interest.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{interest.name}</span>
                    <span className="text-sm text-gray-600">
                      {interest.percentage}%
                    </span>
                  </div>
                  <Progress value={interest.percentage} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Рекомендуемые профессии */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Briefcase" size={24} className="text-purple-600" />
                Рекомендуемые профессии
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {mockResults.recommendedProfessions.map((profession, index) => (
                  <div
                    key={profession.title}
                    className="p-4 border rounded-lg bg-white"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getMatchColor(profession.match)}>
                        {profession.match}% совпадение
                      </Badge>
                      <span className="text-2xl">
                        {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-1">{profession.title}</h4>
                    <Badge variant="outline" className="text-xs mb-2">
                      {profession.category}
                    </Badge>
                    <p className="text-sm text-gray-600 mb-4">
                      {profession.description}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        alert(
                          `Подробная информация о профессии "${profession.title}" скоро будет доступна!`,
                        )
                      }
                    >
                      Узнать больше
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Навыки */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" size={24} className="text-purple-600" />
                Ваши сильные стороны
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {mockResults.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 mr-4"
            onClick={() =>
              alert("Функция скачивания отчета скоро будет доступна!")
            }
          >
            <Icon name="Download" size={20} className="mr-2" />
            Скачать отчет
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              alert("Запись на консультацию скоро будет доступна!")
            }
          >
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Консультация специалиста
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsDashboard;
