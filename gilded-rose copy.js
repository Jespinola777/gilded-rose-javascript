export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
class AgedBrie extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality++;
  }
}
class LegendaryItem extends Item {
  updateQuality() {}
}
class ConcertItem extends Item {
  updateQuality() {
    this.quality -= 2;
    this.sellIn--;
  }
}
class ConjouredItem extends Item {
  updateQuality() {}
}
class BasicItem extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality--;
  }
}

//create subclass for
//AgedBrie
//LegendaryITem
//conjouredItem
//ConcertItem

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
