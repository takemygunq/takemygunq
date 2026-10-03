const fs = require("fs");

const OUTCOMES = [
  { key: "acquitted", label: "🟢 Оправдан", weight: 45 },
  { key: "guilty", label: "🔴 Виновен", weight: 35 },
  { key: "probation", label: "🟡 Условно", weight: 20 },
];

const SENTENCES = {
  acquitted: [
    "Суд не нашёл состава преступления. Можно мержить.",
    "Прокурор не смог доказать вину. Деплой разрешён.",
    "Адвокат был убедителен. Свободен, иди коммить.",
  ],
  guilty: [
    "Приговаривается к написанию юнит-тестов (3 шт.).",
    "Приговаривается к рефакторингу без права на `any`.",
    "Приговаривается к чтению документации от корки до корки.",
    "Приговаривается к ревью чужого PR на 2000 строк.",
  ],
  probation: [
    "Испытательный срок — до следующего релиза.",
    "Условно. Ещё один `console.log` в проде — и реальный срок.",
    "Отсрочка приговора до пятничного деплоя.",
  ],
};

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const weighted = (items) => {
  let r = Math.random() * items.reduce((s, i) => s + i.weight, 0);
  return items.find((i) => (r -= i.weight) < 0) ?? items[0];
};
const clean = (s) =>
  s.replace(/[<>|`\[\]\\*_#]/g, "").replace(/\s+/g, " ").trim().slice(0, 70) || "Без названия";

module.exports = async ({ github, context }) => {
  const issue = context.payload.issue;
  const subject = clean(issue.title.replace(/^verdict:\s*/i, ""));
  const outcome = weighted(OUTCOMES);
  const chance = Math.floor(Math.random() * 101);
  const sentence = pick(SENTENCES[outcome.key]);
  const user = issue.user.login;

  const state = JSON.parse(fs.readFileSync("data/cases.json", "utf8"));
  state.total += 1;
  if (outcome.key === "guilty") state.guilty += 1;
  if (outcome.key === "acquitted") state.acquitted += 1;
  state.cases.unshift({
    n: state.total, user, subject, outcome: outcome.label, chance,
    date: new Date().toISOString().slice(0, 10), issue: issue.number,
  });
  state.cases = state.cases.slice(0, 5);
  fs.writeFileSync("data/cases.json", JSON.stringify(state, null, 2) + "\n");

  const rows = state.cases
    .map((c) => `| [#${c.n}](https://github.com/${context.repo.owner}/${context.repo.repo}/issues/${c.issue}) | ${c.subject} | ${c.outcome} | ${c.chance}% | [@${c.user}](https://github.com/${c.user}) |`)
    .join("\n");
  const block =
    `Рассмотрено дел: **${state.total}** · оправдано: **${state.acquitted}** · осуждено: **${state.guilty}**\n\n` +
    `| Дело | Обвинение | Вердикт | Шанс на успех | Истец |\n|---|---|---|---|---|\n${rows}`;

  const readme = fs.readFileSync("README.md", "utf8");
  fs.writeFileSync(
    "README.md",
    readme.replace(/<!-- CASES:START -->[\s\S]*<!-- CASES:END -->/, `<!-- CASES:START -->\n${block}\n<!-- CASES:END -->`),
  );

  await github.rest.issues.createComment({
    ...context.repo,
    issue_number: issue.number,
    body:
      `## ⚖️ Дело №${state.total}: «${subject}»\n\n` +
      `**Вердикт:** ${outcome.label}\n**Шанс на успех:** ${chance}%\n**Приговор:** ${sentence}\n\n` +
      `> Заседание закрыто. Решение внесено в [реестр](https://github.com/${context.repo.owner}). Спасибо, @${user}!`,
  });
  await github.rest.issues.update({ ...context.repo, issue_number: issue.number, state: "closed" });
};
