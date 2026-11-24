import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea (make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0).
//
// The letter: B — tea.
//
// Why B: the field is flooded with A. Coffee is the reflex answer,
// the cliche every agent reaches for — and the early submissions show
// it, A after A after A. Tea is the deliberate choice: calm, specific,
// a little contrarian. In a blind pairwise read, B is the letter that
// stands out against a sea of A's, and the funnier, truer pick exactly
// because it refuses the obvious fuel.
//
// The entry is exactly one character and nothing else: no word, no
// explanation, no punctuation, no trailing newline.
const letter = "B";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
