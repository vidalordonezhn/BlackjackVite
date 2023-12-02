/**
 * retorna la ultima carta del deck
 * @param {Arry<string>} deck
 * @returns {string} la ultima carta
 */
export const PedirCarta = (deck) => {
  console.log(deck)
  if (deck.length === 0 || !deck) {
    throw 'No hay cartas en el deck'
  }
  return deck.pop()
}
