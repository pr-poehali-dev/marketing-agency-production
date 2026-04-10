import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

// Бренд-цвета Tolka Digital
// --violet: #bda8ff  --orange: #e98c6c  --white: #fff  --text: #2d2d2d  --muted: #595959

const LOGO_URL = "https://static.tildacdn.com/tild3438-3365-4132-b234-653866626665/TOLKLOGO-02_1_1.svg";

const CASE_IMG_1 = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/9926a78c-3d97-4a41-b06d-d71c983e086b.jpg";
const CASE_IMG_2 = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/fff65d15-29b9-41b5-ae3e-89b8771b6908.jpg";
const CASE_IMG_3 = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/3b716b89-9abd-4b5d-9efa-408aae00587e.jpg";

const AGENCY_IMG = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/f1e5e4af-4e0e-4631-8eb6-a9283dfc54df.jpg";
const KSENIA_PHOTO = "https://cdn.poehali.dev/projects/d4908139-bdaf-4b34-93c6-1aa8a667fe55/files/9b9932a3-47e0-4af9-a7ca-e093b25e1d64.jpg";
const TG_POST_IMG = "https://cdn.poehali.dev/files/de6b2b24-bfff-4b7d-8dd8-5020dfd781b8.jpg";
const MARIA_PHOTO = "https://cdn.poehali.dev/files/54d4b1dc-d5fa-4313-8a41-628bcb3fe25f.jpg";
const HERO_ILLUSTRATION = "https://cdn.poehali.dev/files/891d21d8-01ec-493f-a07e-4cbef96c6e90.png";
const WHY_US_ILLUSTRATION = "https://cdn.poehali.dev/files/36a19d41-5a58-4a89-96d0-97ea9e83e23d.png";
const AUDIT_ILLUSTRATION = "https://cdn.poehali.dev/files/6f2a6e1c-2fa7-4348-9a55-689c7052567f.png";
const EXCEL_PREVIEW = "https://optim.tildacdn.com/tild3238-3238-4632-b035-303632316163/-/resize/466x/-/format/webp/729shots_so.png.webp";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#bda8ff]/20"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={LOGO_URL} alt="Tolka Digital" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#595959] hover:text-[#bda8ff] transition-colors duration-200 tracking-wide font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79809009409" className="flex items-center gap-1.5 text-sm text-[#595959] hover:text-[#bda8ff] transition-colors font-medium">
            <Icon name="Phone" size={14} className="text-[#bda8ff]" />
            +7 980 900-94-09
          </a>
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 bg-[#e98c6c] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e98c6c]/90 transition-all duration-200 shadow-sm"
          >
            Получить КП
          </a>
        </div>

        <button className="md:hidden text-[#2d2d2d]" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#bda8ff]/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#595959] hover:text-[#bda8ff] text-sm py-1 font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="bg-[#e98c6c] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
          >
            Получить КП
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Декоративные круги */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-[#bda8ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#e98c6c]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Иллюстрация справа */}
      <div className="absolute right-0 top-0 bottom-0 w-[48%] hidden xl:flex items-center justify-end pointer-events-none pr-4">
        <img
          src={HERO_ILLUSTRATION}
          alt="TolkaDigital — маркетинг для производства"
          className="w-full h-full object-contain object-right"
          style={{ maxHeight: "90vh" }}
        />
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <div className="h-px w-10 bg-[#bda8ff]" />
            <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">
              Маркетинг для производства
            </span>
          </div>

          <h1
            className="font-display text-5xl md:text-7xl text-[#2d2d2d] leading-[1.05] mb-6 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Производство растёт,<br />
            <span className="text-[#bda8ff]">когда за маркетинг</span>
            <br />
            отвечают эксперты
          </h1>

          <p
            className="text-[#595959] text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Строим системы привлечения клиентов для промышленных компаний.
            Окупаемость маркетинга клиентов достигает{" "}
            <span className="text-[#e98c6c] font-semibold">2128%</span>.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            {[
              { icon: "Clock", text: "Клиенты с нами работают годами — максимальный срок 9 лет" },
              { icon: "Users", text: "Средний срок сотрудничества 4,5 года" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#bda8ff]/15 flex items-center justify-center flex-shrink-0">
                  <Icon name={b.icon} size={14} className="text-[#bda8ff]" fallback="Circle" />
                </div>
                <span className="text-[#595959] text-sm leading-snug">{b.text}</span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#roi"
              className="inline-flex items-center justify-center gap-2 bg-[#e98c6c] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#e98c6c]/90 transition-all duration-200 text-base shadow-md shadow-[#e98c6c]/20"
            >
              Рассчитать потенциал роста
              <Icon name="ArrowRight" size={18} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#bda8ff] text-[#bda8ff] font-semibold px-8 py-4 rounded-full hover:bg-[#bda8ff]/8 transition-all duration-200 text-base"
            >
              Смотреть кейсы
            </a>
          </div>

          {/* Шаблоны */}
          <div
            className="mb-10 animate-fade-in"
            style={{ animationDelay: "0.38s" }}
          >
            <div className="flex items-stretch gap-4 bg-white border-2 border-[#bda8ff]/40 rounded-2xl overflow-hidden shadow-md shadow-[#bda8ff]/10 max-w-xl">
              {/* Excel preview */}
              <div className="w-28 flex-shrink-0 bg-[#f9f7ff] overflow-hidden">
                <img
                  src={EXCEL_PREVIEW}
                  alt="Шаблон Excel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 py-4 pr-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-[#bda8ff]/20 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name="FileSpreadsheet" size={13} className="text-[#bda8ff]" fallback="File" />
                  </div>
                  <div className="text-xs text-[#bda8ff] font-mono uppercase tracking-wider font-bold">Бесплатные шаблоны Excel</div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="#contacts"
                    className="inline-flex items-center gap-2 bg-[#e98c6c] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#e98c6c]/90 transition-colors w-fit shadow-sm"
                  >
                    <Icon name="Download" size={12} />
                    Шаблон расчёта окупаемости
                  </a>
                  <a
                    href="#contacts"
                    className="inline-flex items-center gap-2 bg-[#bda8ff] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#bda8ff]/90 transition-colors w-fit shadow-sm"
                  >
                    <Icon name="Download" size={12} />
                    Шаблон отчёта по рекламе
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-3 gap-8 pt-8 border-t border-[#bda8ff]/20 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "20+", label: "Клиентов из производства" },
              { value: "2128%", label: "Максимальная окупаемость" },
              { value: "10+ лет", label: "В промышленном маркетинге" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-4xl text-[#2d2d2d] font-bold">{s.value}</div>
                <div className="text-[#595959] text-xs md:text-sm mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ROMI Calculator ──────────────────────────────────────────────────────────
function ROICalculator() {
  const [revenue, setRevenue] = useState(50);
  const [margin, setMargin] = useState(20);
  const [budget, setBudget] = useState(3);

  const extraRevenue = Math.round(revenue * 0.38);
  const extraProfit = Math.round(extraRevenue * (margin / 100));
  const roi = budget > 0 ? Math.round(((extraProfit - budget) / budget) * 100) : 0;

  return (
    <section className="py-24 bg-[#f9f7ff]" id="roi">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#bda8ff]" />
              <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Калькулятор ROMI</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#2d2d2d] mb-6 leading-tight">
              Рассчитайте потенциал<br />вашего роста
            </h2>
            <p className="text-[#595959] text-base leading-relaxed mb-8">
              Укажите параметры вашей компании, и мы покажем, сколько дополнительной прибыли принесёт системный маркетинг.
            </p>

            <div className="space-y-8">
              {[
                { label: "Текущая выручка", val: revenue, setVal: setRevenue, min: 5, max: 500, step: 5, unit: "млн ₽/год", minL: "5 млн", maxL: "500 млн" },
                { label: "Маржинальность", val: margin, setVal: setMargin, min: 5, max: 60, step: 1, unit: "%", minL: "5%", maxL: "60%" },
                { label: "Маркетинговый бюджет", val: budget, setVal: setBudget, min: 0.5, max: 30, step: 0.5, unit: "млн ₽/год", minL: "0.5 млн", maxL: "30 млн" },
              ].map((sl) => (
                <div key={sl.label}>
                  <div className="flex justify-between mb-3">
                    <span className="text-[#595959] text-sm font-medium">{sl.label}</span>
                    <span className="text-[#2d2d2d] font-bold font-mono text-sm">{sl.val} {sl.unit}</span>
                  </div>
                  <input
                    type="range"
                    min={sl.min}
                    max={sl.max}
                    step={sl.step}
                    value={sl.val}
                    onChange={(e) => sl.setVal(Number(e.target.value))}
                    className="w-full h-1.5 appearance-none rounded-full outline-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #bda8ff ${((sl.val - sl.min) / (sl.max - sl.min)) * 100}%, #e5e0ff ${((sl.val - sl.min) / (sl.max - sl.min)) * 100}%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-[#595959]/60 font-mono mt-1">
                    <span>{sl.minL}</span>
                    <span>{sl.maxL}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#bda8ff]/20 rounded-2xl p-8 lg:p-10 shadow-xl shadow-[#bda8ff]/10">
            <div className="text-xs font-mono text-[#bda8ff] uppercase tracking-[0.2em] font-semibold mb-8">Прогноз результатов</div>

            <div className="space-y-6">
              <div className="pb-6 border-b border-[#bda8ff]/15">
                <div className="text-[#595959] text-sm mb-2">Дополнительная выручка</div>
                <div className="font-display text-4xl text-[#2d2d2d] font-bold">+{extraRevenue.toLocaleString("ru-RU")} млн ₽</div>
                <div className="text-xs text-[#595959]/60 font-mono mt-1">на основе среднего роста клиентов +38%</div>
              </div>

              <div className="pb-6 border-b border-[#bda8ff]/15">
                <div className="text-[#595959] text-sm mb-2">Дополнительная прибыль</div>
                <div className="font-display text-4xl text-[#e98c6c] font-bold">+{extraProfit.toLocaleString("ru-RU")} млн ₽</div>
                <div className="text-xs text-[#595959]/60 font-mono mt-1">при маржинальности {margin}%</div>
              </div>

              <div className="pb-6 border-b border-[#bda8ff]/15">
                <div className="text-[#595959] text-sm mb-2">ROMI маркетинга</div>
                <div className={`font-display text-5xl font-bold ${roi > 0 ? "text-[#bda8ff]" : "text-[#595959]"}`}>
                  {roi > 0 ? `${roi.toLocaleString("ru-RU")}%` : "—"}
                </div>
                <div className="text-xs text-[#595959]/60 font-mono mt-1">возврат на маркетинговые инвестиции</div>
              </div>

              <div className="text-xs text-[#595959]/50 leading-relaxed">
                * Расчёт основан на медианных показателях 87 клиентов из промышленного сегмента.
              </div>
            </div>

            <a
              href="#contacts"
              className="mt-8 w-full flex items-center justify-center gap-2 bg-[#e98c6c] text-white font-semibold py-4 px-6 rounded-full hover:bg-[#e98c6c]/90 transition-all duration-200 shadow-md shadow-[#e98c6c]/20"
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
    tag: "Чистые помещения",
    company: "GML-Panel",
    title: "Рост заявок в 7 раз при снижении стоимости лида в 8,3 раза для производителя cleanroom-панелей",
    results: ["Заявок: ×7", "Стоимость лида: −8,3×", "Стабильный B2B-поток"],
    url: "https://tolkadigital.ru/gml-panel",
  },
  {
    img: CASE_IMG_2,
    tag: "Полиграфия",
    company: "ZetaPrint",
    title: "Запуск онлайн-продаж с нуля: от пустого сайта до 20,9 млн ₽ выручки в месяц",
    results: ["Выручка онлайн: 0 → 20,9 млн ₽/мес", "Стоимость заявки: −63%", "Лид: 4 000 ₽ → 1 470 ₽"],
    url: "https://tolkadigital.ru/projects/zetaprint",
  },
  {
    img: CASE_IMG_3,
    tag: "Медицина",
    company: "Динамика",
    title: "ROMI 2128% для производителя протезов: 89 заявок в месяц при ДРР 4,49%",
    results: ["ROMI: 2 128%", "ДРР: 4,49%", "89 заявок / месяц"],
    url: "https://tolkadigital.ru/dynamics",
  },
  {
    img: CASE_IMG_1,
    tag: "Резинотехника",
    company: "РТИ «Борекс»",
    title: "Лидов в 3 раза больше при вдвое меньшей стоимости для производителя резинотехнических изделий",
    results: ["Лидов: ×3", "Стоимость лида: ×2 дешевле", "B2B-ниша производства"],
    url: "https://tolkadigital.ru/borex",
  },
  {
    img: CASE_IMG_2,
    tag: "Полиграфия",
    company: "ZetaPrint — новый продукт",
    title: "Запуск нового продукта с нуля: 150 заявок в месяц по 1 200 ₽",
    results: ["150 заявок / месяц", "Стоимость лида: 1 200 ₽", "ROI: 456%"],
    url: "https://tolkadigital.ru/productzetaprint",
  },
  {
    img: CASE_IMG_3,
    tag: "Спецтехника",
    company: "Тайфун",
    title: "4-й год работы: снизили стоимость заявки с 14 181 ₽ до 4 054 ₽ для производителя вездеходов",
    results: ["Заявок в 2024: 105", "Лид: 14 181 ₽ → 4 054 ₽", "Сотрудничество 4 года"],
    url: "https://tolkadigital.ru/taifun",
  },
];

function Cases() {
  return (
    <section className="py-24 bg-white" id="cases">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#bda8ff]" />
              <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Кейсы</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#2d2d2d] leading-tight">
              Результаты, а не обещания
            </h2>
          </div>
          <p className="text-[#595959] text-base max-w-xs mt-6 md:mt-0 leading-relaxed">
            Работаем только с промышленными компаниями — знаем специфику B2B и длинных циклов сделки
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <article
              key={i}
              className="group bg-white border border-[#bda8ff]/15 rounded-2xl overflow-hidden hover:border-[#bda8ff]/50 hover:shadow-xl hover:shadow-[#bda8ff]/10 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.company}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-xs font-mono text-[#bda8ff] font-semibold uppercase tracking-wider bg-[#bda8ff]/10 px-2.5 py-1 rounded-full">
                    {c.tag}
                  </span>
                </div>
                <div className="text-xs text-[#595959]/60 font-medium mb-2">{c.company}</div>
                <h3 className="text-[#2d2d2d] font-medium leading-snug mb-5 text-sm flex-1">
                  {c.title}
                </h3>
                <div className="flex flex-col gap-2 mb-5">
                  {c.results.map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e98c6c] flex-shrink-0" />
                      <span className="text-[#2d2d2d] text-sm font-semibold">{r}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#bda8ff] hover:text-[#a68fed] transition-colors duration-200 mt-auto"
                >
                  Читать кейс
                  <Icon name="ExternalLink" size={12} />
                </a>
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
  { icon: "Target", title: "Стратегия и позиционирование", desc: "Анализ рынка, конкурентов и аудитории. Уникальное позиционирование для промышленной компании.", tags: ["Анализ рынка", "Портрет ЦА", "УТП", "Конкурентный анализ"] },
  { icon: "Search", title: "Digital-маркетинг", desc: "SEO, Яндекс.Директ и таргетинг, настроенные под длинный цикл B2B-сделки в промышленности.", tags: ["SEO", "Яндекс.Директ", "Таргетинг ВКонтакте", "B2B-реклама"] },
  { icon: "FileText", title: "Контент-маркетинг", desc: "Экспертный контент для ЛПР: технические статьи, производственные кейсы, видеообзоры продукции и отраслевые обзоры.", tags: ["Технические статьи", "Кейсы клиентов", "Видео о продукте", "Экспертный блог"] },
  { icon: "Users", title: "Лидогенерация", desc: "Системы привлечения квалифицированных заявок от промышленных покупателей и интеграция с CRM.", tags: ["Квалификация лидов", "Воронка продаж", "CRM-интеграция", "B2B-лиды"] },
  { icon: "Globe", title: "Продающий сайт", desc: "Разработка сайтов под задачи производственных компаний. Фокус на доверие, конверсию и простоту контакта.", tags: ["Конверсионный дизайн", "Каталог продукции", "Формы захвата", "Мобильная версия"] },
  { icon: "BarChart2", title: "Аналитика и отчётность", desc: "Прозрачные дашборды. Каждое решение обосновано данными, каждый рубль бюджета под контролем.", tags: ["Сквозная аналитика", "ROMI по каналам", "Дашборды", "KPI-отчёты"] },
];

function Services() {
  return (
    <section className="py-24 bg-[#f9f7ff]" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#bda8ff]" />
          <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Услуги</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[#2d2d2d] leading-tight">
            Полный спектр<br />маркетинга для<br />производства
          </h2>
          <p className="text-[#595959] text-base max-w-sm mt-6 md:mt-0 leading-relaxed">
            Работаем как внешний маркетинговый отдел — от стратегии до ежемесячной отчётности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-[#bda8ff]/15 rounded-2xl p-8 hover:border-[#bda8ff]/40 hover:shadow-lg hover:shadow-[#bda8ff]/8 transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-[#bda8ff]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#bda8ff]/20 transition-colors duration-300">
                <Icon name={s.icon} fallback="Circle" size={20} className="text-[#bda8ff]" />
              </div>
              <h3 className="text-[#2d2d2d] font-semibold text-base mb-3">{s.title}</h3>
              <p className="text-[#595959] text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-xs text-[#bda8ff] font-mono bg-[#bda8ff]/10 px-2.5 py-1 rounded-full">
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
  { num: "01", title: "Аудит и погружение", desc: "2 недели. Изучаем рынок, конкурентов, текущие каналы и точки роста. Результат — детальный маркетинговый аудит с конкретными рекомендациями." },
  { num: "02", title: "Стратегия роста", desc: "Формируем приоритеты: какие каналы дадут результат быстрее всего, где точки рычага. Фиксируем метрики успеха и план на 6 месяцев." },
  { num: "03", title: "Продающий сайт", desc: "Создаём или дорабатываем сайт, который вызывает доверие у промышленных покупателей: технические характеристики, кейсы, логика убеждения ЛПР." },
  { num: "04", title: "Сквозная аналитика и CRM", desc: "Внедряем сквозную аналитику: отслеживаем лиды, квалифицированные лиды, КП, КЭВы, продажи, выручку и окупаемость. Помогаем настроить CRM." },
  { num: "05", title: "Настройка и оптимизация рекламы", desc: "Запускаем рекламные каналы, тестируем гипотезы и планомерно снижаем стоимость лида. Первые заявки — в течение 30–60 дней после старта." },
  { num: "06", title: "Масштабирование результатов", desc: "Масштабируем то, что работает, до нужных вам объёмов. Цель — загрузить отдел продаж и производство стабильным потоком целевых клиентов." },
];

function Approach() {
  return (
    <section className="py-24 bg-white" id="approach">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#bda8ff]" />
          <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Методология</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl text-[#2d2d2d] mb-16 leading-tight">
          Системный подход,<br />проверенный на практике
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative bg-[#f9f7ff] border border-[#bda8ff]/20 rounded-2xl p-7 hover:border-[#bda8ff]/50 hover:shadow-lg hover:shadow-[#bda8ff]/10 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#bda8ff] flex items-center justify-center">
                  <span className="text-white text-sm font-bold font-mono">{s.num}</span>
                </div>
                <div className="h-px flex-1 mx-4 bg-[#e98c6c]/30 group-hover:bg-[#e98c6c]/60 transition-colors" />
              </div>
              <h3 className="text-[#2d2d2d] font-bold text-base mb-3">{s.title}</h3>
              <p className="text-[#595959] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-[#2d2d2d] to-[#1e1e1e] rounded-2xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#bda8ff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-[#e98c6c]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#bda8ff]/20 text-[#bda8ff] text-xs font-mono uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full mb-6">
                Почему это важно
              </div>
              <h3 className="font-display text-3xl text-white mb-5 leading-tight">
                Промышленный маркетинг требует особого подхода и компетенций
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Универсальное агентство не знает, что такое ГОСТы, тендеры и решения через технический совет.
              </p>
              <div className="space-y-3">
                {[
                  "Знаем как продавать вашей аудитории",
                  "Умеем продвигать сложные продукты через экспертный контент",
                  "Выстраиваем воронки под длинные циклы сделок 6–18 месяцев",
                  "Не тратим бюджет на «широкий охват» — бьём точно в целевую аудиторию",
                  "Работаем как внутренний маркетинговый отдел, а не подрядчик",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e98c6c]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={11} className="text-[#e98c6c]" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v: "6–18", u: "месяцев", d: "средний цикл B2B-сделки в промышленности" },
                { v: "3–7", u: "лиц", d: "принимают решение о закупке" },
                { v: "70%", u: "ЛПР", d: "изучают контент перед выбором поставщика" },
                { v: "×4", u: "ROI", d: "от специализированного подхода vs универсального" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl hover:bg-white/8 transition-colors">
                  <div className="font-display text-2xl text-[#bda8ff] font-bold">{item.v}</div>
                  <div className="text-xs text-white/40 font-mono mt-0.5">{item.u}</div>
                  <div className="text-xs text-white/60 mt-2 leading-snug">{item.d}</div>
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
  { icon: "Factory", title: "Знаем производство изнутри", desc: "В команде — бывшие маркетологи промышленных холдингов. Понимаем тендеры, ГОСТы и технические регламенты." },
  { icon: "TrendingUp", title: "Результат, а не процесс", desc: "Берём KPI по выручке и лидам. Отчитываемся цифрами, а не презентациями активности." },
  { icon: "Shield", title: "Прозрачные договоры", desc: "Фиксированный ретейнер без скрытых платежей. Права на все материалы передаются вам." },
  { icon: "Zap", title: "Быстрый старт", desc: "Первые результаты через 30–60 дней. Без месяцев «подготовительной работы» без видимого эффекта." },
  { icon: "Users", title: "Выделенная команда", desc: "Персональный менеджер, стратег и аналитик на вашем проекте. Не колл-центр, а партнёрство." },
  { icon: "Lightbulb", title: "Знаем сотни рабочих связок", desc: "За 10+ лет в промышленном маркетинге накопили базу проверенных инструментов. Подбираем связки конкретно под ваш объём, бюджет и отрасль — чтобы дать результат быстро." },
];

function Advantages() {
  return (
    <section className="py-24 bg-[#f9f7ff]" id="advantages">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#bda8ff]" />
          <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Преимущества</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 mb-16">
          <div className="flex-1">
            <h2 className="font-display text-4xl md:text-5xl text-[#2d2d2d] mb-4 leading-tight">
              Почему нас выбирают<br />производственные компании
            </h2>
            <p className="text-[#595959] text-base max-w-lg leading-relaxed">
              Узкая специализация на промышленном сегменте, а не универсальное агентство для всех.
            </p>
          </div>
          <div className="flex-shrink-0 lg:w-64 xl:w-80 mt-8 lg:mt-0">
            <img
              src={WHY_US_ILLUSTRATION}
              alt="Кто гарантирует результат"
              className="w-full object-contain"
              style={{ maxHeight: "320px" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((a, i) => (
            <div key={i} className="group flex items-start gap-4">
              <div className="w-11 h-11 bg-[#bda8ff]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#bda8ff]/20 transition-colors duration-300 mt-0.5">
                <Icon name={a.icon} fallback="Circle" size={20} className="text-[#bda8ff]" />
              </div>
              <div>
                <h3 className="text-[#2d2d2d] font-semibold text-base mb-2">{a.title}</h3>
                <p className="text-[#595959] text-sm leading-relaxed">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Video Interviews ────────────────────────────────────────────────────────
const videos = [
  {
    embed: "https://vkvideo.ru/video_ext.php?oid=-102569128&id=456239198&hash=&hd=2",
    company: "ZetaPrint",
    tag: "Типография",
    story: "ZetaPrint пришли с нуля: без сайта, без онлайн-продаж. TolkaDigital разработал сайт и запустил контекстную рекламу. За период сотрудничества онлайн-выручка выросла до 20,9 млн рублей в месяц. Стоимость заявки снизилась с 4 000 до 1 470 рублей.",
    metrics: ["0 → 20,9 млн ₽/мес", "Лид: 1 470 ₽"],
  },
  {
    embed: "https://vkvideo.ru/video_ext.php?oid=-102569128&id=456239251&hash=&hd=2",
    company: "АртСувениры",
    tag: "Производство сувениров",
    story: "АртСувениры обратились с хаотичным маркетингом без системы и аналитики. TolkaDigital выстроил управляемую воронку с прозрачными контрольными точками. Стоимость лида снизилась в несколько раз, появилась чёткая управляемость каналов.",
    metrics: ["CPL снижен в несколько раз", "Системный маркетинг"],
  },
  {
    embed: "https://vkvideo.ru/video_ext.php?oid=-102569128&id=456239187&hash=&hd=2",
    company: "СтройСад",
    tag: "B2B производство",
    story: "СтройСад — компания с B2B-направлением в производственной нише. TolkaDigital выстроил систему привлечения корпоративных клиентов: сайт, контент и рекламные кампании. Результат — стабильный поток целевых заявок.",
    metrics: ["Системный B2B-маркетинг", "Стабильный поток заявок"],
    projectUrl: "https://tolkadigital.ru/projects/landshaftagrar",
  },
  {
    embed: "https://vkvideo.ru/video_ext.php?oid=-102569128&id=456239250&list=ln-bqKYzRGzsLDKZNnFtR&hash=&hd=2",
    company: "Динамика",
    tag: "Протезирование",
    story: "Медицинский центр протезирования конечностей получил новый сайт и рекламные кампании. TolkaDigital точно проработал целевую аудиторию в узкой нише. ROMI достиг 2128%, доля рекламных расходов составила всего 4,49%.",
    metrics: ["ROMI: 2 128%", "89 заявок в месяц"],
  },
];

function VideoReviews() {
  const [active, setActive] = useState(0);
  const v = videos[active];

  return (
    <section className="py-24 bg-white" id="video-reviews">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#bda8ff]" />
          <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Видео-интервью</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl text-[#2d2d2d] font-bold leading-tight">
            Клиенты рассказывают<br />о результатах
          </h2>
          <p className="text-[#595959] text-base max-w-xs mt-4 md:mt-0 leading-relaxed">
            Реальные владельцы компаний о сотрудничестве с TolkaDigital
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main video + story */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="aspect-video rounded-2xl overflow-hidden bg-[#f9f7ff] border border-[#bda8ff]/15">
              <iframe
                src={v.embed}
                className="w-full h-full"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                frameBorder="0"
                allowFullScreen
              />
            </div>
            {/* Story card */}
            <div className="bg-[#f9f7ff] border border-[#bda8ff]/15 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-[#bda8ff] bg-[#bda8ff]/10 px-2.5 py-1 rounded-full">{v.tag}</span>
                <span className="text-sm font-bold text-[#2d2d2d]">{v.company}</span>
              </div>
              <p className="text-[#595959] text-sm leading-relaxed mb-4">{v.story}</p>
              <div className="flex gap-2 flex-wrap items-center">
                {v.metrics.map((m) => (
                  <span key={m} className="text-xs font-bold text-white bg-[#e98c6c] px-3 py-1 rounded-full">{m}</span>
                ))}
                {v.projectUrl && (
                  <a href={v.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#bda8ff] font-semibold hover:underline ml-1">
                    История проекта
                    <Icon name="ExternalLink" size={11} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Playlist */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="text-xs text-[#595959]/50 font-semibold uppercase tracking-wider mb-1">Все интервью</div>
            {videos.map((vid, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 ${
                  active === i
                    ? "border-[#bda8ff] bg-[#f9f7ff] shadow-md shadow-[#bda8ff]/10"
                    : "border-[#bda8ff]/15 bg-white hover:border-[#bda8ff]/40"
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  active === i ? "bg-[#bda8ff]" : "bg-[#bda8ff]/10"
                }`}>
                  <Icon name="Play" size={16} className={active === i ? "text-white" : "text-[#bda8ff]"} />
                </div>
                <div className="min-w-0">
                  <div className={`text-sm font-semibold truncate ${active === i ? "text-[#2d2d2d]" : "text-[#595959]"}`}>
                    {vid.company}
                  </div>
                  <div className="text-xs text-[#595959]/50 mt-0.5">{vid.tag}</div>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {vid.metrics.map((m) => (
                      <span key={m} className="text-xs text-[#bda8ff] bg-[#bda8ff]/8 px-1.5 py-0.5 rounded">{m}</span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Text Reviews ────────────────────────────────────────────────────────────
const textReviews = [
  {
    company: "ZetaPrint",
    photo: MARIA_PHOTO,
    author: "Мария",
    role: "Руководитель ZetaPrint",
    text: "С TolkaDigital сотрудничаем уже несколько лет. За это время выручка онлайн-направления выросла с нуля до 20,9 млн рублей в месяц. Команда глубоко погружается в задачу, предлагает нестандартные решения и всегда держит нас в курсе результатов. Стоимость заявки снизилась в 2,7 раза: с 4 000 до 1 470 рублей.",
    results: ["Выручка: 0 → 20,9 млн ₽/мес", "Лид: 4 000 → 1 470 ₽"],
    stars: 5,
    projectUrl: null,
  },
  {
    company: "Завод РТИ «Борекс»",
    photo: KSENIA_PHOTO,
    author: "Ксения",
    role: "Коммерческий директор, Завод РТИ «Борекс»",
    text: "Обратились к TolkaDigital с задачей увеличить поток лидов в производственной нише. Результат превзошёл ожидания: количество заявок выросло в 3 раза, при этом стоимость привлечения каждого лида снизилась вдвое. Особенно ценим то, что команда разбирается в специфике производственного B2B. Работаем в удовольствие, цифры говорят сами за себя.",
    results: ["Лидов: ×3", "Стоимость лида: вдвое дешевле"],
    stars: 5,
    projectUrl: null,
  },
  {
    company: "ХимСервис",
    photo: null,
    author: "Усман",
    role: "Владелец компании ХимСервис",
    text: "Обратились с задачей выстроить поток клиентов в нише поставок кислот и щелочей для промышленности. TolkaDigital разработал позиционирование, создал сайт и запустил рекламу. Стоимость заявки снизилась в 4,4 раза. Получили стабильный поток квалифицированных заявок от профильных предприятий.",
    results: ["×3 лидов", "Заявка была: 7 895 ₽", "Стала: 1 778 ₽"],
    stars: 5,
    projectUrl: "https://vk.com/@tolka_digitalmarketing-himiya-biznesa-kak-my-upakovali-postavschika-kislot-i-schelo",
    tgUrl: "https://t.me/tolkadigital/132",
  },
];

function TextReviews() {
  return (
    <section className="py-24 bg-[#f9f7ff]" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#bda8ff]" />
          <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Отзывы клиентов</span>
        </div>
        <h2 className="text-4xl md:text-5xl text-[#2d2d2d] font-bold leading-tight mb-12">
          Что говорят<br />наши клиенты
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textReviews.map((r, i) => (
            <div key={i} className="bg-white border border-[#bda8ff]/15 rounded-2xl p-8 hover:shadow-lg hover:shadow-[#bda8ff]/8 transition-all duration-300 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: r.stars }).map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-[#e98c6c]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-[#595959] text-sm leading-relaxed mb-6 italic flex-1">«{r.text}»</p>

              {/* Results */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {r.results.map((res) => (
                  <span key={res} className="text-xs font-semibold text-[#bda8ff] bg-[#bda8ff]/10 px-3 py-1 rounded-full">
                    {res}
                  </span>
                ))}
              </div>

              {/* Project links */}
              {(r.projectUrl || r.tgUrl) && (
                <div className="flex gap-3 mb-4 flex-wrap">
                  {r.projectUrl && (
                    <a href={r.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#bda8ff] font-semibold hover:underline">
                      История проекта <Icon name="ExternalLink" size={11} />
                    </a>
                  )}
                  {r.tgUrl && (
                    <a href={r.tgUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#595959]/60 font-semibold hover:text-[#bda8ff] transition-colors">
                      Результаты в TG <Icon name="ExternalLink" size={11} />
                    </a>
                  )}
                </div>
              )}

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#bda8ff]/10">
                {r.photo ? (
                  <img
                    src={r.photo}
                    alt={r.author}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2 border-[#bda8ff]/20"
                  />
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#bda8ff]/15 flex items-center justify-center flex-shrink-0 border-2 border-[#bda8ff]/20">
                    <Icon name="User" size={18} className="text-[#bda8ff]" />
                  </div>
                )}
                <div>
                  <div className="text-sm font-semibold text-[#2d2d2d]">{r.author}</div>
                  <div className="text-xs text-[#595959]/60">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Telegram CTA ────────────────────────────────────────────────────────────
function TelegramCTA() {
  return (
    <section className="py-20 bg-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#bda8ff]/20 rounded-xl flex items-center justify-center">
                <Icon name="Send" size={20} className="text-[#bda8ff]" />
              </div>
              <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Telegram-канал</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white font-bold leading-tight mb-4">
              Подпишитесь на наш канал о промышленном маркетинге
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Кейсы, разборы и инсайты из реальной практики с производственными компаниями. Без воды, только то, что работает.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">1 200+</div>
                <div className="text-white/40 text-sm mt-0.5">подписчиков</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-white/40 text-sm mt-0.5">постов в месяц</div>
              </div>
            </div>
            <a
              href="https://t.me/tolkadigital"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#bda8ff] text-[#2d2d2d] font-bold px-8 py-4 rounded-full hover:bg-[#a68fed] transition-all duration-200 text-base shadow-lg shadow-[#bda8ff]/25"
            >
              <Icon name="Send" size={18} />
              Подписаться в Telegram
            </a>
          </div>

          {/* Post preview */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/30">
              <img
                src={TG_POST_IMG}
                alt="Пост из Telegram-канала TolkaDigital"
                className="w-full object-cover object-top"
                style={{ maxHeight: "460px" }}
              />
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#bda8ff] flex items-center justify-center flex-shrink-0">
                  <Icon name="Send" size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">TolkaDigital</div>
                  <div className="text-white/40 text-xs">Маркетинг для производства</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contacts ────────────────────────────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [agreed, setAgreed] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSent(true);
  };

  return (
    <section className="py-24 bg-white" id="contacts">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#bda8ff]" />
              <span className="text-[#bda8ff] text-xs font-mono uppercase tracking-[0.25em] font-semibold">Бесплатный аудит</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-[#2d2d2d] mb-6 leading-tight">
              Начнём с<br />бесплатного аудита
            </h2>
            <p className="text-[#595959] text-base leading-relaxed mb-8">
              Расскажем, где у вашей компании скрыт потенциал роста. Аудит занимает 45 минут и ни к чему не обязывает.
            </p>
            <div className="space-y-4 mb-8">
              {[
                "Анализируем текущие каналы и их эффективность",
                "Находим точки роста и узкие места в воронке",
                "Показываем, какой результат реально достижим",
                "Предлагаем конкретный план действий",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#bda8ff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={12} className="text-[#bda8ff]" />
                  </div>
                  <span className="text-[#595959] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <img
              src={AUDIT_ILLUSTRATION}
              alt="Иллюстрация аудита"
              className="w-full max-w-sm object-contain"
              style={{ maxHeight: "280px" }}
            />
          </div>

          <div className="bg-[#f9f7ff] border border-[#bda8ff]/20 rounded-2xl p-8 shadow-lg shadow-[#bda8ff]/8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-[#bda8ff]/15 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Check" size={28} className="text-[#bda8ff]" />
                </div>
                <h3 className="font-display text-2xl text-[#2d2d2d] mb-3">Заявка отправлена</h3>
                <p className="text-[#595959] text-sm max-w-xs leading-relaxed">
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
                    <label className="text-xs font-mono text-[#595959]/70 uppercase tracking-wider block mb-2 font-semibold">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      className="w-full bg-white border border-[#bda8ff]/25 text-[#2d2d2d] text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#bda8ff] placeholder-[#595959]/30 transition-colors duration-200"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs font-mono text-[#595959]/70 uppercase tracking-wider block mb-2 font-semibold">Коротко о задаче</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Хотим увеличить поток входящих заявок..."
                    className="w-full bg-white border border-[#bda8ff]/25 text-[#2d2d2d] text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-[#bda8ff] placeholder-[#595959]/30 transition-colors duration-200 resize-none"
                  />
                </div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-[#bda8ff]/40 accent-[#bda8ff] cursor-pointer flex-shrink-0"
                  />
                  <span className="text-xs text-[#595959]/60 leading-relaxed">
                    Я согласен(а) на обработку персональных данных в соответствии с{" "}
                    <a href="#" className="text-[#bda8ff] hover:underline">политикой конфиденциальности</a>
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full bg-[#e98c6c] text-white font-semibold py-4 px-6 rounded-full hover:bg-[#e98c6c]/90 transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-[#e98c6c]/20 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Записаться на аудит
                  <Icon name="ArrowRight" size={16} />
                </button>
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
    <footer className="bg-[#1e1e1e] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="Tolka Digital" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-white/50 leading-relaxed">
              Маркетинговое агентство.<br />Специализация — производственные компании и заводы.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://vk.com/tolka_digitalmarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bda8ff]/30 transition-colors"
              >
                <span className="text-white text-xs font-bold">VK</span>
              </a>
              <a
                href="https://t.me/tolkadigital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#bda8ff]/30 transition-colors"
              >
                <Icon name="Send" size={14} className="text-white" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-4">Разделы</div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Кейсы", href: "#cases" },
                { label: "Услуги", href: "#services" },
                { label: "Подход", href: "#approach" },
                { label: "Преимущества", href: "#advantages" },
                { label: "Отзывы", href: "#reviews" },
                { label: "Бесплатный аудит", href: "#contacts" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-white/50 hover:text-white transition-colors w-fit">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-4">Услуги</div>
            <div className="flex flex-col gap-2.5">
              {[
                "Стратегия и позиционирование",
                "Digital-маркетинг",
                "Контент-маркетинг",
                "Продающий сайт",
                "Сквозная аналитика",
                "Лидогенерация",
              ].map((s) => (
                <span key={s} className="text-sm text-white/50">{s}</span>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <div className="text-xs text-white/30 uppercase tracking-wider font-semibold mb-4">Контакты</div>
            <div className="flex flex-col gap-3">
              <a href="tel:+79809009409" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <Icon name="Phone" size={14} className="text-[#bda8ff]" />
                +7 980 900-94-09
              </a>
              <a href="https://t.me/tolkadigital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors">
                <Icon name="Send" size={14} className="text-[#bda8ff]" />
                @tolkadigital
              </a>

            </div>
            <a
              href="#contacts"
              className="mt-6 inline-flex items-center gap-2 bg-[#e98c6c] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#e98c6c]/90 transition-all"
            >
              Получить КП
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/25">© 2024 TolkaDigital. Все права защищены</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-white/25 hover:text-white/50 transition-colors">Обработка персональных данных</a>
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
      <VideoReviews />
      <TextReviews />
      <TelegramCTA />
      <Contacts />
      <Footer />
    </div>
  );
}