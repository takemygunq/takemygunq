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
</p>

### 🔌 About me

I'm an embedded developer — I'm happiest when code is driving real hardware. I write **C** firmware for **STM32**,
use **Raspberry Pi** as the brain of a device, and wire everything together with sensors over **UART, I²C, SPI and GPIO**.
**Python** is my go-to for scripts, debugging tools and anything running on the Pi. When a device needs a UI
or a server, I add a bit of **frontend and backend**.

```c
typedef struct {
    const char *focus;      // "Embedded"
    const char *mcu[2];     // { "STM32", "Raspberry Pi" }
    const char *bus[4];     // { "UART", "I2C", "SPI", "GPIO" }
    const char *lang[2];    // { "C", "Python" }
    const char *side_quest; // "frontend + backend"
} developer_t;

static const developer_t nevzorl = {
    .focus      = "Embedded",
    .mcu        = { "STM32", "Raspberry Pi" },
    .bus        = { "UART", "I2C", "SPI", "GPIO" },
    .lang       = { "C", "Python" },
    .side_quest = "frontend + backend",
};
```

### 🛠️ Tech stack

<table>
  <tr>
    <td width="130"><b>⚡ Embedded</b></td>
    <td><img src="https://skillicons.dev/icons?i=c,cpp,py,raspberrypi,arduino,linux,bash&theme=dark" /></td>
  </tr>
  <tr>
    <td><b>📡 Hardware</b></td>
    <td>STM32 (HAL, CMSIS, bare registers) · Raspberry Pi · UART · I²C · SPI · GPIO · PWM · ADC · interrupts &amp; DMA · datasheets, logic analyzer &amp; oscilloscope</td>
  </tr>
  <tr>
    <td><b>🌐 Web</b></td>
    <td><img src="https://skillicons.dev/icons?i=ts,react,nextjs,nodejs,tailwind,sqlite&theme=dark" /></td>
  </tr>
  <tr>
    <td><b>☕ JVM</b></td>
    <td><img src="https://skillicons.dev/icons?i=java,maven&theme=dark" /></td>
  </tr>
  <tr>
    <td><b>🧰 Tools</b></td>
    <td><img src="https://skillicons.dev/icons?i=git,github,vscode,docker&theme=dark" /></td>
  </tr>
</table>

### 📦 Projects

| | Project | What it is | Stack |
|---|---|---|---|
| ⚖️ | **Verdict** | Several AI models hold a courtroom trial over a marketing project and deliver a verdict | TypeScript · Next.js |
| 🎮 | [**MineGranter**](https://github.com/takemygunq/MineGranter) | Minecraft server plugin: staff roles, shifts and player reports with Telegram notifications | Java · Spigot / Paper |

### 📊 Activity

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/takemygunq/takemygunq/output/snake-dark.svg" />
    <img alt="snake" src="https://raw.githubusercontent.com/takemygunq/takemygunq/output/snake.svg" />
  </picture>
</p>
