import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const CASE_IMG_1 = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/9926a78c-3d97-4a41-b06d-d71c983e086b.jpg";
const CASE_IMG_2 = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/fff65d15-29b9-41b5-ae3e-89b8771b6908.jpg";
const CASE_IMG_3 = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/3b716b89-9abd-4b5d-9efa-408aae00587e.jpg";

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "Кейсы", href: "#cases" },
    { label: "Услуги", href: "#services" },
    { label: "Подход", href: "#approach" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Контакты", href: "#contacts" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0a0c0f]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-xl text-white font-semibold tracking-tight">
            ПРОМЕТЕЙ
          </span>
          <span className="text-xs text-[#C9873A] font-mono uppercase tracking-[0.2em] mt-0.5">
            Marketing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#9aa0a6] hover:text-white transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacts"
          className="hidden md:inline-flex items-center gap-2 bg-[#C9873A] text-[#0a0c0f] text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-[#C9873A]/90 transition-all duration-200"
        >
          Получить анализ
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0c0f]/98 border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#9aa0a6] hover:text-white text-sm py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="bg-[#C9873A] text-[#0a0c0f] text-sm font-semibold px-5 py-2.5 rounded-sm text-center mt-2"
          >
            Получить анализ
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0c0f]">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0c0f] via-[#0a0c0f]/90 to-[#1a2030]/40 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9873A] to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-12 bg-[#C9873A]" />
            <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">
              Маркетинг для производства
            </span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl text-white leading-[1.05] mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Производство растёт,<br />
            <span className="text-[#C9873A]">когда за маркетинг</span>
            <br />
            отвечают эксперты
          </h1>

          <p
            className="text-[#9aa0a6] text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Мы строим системы привлечения клиентов для промышленных компаний.
            Средний рост выручки наших клиентов —{" "}
            <span className="text-white font-semibold">+38%</span> за первый год.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#roi"
              className="inline-flex items-center justify-center gap-2 bg-[#C9873A] text-[#0a0c0f] font-semibold px-8 py-4 rounded-sm hover:bg-[#C9873A]/90 transition-all duration-200 text-base"
            >
              Рассчитать потенциал роста
              <Icon name="ArrowRight" size={18} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-4 rounded-sm hover:border-[#C9873A]/60 hover:text-[#C9873A] transition-all duration-200 text-base"
            >
              Смотреть кейсы
            </a>
          </div>

          <div
            className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "87+", label: "Клиентов из производства" },
              { value: "38%", label: "Средний рост выручки" },
              { value: "6 лет", label: "В промышленном сегменте" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-white font-bold">{s.value}</div>
                <div className="text-[#9aa0a6] text-xs md:text-sm mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-white/20">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-white/30 animate-pulse" />
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
      </div>
    </section>
  );
}

// ─── ROI Calculator ──────────────────────────────────────────────────────────
function ROICalculator() {
  const [revenue, setRevenue] = useState(50);
  const [margin, setMargin] = useState(20);
  const [budget, setBudget] = useState(3);

  const extraRevenue = Math.round(revenue * 0.38);
  const extraProfit = Math.round(extraRevenue * (margin / 100));
  const roi = budget > 0 ? Math.round(((extraProfit - budget) / budget) * 100) : 0;

  return (
    <section className="py-24 bg-[#111318]" id="roi">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9873A]" />
              <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">Калькулятор ROI</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Рассчитайте потенциал<br />вашего роста
            </h2>
            <p className="text-[#9aa0a6] text-base leading-relaxed mb-8">
              Укажите параметры вашей компании — покажем, сколько дополнительной прибыли принесёт системный маркетинг на основе наших средних результатов.
            </p>

            <div className="space-y-8">
              {[
                { label: "Текущая выручка", val: revenue, setVal: setRevenue, min: 5, max: 500, step: 5, unit: "млн ₽/год", minL: "5 млн", maxL: "500 млн" },
                { label: "Маржинальность", val: margin, setVal: setMargin, min: 5, max: 60, step: 1, unit: "%", minL: "5%", maxL: "60%" },
                { label: "Маркетинговый бюджет", val: budget, setVal: setBudget, min: 0.5, max: 30, step: 0.5, unit: "млн ₽/год", minL: "0.5 млн", maxL: "30 млн" },
              ].map((sl) => (
                <div key={sl.label}>
                  <div className="flex justify-between mb-3">
                    <span className="text-[#9aa0a6] text-sm">{sl.label}</span>
                    <span className="text-white font-semibold font-mono text-sm">{sl.val} {sl.unit}</span>
                  </div>
                  <input
                    type="range"
                    min={sl.min}
                    max={sl.max}
                    step={sl.step}
                    value={sl.val}
                    onChange={(e) => sl.setVal(Number(e.target.value))}
                    className="w-full h-1 appearance-none bg-white/10 rounded-full outline-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #C9873A ${((sl.val - sl.min) / (sl.max - sl.min)) * 100}%, rgba(255,255,255,0.1) ${((sl.val - sl.min) / (sl.max - sl.min)) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-white/30 font-mono mt-1">
                    <span>{sl.minL}</span>
                    <span>{sl.maxL}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0c0f] border border-white/10 rounded-sm p-8 lg:p-10">
            <div className="text-xs font-mono text-[#C9873A] uppercase tracking-[0.2em] mb-8">Прогноз результатов</div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-white/8">
                <div className="text-[#9aa0a6] text-sm mb-2">Дополнительная выручка</div>
                <div className="font-display text-4xl text-white font-bold">+{extraRevenue.toLocaleString("ru-RU")} млн ₽</div>
                <div className="text-xs text-white/30 font-mono mt-1">на основе среднего роста клиентов +38%</div>
              </div>

              <div className="pb-6 border-b border-white/8">
                <div className="text-[#9aa0a6] text-sm mb-2">Дополнительная прибыль</div>
                <div className="font-display text-4xl text-[#C9873A] font-bold">+{extraProfit.toLocaleString("ru-RU")} млн ₽</div>
                <div className="text-xs text-white/30 font-mono mt-1">при маржинальности {margin}%</div>
              </div>

              <div className="pb-6 border-b border-white/8">
                <div className="text-[#9aa0a6] text-sm mb-2">ROI маркетинга</div>
                <div className={`font-display text-5xl font-bold ${roi > 0 ? "text-emerald-400" : "text-[#9aa0a6]"}`}>
                  {roi > 0 ? `${roi.toLocaleString("ru-RU")}%` : "—"}
                </div>
                <div className="text-xs text-white/30 font-mono mt-1">возврат на вложенный бюджет</div>
              </div>

              <div className="text-xs text-white/30 leading-relaxed">
                * Расчёт основан на медианных показателях 87 клиентов из промышленного сегмента. Фактические результаты зависят от отрасли, рынка и стратегии.
              </div>
            </div>

            <a
              href="#contacts"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-[#C9873A] text-[#0a0c0f] font-semibold py-4 px-6 rounded-sm hover:bg-[#C9873A]/90 transition-all duration-200"
            >
              Получить детальный анализ
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Cases ───────────────────────────────────────────────────────────────────
const cases = [
  {
    img: CASE_IMG_1,
    tag: "Металлургия",
    company: "СтальПром",
    title: "Выстроили поток B2B-клиентов для производителя металлоконструкций",
    results: ["+52% выручки", "×3 входящих заявок", "14 мес. окупаемость"],
    year: "2024",
  },
  {
    img: CASE_IMG_2,
    tag: "Машиностроение",
    company: "ТехноДрайв",
    title: "Запустили контент-стратегию для производителя промышленного оборудования",
    results: ["+31% новых клиентов", "−40% стоимость лида", "8 мес. до результата"],
    year: "2023",
  },
  {
    img: CASE_IMG_3,
    tag: "Химпромышленность",
    company: "ХимТех Групп",
    title: "Перестроили систему продаж на входящий маркетинг",
    results: ["+44% маржинальность", "×2 средний чек", "Выход на 3 рынка"],
    year: "2024",
  },
];

function Cases() {
  return (
    <section className="py-24 bg-[#0a0c0f]" id="cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9873A]" />
              <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">Кейсы</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Результаты, а<br />не обещания
            </h2>
          </div>
          <p className="text-[#9aa0a6] text-base max-w-xs mt-6 md:mt-0 leading-relaxed">
            Работаем только с промышленными компаниями — понимаем специфику длинного цикла сделки и B2B-продаж
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <article
              key={i}
              className="group bg-[#111318] border border-white/8 rounded-sm overflow-hidden hover:border-[#C9873A]/30 transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-[#C9873A] uppercase tracking-wider border border-[#C9873A]/30 px-2 py-0.5 rounded-sm">
                    {c.tag}
                  </span>
                  <span className="text-xs font-mono text-white/30">{c.year}</span>
                </div>
                <div className="text-xs text-white/50 font-mono mb-2">{c.company}</div>
                <h3 className="text-white font-medium leading-snug mb-5 text-sm">
                  {c.title}
                </h3>
                <div className="flex flex-col gap-2">
                  {c.results.map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#C9873A] flex-shrink-0" />
                      <span className="text-white text-sm font-semibold">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  { icon: "Target", title: "Стратегия и позиционирование", desc: "Анализ рынка, конкурентов и целевой аудитории. Разработка уникального позиционирования для промышленной компании.", tags: ["Анализ рынка", "Аудит конкурентов", "УТП"] },
  { icon: "Search", title: "Digital-маркетинг", desc: "SEO, контекстная реклама и таргетинг, настроенные под длинный цикл B2B-сделки в промышленности.", tags: ["SEO", "Яндекс.Директ", "Таргетинг"] },
  { icon: "FileText", title: "Контент-маркетинг", desc: "Экспертный контент для промышленных компаний: технические статьи, кейсы, white papers для привлечения ЛПР.", tags: ["Статьи", "Кейсы", "White Paper"] },
  { icon: "Users", title: "Лидогенерация", desc: "Системы привлечения квалифицированных заявок от промышленных покупателей. Интеграция с CRM и отделом продаж.", tags: ["Воронка продаж", "CRM", "B2B лиды"] },
  { icon: "Globe", title: "Промышленный сайт", desc: "Разработка и оптимизация сайтов под задачи производственных компаний. Фокус на конверсию и доверие.", tags: ["UX/UI", "Конверсия", "Каталог"] },
  { icon: "BarChart2", title: "Аналитика и отчётность", desc: "Прозрачные дашборды и отчёты. Каждое решение обосновано данными, каждый рубль бюджета отслеживается.", tags: ["Дашборды", "Метрики", "ROI"] },
];

function Services() {
  return (
    <section className="py-24 bg-[#111318]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C9873A]" />
          <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">Услуги</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
            Полный спектр<br />маркетинга для<br />производства
          </h2>
          <p className="text-[#9aa0a6] text-base max-w-sm mt-6 md:mt-0 leading-relaxed">
            Работаем как внешний маркетинговый отдел — берём на себя всё от стратегии до ежемесячной отчётности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#111318] p-8 hover:bg-[#0a0c0f] transition-colors duration-300 group"
            >
              <div className="w-10 h-10 border border-white/15 rounded-sm flex items-center justify-center mb-6 group-hover:border-[#C9873A]/50 transition-colors duration-300">
                <Icon name={s.icon} fallback="Circle" size={18} className="text-[#C9873A]" />
              </div>
              <h3 className="text-white font-semibold text-base mb-3">{s.title}</h3>
              <p className="text-[#9aa0a6] text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs text-white/40 font-mono border border-white/10 px-2 py-0.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Approach ────────────────────────────────────────────────────────────────
const steps = [
  { num: "01", title: "Аудит и погружение", desc: "2 недели. Изучаем ваш рынок, конкурентов, текущие каналы и точки роста. Результат — детальный маркетинговый аудит." },
  { num: "02", title: "Стратегия роста", desc: "Формируем приоритеты: какие каналы дадут результат быстрее всего, где точки рычага. Фиксируем метрики успеха." },
  { num: "03", title: "Запуск системы", desc: "Реализуем стратегию итерациями. Первые лиды — в течение 60 дней после старта. Прозрачная отчётность каждые 2 недели." },
  { num: "04", title: "Рост и масштаб", desc: "Масштабируем то, что работает. Отключаем то, что не даёт ROI. Цель — стабильный управляемый поток клиентов." },
];

function Approach() {
  return (
    <section className="py-24 bg-[#0a0c0f]" id="approach">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C9873A]" />
          <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">Методология</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-16 leading-tight">
          Системный подход,<br />проверенный на практике
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-white/15 to-transparent z-0" />
              )}
              <div className="relative z-10">
                <div className="font-display text-5xl text-white/10 font-bold mb-4">{s.num}</div>
                <div className="h-px w-8 bg-[#C9873A] mb-4" />
                <h3 className="text-white font-semibold text-base mb-3">{s.title}</h3>
                <p className="text-[#9aa0a6] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-[#111318] border border-white/8 rounded-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-display text-3xl text-white mb-4">
                Почему промышленным компаниям нужен специализированный маркетинг
              </h3>
              <p className="text-[#9aa0a6] text-sm leading-relaxed">
                Производственный маркетинг отличается от любого другого. Длинные циклы сделок, сложные технические продукты, консервативные ЛПР — это не недостатки, это особенности, которые нужно использовать. Мы знаем, как это делать.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "6–18", u: "месяцев", d: "цикл сделки в B2B-производстве" },
                { v: "3–7", u: "лиц", d: "принимают решение о покупке" },
                { v: "70%", u: "влияние", d: "экспертного контента на решение" },
                { v: "×4", u: "ROI", d: "от специализированного подхода" },
              ].map((item, i) => (
                <div key={i} className="bg-[#0a0c0f] border border-white/8 p-4 rounded-sm">
                  <div className="font-display text-2xl text-[#C9873A] font-bold">{item.v}</div>
                  <div className="text-xs text-white/40 font-mono">{item.u}</div>
                  <div className="text-xs text-[#9aa0a6] mt-1 leading-snug">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Advantages ──────────────────────────────────────────────────────────────
const advantages = [
  { icon: "Factory", title: "Знаем производство изнутри", desc: "В команде — бывшие маркетологи промышленных холдингов. Не нужно объяснять, что такое ГОСТ, тендер или технические регламенты." },
  { icon: "TrendingUp", title: "Результат, а не процесс", desc: "Мы берём KPI по выручке и лидам. Отчитываемся цифрами, а не презентациями активности." },
  { icon: "Shield", title: "Прозрачные договоры", desc: "Фиксированный ежемесячный ретейнер без скрытых платежей. Права на все материалы передаются вам." },
  { icon: "Zap", title: "Быстрый старт", desc: "Первые результаты через 30–60 дней. Мы не тратим месяцы на «подготовительную работу» без видимого эффекта." },
  { icon: "Users", title: "Выделенная команда", desc: "Персональный менеджер, стратег и аналитик на вашем проекте. Не колл-центр, а настоящее партнёрство." },
  { icon: "Lock", title: "Конкуренты не работают с нами", desc: "На каждом рынке и в каждом регионе — один клиент. Ваши конкуренты не получат доступ к нашим наработкам." },
];

function Advantages() {
  return (
    <section className="py-24 bg-[#111318]" id="advantages">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C9873A]" />
          <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">Преимущества</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4 leading-tight">
          Почему нас выбирают<br />производственные компании
        </h2>
        <p className="text-[#9aa0a6] text-base max-w-lg mb-16 leading-relaxed">
          Не универсальное агентство, которое работает со всеми. Узкая специализация на промышленном сегменте.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a, i) => (
            <div key={i} className="group flex items-start gap-4">
              <div className="w-10 h-10 border border-white/15 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:border-[#C9873A]/50 transition-colors duration-300 mt-0.5">
                <Icon name={a.icon} fallback="Circle" size={18} className="text-[#C9873A]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-base mb-2">{a.title}</h3>
                <p className="text-[#9aa0a6] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contacts ────────────────────────────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-24 bg-[#0a0c0f]" id="contacts">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9873A]" />
              <span className="text-[#C9873A] text-xs font-mono uppercase tracking-[0.25em]">Контакты</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              Начнём с<br />бесплатного аудита
            </h2>
            <p className="text-[#9aa0a6] text-base leading-relaxed mb-10">
              Расскажем, где у вашей компании скрыт потенциал роста. Аудит занимает 45 минут и ни к чему не обязывает.
            </p>

            <div className="space-y-5">
              {[
                { icon: "Phone", label: "+7 (495) 000-00-00" },
                { icon: "Mail", label: "info@prometei-marketing.ru" },
                { icon: "MapPin", label: "Москва, Садовническая ул., 9" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} fallback="Circle" size={16} className="text-[#C9873A]" />
                  </div>
                  <span className="text-[#9aa0a6] text-sm">{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#111318] border border-white/8 rounded-sm p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-14 h-14 border border-[#C9873A]/40 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Check" size={24} className="text-[#C9873A]" />
                </div>
                <h3 className="font-display text-2xl text-white mb-3">Заявка отправлена</h3>
                <p className="text-[#9aa0a6] text-sm max-w-xs leading-relaxed">
                  Свяжемся с вами в течение рабочего дня и согласуем время для аудита
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: "name", label: "Ваше имя", ph: "Иван Петров", type: "text", key: "name" },
                  { id: "company", label: "Компания", ph: "ООО Металлопром", type: "text", key: "company" },
                  { id: "phone", label: "Телефон", ph: "+7 (___) ___-__-__", type: "tel", key: "phone" },
                ].map((f) => (
                  <div key={f.id}>
                    <label className="text-xs font-mono text-white/40 uppercase tracking-wider block mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      className="w-full bg-[#0a0c0f] border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9873A]/60 placeholder-white/20 transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-mono text-white/40 uppercase tracking-wider block mb-2">Коротко о задаче</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Хотим увеличить поток входящих заявок..."
                    className="w-full bg-[#0a0c0f] border border-white/10 text-white text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-[#C9873A]/60 placeholder-white/20 transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#C9873A] text-[#0a0c0f] font-semibold py-4 px-6 rounded-sm hover:bg-[#C9873A]/90 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Записаться на аудит
                  <Icon name="ArrowRight" size={16} />
                </button>
                <p className="text-xs text-white/25 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#111318] border-t border-white/8 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-white font-semibold">ПРОМЕТЕЙ</span>
            <span className="text-xs text-[#C9873A] font-mono uppercase tracking-[0.2em]">Marketing</span>
          </div>
          <div className="flex gap-8">
            {[
              { label: "Кейсы", href: "#cases" },
              { label: "Услуги", href: "#services" },
              { label: "Подход", href: "#approach" },
              { label: "Контакты", href: "#contacts" },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="text-xs text-white/20 font-mono">
            © 2024 Прометей. Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div>
      <Nav />
      <Hero />
      <ROICalculator />
      <Cases />
      <Services />
      <Approach />
      <Advantages />
      <Contacts />
      <Footer />
    </div>
  );
}