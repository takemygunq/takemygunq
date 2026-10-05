<a href="https://github.com/takemygunq">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="assets/hero-light.svg" />
    <img src="assets/hero-dark.svg" alt="nevzorl — Embedded: STM32, Raspberry Pi, C, Python" width="100%" />
  </picture>
</a>

<p align="center">
  <img src="https://img.shields.io/badge/focus-Embedded-ff6a1f?style=flat-square&logo=stmicroelectronics&logoColor=white" />
  <img src="https://img.shields.io/badge/STM32-HAL%20%2F%20CMSIS-c2410c?style=flat-square&logo=stmicroelectronics&logoColor=white" />
  <img src="https://img.shields.io/badge/Raspberry%20Pi-Linux-ea580c?style=flat-square&logo=raspberrypi&logoColor=white" />
  <img src="https://img.shields.io/badge/UART%20·%20I²C%20·%20SPI%20·%20GPIO-f59e0b?style=flat-square" />
</p>

<p align="center">
  <img src="assets/pcb.gif" alt="Orange traces pulsing around a microchip" width="100%" />
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
    <td><img src="assets/hw-stm32.svg" width="48" height="48" alt="STM32" /> <img src="assets/hw-uart.svg" width="48" height="48" alt="UART" /> <img src="assets/hw-i2c.svg" width="48" height="48" alt="I2C" /> <img src="assets/hw-spi.svg" width="48" height="48" alt="SPI" /> <img src="assets/hw-gpio.svg" width="48" height="48" alt="GPIO" /> <img src="assets/hw-pwm.svg" width="48" height="48" alt="PWM" /> <img src="assets/hw-adc.svg" width="48" height="48" alt="ADC" /> <img src="assets/hw-dma.svg" width="48" height="48" alt="DMA" /> <img src="assets/hw-irq.svg" width="48" height="48" alt="IRQ" /> <img src="assets/hw-scope.svg" width="48" height="48" alt="SCOPE" /><br/><sub>STM32 HAL / CMSIS / bare registers · Raspberry Pi · datasheets · logic analyzer &amp; oscilloscope</sub></td>
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
| 🔌 | [**CircuitMind**](https://github.com/takemygunq/CircuitMind) | An AI electronics designer: describe a device, get the wiring diagram, schematic, calculations, simulation and firmware | TypeScript · Next.js · custom SVG engine |
| ⚖️ | [**Verdict**](https://github.com/takemygunq/Verdict) | An AI courtroom for marketing materials: a jury of AI models argues over your ad and delivers a verdict | TypeScript · Next.js · PixiJS |
| 🎮 | [**MineGranter**](https://github.com/takemygunq/MineGranter) | Minecraft server plugin: staff roles, shifts and player reports with Telegram notifications | Java · Spigot / Paper |

### 📬 Contact

<p align="left">
  <a href="https://t.me/zenvixanet"><img src="https://img.shields.io/badge/Telegram-@zenvixanet-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram @zenvixanet" /></a>
</p>

### 📊 Activity

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/takemygunq/takemygunq/output/snake-dark.svg" />
    <img alt="snake" src="https://raw.githubusercontent.com/takemygunq/takemygunq/output/snake.svg" />
  </picture>
</p>
