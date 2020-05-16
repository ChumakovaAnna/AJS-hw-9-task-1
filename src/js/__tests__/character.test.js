import Character from "../characters/character";
import Magician from "../characters/types/magician";

test("created Character", () => {
  const result = new Character("Oleg");
  const expected = {
    name: "Oleg",
    health: 100,
    level: 1,
  };
  expect(result).toEqual(expected);
});

test("Character dead", () => {
  const magician = new Magician("Vlad");
  magician.death();
  const expected = {
    name: "Vlad",
    type: "Magician",
    health: 0,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

describe("Character LevelUp", () => {
  test("Character LevelUp", () => {
    const magician = new Magician("Sveta");
    magician.levelUp();
    const expected = {
      name: "Sveta",
      type: "Magician",
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    };
    expect(magician).toEqual(expected);
  });
  test("Character dead and LevelUp", () => {
    const magician = new Magician("Sveta");
    magician.death();
    expect(() => {
      magician.levelUp();
    }).toThrow();
  });
});
