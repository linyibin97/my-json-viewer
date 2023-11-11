export const mockTabList = Array(30)
  .fill(null)
  .map((_, i) => {
    const names = [
      "John",
      "Lisa",
      "Mark",
      "Sarah",
      "William",
      "Samantha",
      "Alexander",
      "KatherineKatherine",
      "BenjaminBenjamin",
      "ElizabethElizabethElizabethElizabeth",
    ];
    return {
      id: "tab" + i,
      name: names[Math.floor(Math.random() * names.length)],
    };
  });
