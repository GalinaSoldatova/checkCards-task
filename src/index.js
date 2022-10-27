/* Задача: 
	На вход программе приходит список карт, в виде массива строк.
  Каждая строка состоит из двух символов:
    значения карты (A, 2, 3, 4, 5, 6, 7, 8, 9, J, Q, K)
    и ее масти (D, C, H, S).

  Нужно написать программу, которая выдаст сколько
  полных колод можно собрать из заданного списка карт.
	
  Пример входных данных: ['2C', '4S', 'AH', 'JD', ...]
*/

const suits = ["D", "C", "H", "S"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

export function checkCards(input) {
  const minFullDeckLength = suits.length * ranks.length;
  if (!input || input?.length < minFullDeckLength) return 0;

  const fullDeck = {};
  for (let x = 0; x < ranks.length; x++) {
    for (let y = 0; y < suits.length; y++) {
      fullDeck[ranks[x] + suits[y]] = 0;
    }
  }

  input.forEach((element) => {
    fullDeck[element]++;
  });

  return Math.min(...Object.values(fullDeck));
}
