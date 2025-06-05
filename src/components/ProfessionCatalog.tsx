import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const professions = [
  {
    id: 1,
    title: "Программист",
    category: "IT и технологии",
    salary: "80,000 - 200,000 ₽",
    description:
      "Разработка программного обеспечения, веб-приложений и мобильных приложений",
    skills: ["JavaScript", "Python", "React", "SQL"],
    demand: "Высокий",
    education: "Высшее техническое образование или курсы",
    icon: "Code",
  },
  {
    id: 2,
    title: "Психолог",
    category: "Социальная сфера",
    salary: "40,000 - 80,000 ₽",
    description:
      "Консультирование, диагностика и коррекция психологических проблем",
    skills: ["Эмпатия", "Анализ", "Коммуникация", "Терапия"],
    demand: "Средний",
    education: "Высшее психологическое образование",
    icon: "Heart",
  },
  {
    id: 3,
    title: "Дизайнер",
    category: "Творчество",
    salary: "50,000 - 120,000 ₽",
    description: "Создание визуальных решений для брендов, сайтов и продуктов",
    skills: ["Photoshop", "Illustrator", "Композиция", "Типографика"],
    demand: "Высокий",
    education: "Художественное образование или курсы",
    icon: "Palette",
  },
  {
    id: 4,
    title: "Медсестра",
    category: "Здравоохранение",
    salary: "35,000 - 60,000 ₽",
    description: "Уход за пациентами, выполнение медицинских процедур",
    skills: ["Медицина", "Внимательность", "Ответственность", "Коммуникация"],
    demand: "Очень высокий",
    education: "Среднее медицинское образование",
    icon: "Stethoscope",
  },
  {
    id: 5,
    title: "Учитель",
    category: "Образование",
    salary: "30,000 - 55,000 ₽",
    description: "Обучение и воспитание детей, передача знаний и навыков",
    skills: ["Педагогика", "Коммуникация", "Терпение", "Организация"],
    demand: "Высокий",
    education: "Высшее педагогическое образование",
    icon: "GraduationCap",
  },
  {
    id: 6,
    title: "Инженер",
    category: "Техника",
    salary: "60,000 - 150,000 ₽",
    description: "Проектирование и разработка технических решений",
    skills: ["Математика", "CAD", "Проектирование", "Анализ"],
    demand: "Высокий",
    education: "Высшее техническое образование",
    icon: "Settings",
  },
];

const categories = [
  "Все",
  "IT и технологии",
  "Социальная сфера",
  "Творчество",
  "Здравоохранение",
  "Образование",
  "Техника",
];

const ProfessionCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProfessions = professions.filter((profession) => {
    const matchesCategory =
      selectedCategory === "Все" || profession.category === selectedCategory;
    const matchesSearch =
      profession.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profession.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Очень высокий":
        return "bg-red-100 text-red-800";
      case "Высокий":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Каталог профессий
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Изучите различные профессии, их требования и перспективы развития
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <Input
            placeholder="Поиск профессий..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
          />

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="text-sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessions.map((profession) => (
            <Card
              key={profession.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon
                    name={profession.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                  <Badge className={getDemandColor(profession.demand)}>
                    {profession.demand} спрос
                  </Badge>
                </div>
                <CardTitle className="text-xl">{profession.title}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {profession.category}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  {profession.description}
                </p>

                <div>
                  <h4 className="font-semibold text-sm mb-2">
                    Ключевые навыки:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {profession.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="DollarSign"
                      size={16}
                      className="text-green-600"
                    />
                    <span className="font-medium">{profession.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="BookOpen" size={16} className="text-blue-600" />
                    <span className="text-gray-600">
                      {profession.education}
                    </span>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionCatalog;
