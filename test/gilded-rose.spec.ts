const {expect} = require('chai');
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("foo", 10, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(39);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("foo", 0, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(38);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("foo", 3, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(49);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 3, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(6);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 3, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(2);
        expect(items[0].quality).to.equal(50);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 0, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Aged Brie');
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(6);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes", 5, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes');
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(8);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes", 10, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes');
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(7);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes", 20, 5)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Backstage passes');
        expect(items[0].sellIn).to.equal(19);
        expect(items[0].quality).to.equal(6);
    });
});

describe('Gilded Rose', function () {
    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item("Sulfuras", 0, 80)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('Sulfuras');
        expect(items[0].sellIn).to.equal(0);
        expect(items[0].quality).to.equal(80);
    });
});
