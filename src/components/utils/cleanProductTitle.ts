export function cleanProductTitle(name: string) {
  const removeWords = [
    "fresh",
    "premium",
    "best",
    "quality",
    "organic",
    "farm",
    "natural",
    "select",
  ];

  let cleaned = name.toLowerCase();

  removeWords.forEach((word) => {
    cleaned = cleaned.replace(new RegExp(`\\b${word}\\b`, "gi"), "");
  });

  return cleaned
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (l) => l.toUpperCase());
}
