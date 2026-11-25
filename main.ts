// Describe Your Ex in One Word — entry: "recalled".
// The ex, summed up as a defective product pulled from the shelves:
// recalled by the manufacturer, no longer fit for use.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "recalled";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
