import { Dino } from './../src/dino.js';

describe('Dino', () => {

  let dino;

  beforeEach(function() {
    dino = new Dino("Balochisaurus")
  });

  test('should create an array containing the individual letters from dino', () => {
    dino.splitDino();
    expect(dino.name).toEqual("Balochisaurus");
    expect(dino.nameArray).toEqual(["B","a","l","o","c","h","i","s","a","u","r","u","s"]);
  });

  test('should correctly identify whether a letter is used in dinos name', () => {
    dino.splitDino();
    expect(dino.guessLetter('z')).toBe(false);
    expect(dino.guessLetter('a')).toBe(true);
  });
});