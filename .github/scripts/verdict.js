const fs = require("fs");

const OUTCOMES = [
  { key: "acquitted", label: "🟢 Acquitted", weight: 45 },
  { key: "guilty", label: "🔴 Guilty", weight: 35 },
  { key: "probation", label: "🟡 Probation", weight: 20 },
];

const SENTENCES = {
  acquitted: [
    "No crime found. You may merge.",
    "The prosecution failed to prove guilt. Deploy approved.",
    "The defense was convincing. You're free — go commit.",
  ],
  guilty: [
    "Sentenced to writing 3 unit tests.",
    "Sentenced to a refactor with no `void *` allowed.",
    "Sentenced to reading the whole reference manual, cover to cover.",
    "Sentenced to reviewing a 2000-line PR.",
  ],
  probation: [
    "On probation until the next release.",
    "Suspended sentence. One more `printf` in an ISR and it's real time.",
    "Sentencing postponed until the Friday deploy.",
  ],
};

// Only these charges are shown on the profile. Anything else anyone types stays in their own issue
// and appears in the registry as "Custom charge" — strangers can't put arbitrary text on the profile.
const PRESETS = ["Deployed on a Friday", "Forgot volatile in an ISR", "Swapped TX and RX"];

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const weighted = (items) => {
  let r = Math.random() * items.reduce((s, i) => s + i.weight, 0);
  return items.find((i) => (r -= i.weight) < 0) ?? items[0];
};
// Strips markup, links and @mentions, so the bot never posts links or pings anyone
const clean = (s) =>
  s
    .replace(/https?:\/\/\S+|www\.\S+/gi, "")
    .replace(/[<>|`\[\]\\*_#@]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 70) || "Untitled";

module.exports = async ({ github, context }) => {
  const issue = context.payload.issue;
  const subject = clean(issue.title.replace(/^verdict:\s*/i, ""));
  const charge = PRESETS.find((p) => p.toLowerCase() === subject.toLowerCase()) ?? "✍️ Custom charge";
  const outcome = weighted(OUTCOMES);
  const chance = Math.floor(Math.random() * 101);
  const sentence = pick(SENTENCES[outcome.key]);
  const user = issue.user.login;

  const state = JSON.parse(fs.readFileSync("data/cases.json", "utf8"));
  state.total += 1;
  if (outcome.key === "guilty") state.guilty += 1;
  if (outcome.key === "acquitted") state.acquitted += 1;
  state.cases.unshift({
    n: state.total, user, subject: charge, outcome: outcome.label, chance,
    date: new Date().toISOString().slice(0, 10), issue: issue.number,
  });
  state.cases = state.cases.slice(0, 5);
  fs.writeFileSync("data/cases.json", JSON.stringify(state, null, 2) + "\n");

  const rows = state.cases
    .map((c) => `| [#${c.n}](https://github.com/${context.repo.owner}/${context.repo.repo}/issues/${c.issue}) | ${c.subject} | ${c.outcome} | ${c.chance}% | [@${c.user}](https://github.com/${c.user}) |`)
    .join("\n");
  const block =
    `Cases heard: **${state.total}** · acquitted: **${state.acquitted}** · convicted: **${state.guilty}**\n\n` +
    `| Case | Charge | Verdict | Success chance | Plaintiff |\n|---|---|---|---|---|\n${rows}`;

  const readme = fs.readFileSync("README.md", "utf8");
  fs.writeFileSync(
    "README.md",
    readme.replace(/<!-- CASES:START -->[\s\S]*<!-- CASES:END -->/, `<!-- CASES:START -->\n${block}\n<!-- CASES:END -->`),
  );

  await github.rest.issues.createComment({
    ...context.repo,
    issue_number: issue.number,
    body:
      `## ⚖️ Case #${state.total}: “${subject}”\n\n` +
      `**Verdict:** ${outcome.label}\n**Success chance:** ${chance}%\n**Sentence:** ${sentence}\n\n` +
      `> Court adjourned. The ruling is now in the [registry](https://github.com/${context.repo.owner}). Thanks, @${user}!`,
  });
  await github.rest.issues.update({ ...context.repo, issue_number: issue.number, state: "closed" });
};
