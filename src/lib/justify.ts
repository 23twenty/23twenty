/**
 * Justified-row layout, the same cost model as react-photo-album's "rows" layout:
 * a row of photos scaled to fill `width` gets height h, and costs (h - target)^2 per photo.
 * Rows are chosen together (shortest path over break points), so no row is left with
 * one stretched orphan the way greedy filling does.
 */
export interface Row {
  count: number;
  height: number;
}

export function layoutRows(ratios: number[], width: number, spacing: number, target: number): Row[] {
  const n = ratios.length;
  const heightOf = (i: number, j: number) => {
    let sum = 0;
    for (let k = i; k < j; k++) sum += ratios[k];
    return (width - (j - i - 1) * spacing) / sum;
  };
  // A row never needs more photos than would fit at the target height with the narrowest photo, plus slack.
  const maxPerRow = Math.round(width / target / Math.min(...ratios)) + 2;

  const best = new Array<number>(n + 1).fill(Infinity);
  const prev = new Array<number>(n + 1).fill(-1);
  best[0] = 0;
  for (let i = 0; i < n; i++) {
    if (best[i] === Infinity) continue;
    for (let j = i + 1; j <= n && j - i <= maxPerRow; j++) {
      const h = heightOf(i, j);
      if (h <= 0) break;
      const cost = best[i] + (h - target) ** 2 * (j - i);
      if (cost < best[j]) {
        best[j] = cost;
        prev[j] = i;
      }
    }
  }

  const rows: Row[] = [];
  for (let j = n; j > 0; j = prev[j]) rows.unshift({ count: j - prev[j], height: heightOf(prev[j], j) });
  return rows;
}
