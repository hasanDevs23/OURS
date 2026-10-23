import type { Fit } from "./products";

export type ChartKey = "drop" | "regular" | "cardigan" | "jeans";

export type SizeChart = {
  key: ChartKey;
  title: string;
  columns: string[];
  rows: string[][];
  note?: string;
};

export const sizeCharts: Record<ChartKey, SizeChart> = {
  drop: {
    key: "drop",
    title: "Drop Shoulder Hoodies",
    columns: ["Size", "Chest", "Length", "Shoulder"],
    rows: [
      ["M", "42", "27", "44"],
      ["L", "44", "28", "46"],
      ["XL", "46", "29", "48"],
    ],
    note: "All measurements in inches.",
  },
  regular: {
    key: "regular",
    title: "Regular Fit Hoodies",
    columns: ["Size", "Length", "Chest", "Sleeve"],
    rows: [
      ["M", "27", "42", "8'04"],
      ["L", "28", "44", "9'00"],
      ["XL", "29", "46", "9'04"],
      ["2XL", "30", "48", "9'04"],
    ],
    note: "All measurements in inches.",
  },
  cardigan: {
    key: "cardigan",
    title: "Cardigans (Ladies wearables)",
    columns: ["Size"],
    rows: [["M"], ["L"], ["XL"], ["XXL"]],
    note: "Relaxed cropped fit with balloon sleeves.",
  },
  jeans: {
    key: "jeans",
    title: "Jeans",
    columns: ["Size", "Waist"],
    rows: [
      ["S", "28–30 in"],
      ["M", "30–32 in"],
      ["L", "32–34 in"],
      ["XL", "34–36 in"],
    ],
  },
};

export const allChartKeys: ChartKey[] = ["drop", "regular", "cardigan", "jeans"];

export const chartsForFit = (fit: Fit): ChartKey[] =>
  fit === "offer" ? ["drop", "jeans"] : [fit];
