import { describe, expect, it } from "vitest";
import { cardigans, dropShoulder, regularFit, featuredOffer } from "@/lib/products";
import { sizeCharts } from "@/lib/sizeCharts";

describe("Requested size ranges", () => {
  it("offers drop shoulder hoodies in M to XL only", () => {
    expect(dropShoulder.length).toBeGreaterThan(0);
    expect(dropShoulder.every((product) => product.sizes.join() === "M,L,XL")).toBe(true);
  });
  it("offers regular fit hoodies in M to XXL", () => {
    expect(regularFit.length).toBeGreaterThan(0);
    expect(regularFit.every((product) => product.sizes.join() === "M,L,XL,XXL")).toBe(true);
  });
  it("offers cardigans in M to XXL", () => {
    expect(cardigans.length).toBeGreaterThan(0);
    expect(cardigans.every((product) => product.sizes.join() === "M,L,XL,XXL")).toBe(true);
  });
  it("offers the featured bundle in M to XXL", () => {
    expect(featuredOffer?.sizes).toEqual(["M", "L", "XL", "XXL"]);
  });
});

describe("Size charts", () => {
  it("matches the requested drop shoulder measurements", () => {
    expect(sizeCharts.drop.rows).toEqual([
      ["M", "42", "27", "44"],
      ["L", "44", "28", "46"],
      ["XL", "46", "29", "48"],
    ]);
  });
  it("matches the requested regular fit measurements", () => {
    expect(sizeCharts.regular.rows).toEqual([
      ["M", "27", "42", "8'04"],
      ["L", "28", "44", "9'00"],
      ["XL", "29", "46", "9'04"],
      ["2XL", "30", "48", "9'04"],
    ]);
  });
  it("lists jeans waists in English inches", () => {
    expect(sizeCharts.jeans.rows).toEqual([
      ["S", "28–30 in"],
      ["M", "30–32 in"],
      ["L", "32–34 in"],
      ["XL", "34–36 in"],
    ]);
  });
});
