import { checkCards } from "./index";

it("1", () => {
  expect(checkCards([])).toBe(0);
});
it("2", () => {
  expect(checkCards(["2D"])).toBe(0);
});
it("3", () => {
  expect(checkCards(["2D", "2D"])).toBe(0);
});
it("4", () => {
  expect(checkCards(["2D", "3D"])).toBe(0);
});
it("5", () => {
  expect(checkCards(fullDeck.slice(1))).toBe(0);
});
it("6", () => {
  expect(checkCards(fullDeck)).toBe(1);
});
it("7", () => {
  expect(checkCards([...fullDeck, "2D"])).toBe(1);
});
it("8", () => {
  expect(checkCards([...fullDeck, ...fullDeck])).toBe(2);
});

// prettier-ignore
const fullDeck = ["2D","3D","4D","5D","6D","7D","8D","9D","JD","QD","KD","AD","2C","3C","4C","5C","6C","7C","8C","9C","JC","QC","KC","AC","2H","3H","4H","5H","6H","7H","8H","9H","JH","QH","KH","AH","2S","3S","4S","5S","6S","7S","8S","9S","JS","QS","KS","AS"];
