import { expect, describe, it } from "vitest";
import {
  Item,
  items,
  AgedBrie,
  BasicItem,
  LegendaryItem,
  ConjouredItem,
  ConcertItem,
  updateQuality,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BasicItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("reduces quality by 2 for item with sellIn < 0", () => {
    const testItem = new BasicItem("basic", -2, 8);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(6);
    expect(testItem.sellIn).toBe(-3);
  });

  it("doesnt reduce quality to a negative number", () => {
    const testItem = new BasicItem("basic", 6, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBeGreaterThanOrEqual(0);
  });
  it("increased quality of 'aged Brie' items", () => {
    const testItem = new AgedBrie("Aged Brie", 3, 8);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(9);
  });

  it("quality of items is never more than 50", () => {
    const testItem1 = new AgedBrie("Aged Brie", 3, 50);
    const testItem2 = new ConcertItem(
      "Backstage passes to a TAFKAL80ETC concert",
      3,
      50
    );
    items.push(testItem1, testItem2);

    updateQuality();

    expect(testItem1.quality).toBe(50);
    expect(testItem2.quality).toBe(50);
    expect(testItem1.sellIn).toBe(2);
    expect(testItem2.sellIn).toBe(2);
  });

  it("quality doesn't decrease", () => {
    const testItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
  });

  it("increase quality by 2 when there are <= 10 days before 'Backstage passes to a TAFKAL80ETC concert'", () => {
    const testItem = new ConcertItem(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      4
    );
    items.push(testItem);

    updateQuality();
    expect(testItem.sellIn).toBe(9);
    expect(testItem.quality).toBe(6);
  });

  it("increase quality by 2 when there are <= 5 days before 'Backstage passes to a TAFKAL80ETC concert'", () => {
    const testItem = new ConcertItem(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      8
    );
    items.push(testItem);

    updateQuality();
    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(11);
  });

  it("Sets quality to 0 when'Backstage passes to a TAFKAL80ETC concert' has ended ", () => {
    const testItem = new ConcertItem(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      5
    );
    items.push(testItem);

    updateQuality();
    expect(testItem.sellIn).toBe(-1);
    expect(testItem.quality).toBe(0);
  });

  it("Conjoured Items reduced by 2 ", () => {
    const testItem = new ConjouredItem("Conjoured axe", 9, 10);
    items.push(testItem);

    updateQuality();
    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(8);
  });
});
