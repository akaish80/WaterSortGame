export const createInitialState = (): string[][] => {
  return [
    ["red", "blue", "green", "green"],
    ["blue", "green", "red", "blue"],
    ["red", "blue", "green", "red"],
    [], []
  ];
};

export const canPour = (from: string[], to: string[]): boolean => {
  if (from.length === 0 || to.length === 4) return false;
  const topFrom = from[from.length - 1];
  const topTo = to[to.length - 1];
  if (to.length === 0 || topFrom === topTo) {
    const maxPour = to.length + from.filter(c => c === topFrom).length <= 4;
    return maxPour;
  }
  return false;
};

export const pour = (from: string[], to: string[]): [string[], string[]] => {
  const f = [...from];
  const t = [...to];
  const color = f[f.length - 1];
  while (f.length && f[f.length - 1] === color && t.length < 4) {
    t.push(f.pop()!);
  }
  return [f, t];
};

export const checkWin = (tubes: string[][]): boolean =>
  tubes.every(t => t.length === 0 || (t.length === 4 && t.every(c => c === t[0])));