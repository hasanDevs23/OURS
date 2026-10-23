import { describe, expect, it } from "vitest";
import { cardigans, dropShoulder, regularFit, featuredOffer, offers, formatPrice } from "@/lib/products";

describe("Requested BDT catalog prices", () => {
  it("prices all 13 drop shoulder hoodies at 899 BDT", () => {
    expect(dropShoulder).toHaveLength(13);
    expect(dropShoulder.every((product) => product.price === 899)).toBe(true);
  });
  it("prices all 18 regular fit hoodies at 799 BDT", () => {
    expect(regularFit).toHaveLength(18);
    expect(regularFit.every((product) => product.price === 799)).toBe(true);
  });
  it("prices the seven existing cardigans at 899 BDT", () => {
    const existing = cardigans.filter((product) => !product.id.startsWith("butterfly-cardigan-"));
    expect(existing).toHaveLength(7);
    expect(existing.every((product) => product.price === 899)).toBe(true);
  });
  it("prices cardigans 8 through 11 at 799 BDT", () => {
    const added = cardigans.filter((product) => product.id.startsWith("butterfly-cardigan-"));
    expect(added).toHaveLength(4);
    expect(added.every((product) => product.price === 799)).toBe(true);
  });
  it("features the 1299 BDT bundle in Offers", () => {
    expect(featuredOffer?.id).toBe("dimension-hoodie-jeans-bundle");
    expect(featuredOffer?.price).toBe(1299);
    expect(offers).toContain(featuredOffer);
  });
  it("formats prices in BDT", () => {
    expect(formatPrice(1299)).toBe("1,299 BDT");
  });
});