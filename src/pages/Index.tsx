import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedYear, setSelectedYear] = useState('2026');

  const priceData = [
    { month: 'Авг 2025', price: 52000 },
    { month: 'Сен 2025', price: 49500 },
    { month: 'Окт 2025', price: 48000 },
    { month: 'Ноя 2025', price: 46500 },
    { month: 'Дек 2025', price: 45000 },
    { month: 'Янв 2026', price: 44200 },
  ];

  const forecast = [
    { period: 'Q1 2026', prediction: 'Снижение на 8-12%', confidence: 'high' },
    { period: 'Q2 2026', prediction: 'Стабилизация', confidence: 'medium' },
    { period: 'Q3 2026', prediction: 'Возможное снижение на 5-7%', confidence: 'medium' },
    { period: 'Q4 2026', prediction: 'Новый минимум цен', confidence: 'low' },
  ];

  const manufacturers = [
    { name: 'Samsung', price: 44200, performance: 95, availability: 'Высокая' },
    { name: 'Kingston', price: 42500, performance: 88, availability: 'Средняя' },
    { name: 'Corsair', price: 46000, performance: 92, availability: 'Высокая' },
    { name: 'G.Skill', price: 45500, performance: 94, availability: 'Низкая' },
  ];

  const factors = [
    {
      icon: 'Factory',
      title: 'Производственные мощности',
      desc: 'Расширение фабрик Samsung увеличивает предложение',
      impact: 'Снижение цен на 10-15%',
    },
    {
      icon: 'TrendingUp',
      title: 'Рост спроса',
      desc: 'Переход на DDR5 в игровом и профессиональном сегменте',
      impact: 'Поддержка текущих цен',
    },
    {
      icon: 'Globe',
      title: 'Геополитика',
      desc: 'Торговые ограничения и логистические проблемы',
      impact: 'Локальные скачки цен',
    },
    {
      icon: 'Cpu',
      title: 'Новые платформы',
      desc: 'Выход процессоров Intel Arrow Lake и AMD Zen 5',
      impact: 'Рост спроса на 20-30%',
    },
  ];

  const maxPrice = Math.max(...priceData.map((d) => d.price));
  const minPrice = Math.min(...priceData.map((d) => d.price));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <article className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-16 text-center animate-fade-in">
          <Badge className="mb-4 text-sm">Аналитика рынка памяти</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Оперативная память Samsung 64GB DDR5
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Глубокий анализ ценовых тенденций и рыночной динамики памяти DDR5
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              13 января 2026
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Clock" size={16} />8 мин чтения
            </span>
          </div>
        </header>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Sparkles" size={32} className="text-primary" />
            Введение
          </h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/20 border-primary/20">
            <p className="text-lg leading-relaxed mb-4">
              Рынок оперативной памяти DDR5 переживает период активной трансформации. Samsung,
              лидер индустрии, предлагает модули 64GB с передовыми характеристиками, однако цены
              продолжают оставаться волатильными.
            </p>
            <p className="text-lg leading-relaxed">
              В этом материале мы проанализируем текущую ситуацию на рынке, факторы влияния и дадим
              прогноз, когда память станет доступнее для массового потребителя.
            </p>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Info" size={32} className="text-primary" />
            Текущие цены и характеристики Samsung 64GB DDR5
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="DollarSign" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Средняя цена</h3>
                  <p className="text-3xl font-bold text-primary">44 200 ₽</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">По состоянию на январь 2026</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Частота</h3>
                  <p className="text-3xl font-bold">5600 МГц</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Стандартная спецификация JEDEC</p>
            </Card>
          </div>

          <Card className="p-8 bg-muted/30">
            <h3 className="font-semibold text-xl mb-4">Ключевые характеристики</h3>
            <ul className="space-y-3">
              {[
                'Объем: 64GB (2x32GB)',
                'Тип: DDR5 SDRAM',
                'Частота: 5600 МГц',
                'Задержки: CL46',
                'Напряжение: 1.1V',
                'Профиль XMP 3.0',
              ].map((spec, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="TrendingDown" size={32} className="text-primary" />
            Ценовые тенденции за последние месяцы
          </h2>
          <Card className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Динамика цен (авг 2025 - янв 2026)</h3>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  ↓ -15% за 6 месяцев
                </Badge>
              </div>
              <Separator className="mb-6" />
            </div>

            <div className="relative h-64 mb-6">
              <div className="absolute inset-0 flex items-end justify-around gap-2">
                {priceData.map((data, idx) => {
                  const height = ((data.price - minPrice) / (maxPrice - minPrice)) * 100;
                  return (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div className="text-sm font-semibold text-primary">
                        {data.price.toLocaleString()} ₽
                      </div>
                      <div
                        className="w-full bg-gradient-to-t from-primary to-primary/60 rounded-t-lg transition-all hover:opacity-80 cursor-pointer"
                        style={{ height: `${height}%`, minHeight: '40px' }}
                      />
                      <div className="text-xs text-muted-foreground text-center">{data.month}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-secondary/30 p-6 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Lightbulb" size={20} className="text-primary" />
                Ключевые наблюдения
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• Пик цен пришелся на август 2025 (52 000 ₽)</li>
                <li>• Стабильное снижение с сентября (-5% ежемесячно)</li>
                <li>• Наибольшее падение в декабре (-3.2%)</li>
                <li>• Текущий тренд указывает на продолжение снижения</li>
              </ul>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="Activity" size={32} className="text-primary" />
            Факторы, влияющие на стоимость и спрос
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {factors.map((factor, idx) => (
              <Card
                key={idx}
                className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Icon name={factor.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{factor.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{factor.desc}</p>
                    <Badge variant="secondary" className="text-xs">
                      {factor.impact}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="BarChart3" size={32} className="text-primary" />
            Сравнение с другими производителями памяти
          </h2>
          <Card className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold">Производитель</th>
                    <th className="text-left py-4 px-4 font-semibold">Цена</th>
                    <th className="text-left py-4 px-4 font-semibold">Производительность</th>
                    <th className="text-left py-4 px-4 font-semibold">Доступность</th>
                  </tr>
                </thead>
                <tbody>
                  {manufacturers.map((mfr, idx) => (
                    <tr key={idx} className="border-b last:border-0 hover:bg-muted/30 transition">
                      <td className="py-4 px-4 font-medium">{mfr.name}</td>
                      <td className="py-4 px-4">
                        <span className="font-semibold text-primary">
                          {mfr.price.toLocaleString()} ₽
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${mfr.performance}%` }}
                            />
                          </div>
                          <span className="text-sm">{mfr.performance}/100</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          variant={
                            mfr.availability === 'Высокая'
                              ? 'default'
                              : mfr.availability === 'Средняя'
                                ? 'secondary'
                                : 'outline'
                          }
                        >
                          {mfr.availability}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
              <p className="text-sm">
                <strong>Вывод:</strong> Kingston предлагает лучшее соотношение цена/качество,
                однако Samsung лидирует по производительности и доступности на рынке.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="CalendarClock" size={32} className="text-primary" />
            Прогноз снижения цен и сроки
          </h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/20">
            <div className="space-y-6">
              {forecast.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-background rounded-lg shrink-0 shadow-sm">
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">{item.period}</h3>
                      <Badge
                        variant={
                          item.confidence === 'high'
                            ? 'default'
                            : item.confidence === 'medium'
                              ? 'secondary'
                              : 'outline'
                        }
                      >
                        {item.confidence === 'high'
                          ? 'Высокая вероятность'
                          : item.confidence === 'medium'
                            ? 'Средняя вероятность'
                            : 'Низкая вероятность'}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.prediction}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-8" />

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <Icon name="Target" size={24} className="text-primary" />
                Целевые цены
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Март 2026</p>
                  <p className="text-2xl font-bold text-primary">39 000 ₽</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Июнь 2026</p>
                  <p className="text-2xl font-bold text-primary">36 500 ₽</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-1">Декабрь 2026</p>
                  <p className="text-2xl font-bold text-primary">32 000 ₽</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Icon name="ShoppingCart" size={32} className="text-primary" />
            Рекомендации для покупателей: когда покупать
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-green-500/50 bg-green-50/50">
              <div className="mb-4">
                <Badge className="bg-green-600">Купить сейчас</Badge>
              </div>
              <h3 className="font-semibold text-lg mb-3">Срочная потребность</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Если вам нужна память прямо сейчас для работы или игр — текущие цены уже снизились
                на 15% от пика.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="ThumbsUp" size={16} className="text-green-600" />
                <span className="font-medium">Оправданная покупка</span>
              </div>
            </Card>

            <Card className="p-6 border-primary/50 bg-primary/5">
              <div className="mb-4">
                <Badge>Подождать 2-3 месяца</Badge>
              </div>
              <h3 className="font-semibold text-lg mb-3">Оптимальный момент</h3>
              <p className="text-sm text-muted-foreground mb-4">
                К марту-апрелю 2026 ожидается снижение цен на 8-12%. Лучшее соотношение
                ожидания/экономии.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Star" size={16} className="text-primary" />
                <span className="font-medium">Рекомендуется</span>
              </div>
            </Card>

            <Card className="p-6 border-orange-500/50 bg-orange-50/50">
              <div className="mb-4">
                <Badge className="bg-orange-600">Подождать 6+ месяцев</Badge>
              </div>
              <h3 className="font-semibold text-lg mb-3">Максимальная экономия</h3>
              <p className="text-sm text-muted-foreground mb-4">
                К концу 2026 года цены могут упасть до 32 000 ₽, но есть риск дефицита из-за роста
                спроса.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="AlertCircle" size={16} className="text-orange-600" />
                <span className="font-medium">Рискованно</span>
              </div>
            </Card>
          </div>

          <Card className="mt-8 p-6 bg-primary text-primary-foreground">
            <div className="flex items-start gap-4">
              <Icon name="Lightbulb" size={32} className="shrink-0" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Совет эксперта</h3>
                <p className="text-sm opacity-90">
                  Следите за распродажами крупных ритейлеров в феврале-марте 2026. Исторически, это
                  период максимальных скидок на комплектующие. Установите уведомления на
                  price-tracker'ах для модели Samsung 64GB DDR5 5600MHz.
                </p>
              </div>
            </div>
          </Card>
        </section>



        <footer className="text-center py-8 border-t">
          <p className="text-muted-foreground text-sm">
            Статья подготовлена на основе анализа рынка оперативной памяти по состоянию на январь
            2026 года
          </p>
        </footer>
      </article>
    </div>
  );
};

export default Index;