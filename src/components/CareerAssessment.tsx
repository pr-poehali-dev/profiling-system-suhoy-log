import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const questions = [
  {
    id: 1,
    question: "Что вас больше привлекает в работе?",
    options: [
      { value: "technical", label: "Работа с техникой и технологиями" },
      { value: "people", label: "Общение и помощь людям" },
      { value: "creative", label: "Творческая деятельность" },
      { value: "analytical", label: "Анализ данных и исследования" },
    ],
  },
  {
    id: 2,
    question: "В какой среде вы предпочитаете работать?",
    options: [
      { value: "office", label: "Офисная среда" },
      { value: "outdoor", label: "На открытом воздухе" },
      { value: "laboratory", label: "Лаборатория или мастерская" },
      { value: "home", label: "Удаленная работа" },
    ],
  },
  {
    id: 3,
    question: "Какой тип задач вам ближе?",
    options: [
      { value: "routine", label: "Структурированные, повторяющиеся задачи" },
      { value: "variety", label: "Разнообразные, новые вызовы" },
      { value: "leadership", label: "Руководство и координация" },
      { value: "individual", label: "Самостоятельная работа" },
    ],
  },
  {
    id: 4,
    question: "Как вы предпочитаете принимать решения?",
    options: [
      { value: "logic", label: "На основе логики и фактов" },
      { value: "intuition", label: "Доверяя интуиции" },
      { value: "team", label: "Обсуждая с командой" },
      { value: "experience", label: "Опираясь на опыт" },
    ],
  },
  {
    id: 5,
    question: "Что вас мотивирует больше всего?",
    options: [
      { value: "money", label: "Высокая зарплата" },
      { value: "recognition", label: "Признание и уважение" },
      { value: "growth", label: "Профессиональный рост" },
      { value: "impact", label: "Польза для общества" },
    ],
  },
  {
    id: 6,
    question: "Какой график работы вам подходит?",
    options: [
      { value: "standard", label: "Стандартный 9-18" },
      { value: "flexible", label: "Гибкий график" },
      { value: "project", label: "Проектная работа" },
      { value: "shift", label: "Сменный график" },
    ],
  },
  {
    id: 7,
    question: "Как вы относитесь к стрессовым ситуациям?",
    options: [
      { value: "avoid", label: "Предпочитаю избегать" },
      { value: "manage", label: "Умею справляться" },
      { value: "thrive", label: "Работаю лучше под давлением" },
      { value: "neutral", label: "Отношусь нейтрально" },
    ],
  },
  {
    id: 8,
    question: "Какой уровень ответственности вас привлекает?",
    options: [
      { value: "low", label: "Минимальная ответственность" },
      { value: "medium", label: "Средняя ответственность" },
      { value: "high", label: "Высокая ответственность" },
      { value: "leadership", label: "Руководящие позиции" },
    ],
  },
  {
    id: 9,
    question: "Предпочитаете работать один или в команде?",
    options: [
      { value: "alone", label: "Самостоятельно" },
      { value: "small_team", label: "В небольшой команде" },
      { value: "large_team", label: "В большом коллективе" },
      { value: "mixed", label: "Сочетание индивидуальной и командной работы" },
    ],
  },
  {
    id: 10,
    question: "Какое образование и развитие важны для вас?",
    options: [
      { value: "formal", label: "Формальное образование (вузы, курсы)" },
      { value: "practical", label: "Практический опыт" },
      { value: "self_learning", label: "Самообразование" },
      { value: "mentorship", label: "Наставничество и менторство" },
    ],
  },
];

interface CareerAssessmentProps {
  onNavigate: (section: string) => void;
}

const CareerAssessment = ({ onNavigate }: CareerAssessmentProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isCompleted) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Icon
                name="CheckCircle"
                size={64}
                className="mx-auto text-green-500 mb-4"
              />
              <CardTitle className="text-2xl text-green-600">
                Тест завершен!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Спасибо за прохождение теста. Ваши результаты обрабатываются...
              </p>
              <Button
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => onNavigate("results")}
              >
                Посмотреть результаты
                <Icon name="BarChart3" size={20} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Тест профориентации
              </h2>
              <span className="text-sm text-gray-500">
                {currentQuestion + 1} из {questions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[questions[currentQuestion].id] || ""}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                  }
                  disabled={currentQuestion === 0}
                >
                  <Icon name="ChevronLeft" size={20} className="mr-2" />
                  Назад
                </Button>

                <Button
                  onClick={nextQuestion}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {currentQuestion === questions.length - 1
                    ? "Завершить"
                    : "Далее"}
                  <Icon name="ChevronRight" size={20} className="ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerAssessment;
