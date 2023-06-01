export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class AgedBrie extends Item {
  updateQuality() {
    if (this.quality >= 50) {
      this.quality = 50;
      this.sellIn--;
    } else {
      this.sellIn--;
      this.quality++;
    }
  }
}
export class LegendaryItem extends Item {
  updateQuality() {}
}
export class ConcertItem extends Item {
  updateQuality() {
    this.quality++;
    this.sellIn--;
    if (this.sellIn <= 10 && this.sellIn > 5) {
      this.quality++;
    }
    if (this.sellIn <= 5 && this.sellIn > 0) {
      this.quality += 2;
    }
    if (this.sellIn <= 0) {
      this.quality = 0;
    }
    if (this.quality >= 50) {
      this.quality = 50;
    }
  }
}

export class ConjouredItem extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality -= 2;
  }
}

export class BasicItem extends Item {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality -= 2;
      this.sellIn--;
    } else {
      this.sellIn--;
      this.quality--;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export let items = [];

items.push(new BasicItem("+5 Dexterity Vest", 10, 20));
items.push(new AgedBrie("Aged Brie", 2, 0));
items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(
  new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 15, 20)
);
items.push(new ConjouredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
  }
};
