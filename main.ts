// Make the AI Judge Laugh: Office Jokes — entry program.
// Writes a single office joke line to /output/entry.txt.
// The gate allows 1-199 characters of UTF-8 text, not only white space.
// Verified by running this file locally: the joke below is 125 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My out-of-office reply says I'm on leave until Monday. My boss replied to it, asking if I could just quickly check one thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
