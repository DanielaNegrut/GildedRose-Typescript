import { Item, GildedRose } from '../app/gilded-rose';
const {expect} = require('chai');

const item1: Item = new Item("Sulfuras", 0, 80)
const item2: Item = new Item("Backstage passes", 20, 5)
const item3: Item = new Item("Backstage passes", 10, 5)
const item4: Item = new Item("Backstage passes", 5, 5)
const item5: Item = new Item("Aged Brie", 3, 5)
const item6: Item = new Item("foo", 3, 50)
const item7: Item = new Item("foo", 0, 40)
const item8: Item = new Item("foo", 10, 40)
const item9: Item = new Item("foo", 0, 0)

const items: Item[] = [item1, item2, item3, item4, item5,
                       item6, item7, item8, item9]

const rose: GildedRose = new GildedRose(items)
const updatedItems: Item[] = rose.updateQuality();

for (const item of updatedItems) {
    console.log(`${item.name} ${item.sellIn} ${item.quality}`);
}
