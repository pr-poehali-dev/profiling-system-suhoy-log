import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Header = ({ onNavigate, currentSection }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon name="Compass" size={32} className="text-purple-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Профориентация
              </h1>
              <p className="text-sm text-gray-600">ГКУ СРЦН Сухой Лог</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button
              variant={currentSection === "hero" ? "default" : "ghost"}
              onClick={() => onNavigate("hero")}
            >
              Главная
            </Button>
            <Button
              variant={currentSection === "assessment" ? "default" : "ghost"}
              onClick={() => onNavigate("assessment")}
            >
              Тест
            </Button>
            <Button
              variant={currentSection === "catalog" ? "default" : "ghost"}
              onClick={() => onNavigate("catalog")}
            >
              Профессии
            </Button>
            <Button
              variant={currentSection === "results" ? "default" : "ghost"}
              onClick={() => onNavigate("results")}
            >
              Результаты
            </Button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                alert(
                  "🚀 Функция входа в аккаунт скоро будет доступна!\n\nСледите за обновлениями в нашем Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy",
                );
              }}
            >
              <Icon name="LogIn" size={16} className="mr-2" />
              Войти
            </Button>
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                alert(
                  "🚀 Регистрация аккаунтов скоро будет доступна!\n\nСледите за обновлениями в нашем Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy",
                );
              }}
            >
              <Icon name="UserPlus" size={16} className="mr-2" />
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
