<a href="https://github.com/takemygunq">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="assets/hero-light.svg" />
    <img src="assets/hero-dark.svg" alt="nevzorl — Embedded: STM32, Raspberry Pi, C, Python" width="100%" />
  </picture>
</a>

<p align="center">
  <img src="https://img.shields.io/badge/focus-Embedded-34d399?style=flat-square&logo=stmicroelectronics&logoColor=white" />
  <img src="https://img.shields.io/badge/STM32-HAL%20%2F%20CMSIS-03234B?style=flat-square&logo=stmicroelectronics&logoColor=white" />
  <img src="https://img.shields.io/badge/Raspberry%20Pi-Linux-A22846?style=flat-square&logo=raspberrypi&logoColor=white" />
  <img src="https://img.shields.io/badge/UART%20·%20I²C%20·%20SPI%20·%20GPIO-0891b2?style=flat-square" />
  <img src="https://komarev.com/ghpvc/?username=takemygunq&style=flat-square&color=059669&label=просмотры" />
</p>

### 🔌 Обо мне

Я embedded-разработчик: мне интереснее всего, когда код управляет железом. Пишу прошивки на **C** под **STM32**,
поднимаю **Raspberry Pi** как мозг устройства, а связь между ними и с датчиками делаю через **UART, I²C, SPI и GPIO**.
На **Python** пишу скрипты, утилиты, тулзы для отладки и всё, что крутится на Pi. Когда устройству нужен
интерфейс или сервер, добавляю немного **фронтенда и бэкенда**.

```c
typedef struct {
    const char *focus;      // "Embedded"
    const char *mcu[2];     // { "STM32", "Raspberry Pi" }
    const char *bus[4];     // { "UART", "I2C", "SPI", "GPIO" }
    const char *lang[2];    // { "C", "Python" }
    const char *side_quest; // "frontend + backend"
} dev_t;

static const dev_t nevzorl = {
    .focus      = "Embedded",
    .mcu        = { "STM32", "Raspberry Pi" },
    .bus        = { "UART", "I2C", "SPI", "GPIO" },
    .lang       = { "C", "Python" },
    .side_quest = "frontend + backend",
};
```

### 🛠️ Стек

<table>
  <tr>
    <td width="130"><b>⚡ Embedded</b></td>
    <td><img src="https://skillicons.dev/icons?i=c,cpp,py,raspberrypi,arduino,linux,bash&theme=dark" /></td>
  </tr>
  <tr>
    <td><b>📡 Железо</b></td>
    <td>STM32 (HAL, CMSIS, регистры) · Raspberry Pi · UART · I²C · SPI · GPIO · PWM · ADC · прерывания и DMA · даташиты, логический анализатор и осциллограф</td>
  </tr>
  <tr>
    <td><b>🌐 Веб</b></td>
    <td><img src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,tailwind,sqlite&theme=dark" /></td>
  </tr>
  <tr>
    <td><b>🧰 Тулзы</b></td>
    <td><img src="https://skillicons.dev/icons?i=git,github,vscode,docker&theme=dark" /></td>
  </tr>
</table>

### 📦 Проекты

| | Проект | Что это | Стек |
|---|---|---|---|
| ⚖️ | **Verdict** | Несколько ИИ-моделей устраивают суд над маркетинговым проектом и выносят вердикт | TypeScript · Next.js |
| 🎮 | [**ZStaffGiver**](https://github.com/takemygunq/ZStaffGiver) | Плагин для Minecraft-сервера | Java |

### ⚖️ Суд над твоим кодом

Вдохновлено моим проектом Verdict. Подай дело, и через минуту бот вынесет приговор и впишет его в реестр ниже.

<p align="center">
  <a href="https://github.com/takemygunq/takemygunq/issues/new?body=%D0%9D%D0%B0%D0%B6%D0%BC%D0%B8+Submit+%E2%80%94+%D1%81%D1%83%D0%B4+%D0%B2%D1%8B%D0%BD%D0%B5%D1%81%D0%B5%D1%82+%D0%B2%D0%B5%D1%80%D0%B4%D0%B8%D0%BA%D1%82+%D0%B7%D0%B0+%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D1%83.&title=verdict%3A+%D0%94%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9+%D0%B2+%D0%BF%D1%8F%D1%82%D0%BD%D0%B8%D1%86%D1%83"><img src="https://img.shields.io/badge/📅_Деплой_в_пятницу-1f2d29?style=for-the-badge" /></a>
  <a href="https://github.com/takemygunq/takemygunq/issues/new?body=%D0%9D%D0%B0%D0%B6%D0%BC%D0%B8+Submit+%E2%80%94+%D1%81%D1%83%D0%B4+%D0%B2%D1%8B%D0%BD%D0%B5%D1%81%D0%B5%D1%82+%D0%B2%D0%B5%D1%80%D0%B4%D0%B8%D0%BA%D1%82+%D0%B7%D0%B0+%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D1%83.&title=verdict%3A+%D0%97%D0%B0%D0%B1%D1%8B%D0%BB+volatile+%D0%B2+%D0%BF%D1%80%D0%B5%D1%80%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8"><img src="https://img.shields.io/badge/⚡_Забыл_volatile_в_прерывании-1f2d29?style=for-the-badge" /></a>
  <a href="https://github.com/takemygunq/takemygunq/issues/new?body=%D0%9D%D0%B0%D0%B6%D0%BC%D0%B8+Submit+%E2%80%94+%D1%81%D1%83%D0%B4+%D0%B2%D1%8B%D0%BD%D0%B5%D1%81%D0%B5%D1%82+%D0%B2%D0%B5%D1%80%D0%B4%D0%B8%D0%BA%D1%82+%D0%B7%D0%B0+%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D1%83.&title=verdict%3A+%D0%9F%D0%B5%D1%80%D0%B5%D0%BF%D1%83%D1%82%D0%B0%D0%BB+TX+%D0%B8+RX"><img src="https://img.shields.io/badge/🔌_Перепутал_TX_и_RX-1f2d29?style=for-the-badge" /></a>
  <a href="https://github.com/takemygunq/takemygunq/issues/new?body=%D0%9D%D0%B0%D0%B6%D0%BC%D0%B8+Submit+%E2%80%94+%D1%81%D1%83%D0%B4+%D0%B2%D1%8B%D0%BD%D0%B5%D1%81%D0%B5%D1%82+%D0%B2%D0%B5%D1%80%D0%B4%D0%B8%D0%BA%D1%82+%D0%B7%D0%B0+%D0%BC%D0%B8%D0%BD%D1%83%D1%82%D1%83.&title=verdict%3A+"><img src="https://img.shields.io/badge/✍️_Своё_обвинение-059669?style=for-the-badge" /></a>
</p>

<!-- CASES:START -->
Рассмотрено дел: **0**. Стань первым истцом!
<!-- CASES:END -->

### 📊 Активность

<p align="center">
  <img src="https://streak-stats.demolab.com?user=takemygunq&theme=radical&background=06100d&ring=34d399&fire=22d3ee&currStreakLabel=34d399&sideLabels=e6fff7&currStreakNum=e6fff7&sideNums=e6fff7&dates=6fa293&stroke=1f2d29&hide_border=true&locale=ru" height="165" />
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=takemygunq&bg_color=06100d&color=6fa293&line=34d399&point=22d3ee&area=true&area_color=34d399&hide_border=true&title_color=e6fff7&custom_title=Коммиты%20за%20месяц" width="100%" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/takemygunq/takemygunq/output/snake-dark.svg" />
    <img alt="snake" src="https://raw.githubusercontent.com/takemygunq/takemygunq/output/snake.svg" />
  </picture>
</p>
