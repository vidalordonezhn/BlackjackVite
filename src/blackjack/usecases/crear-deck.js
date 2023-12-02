import _ from 'underscore'

/**
 * Crea un nuevo deck de cartas
 * @param {Array<string>} tiposDeCartas
 * @param {Array<string>} especiales
 * @returns {Array<string>} Un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, especiales) => {
  if (
    !tiposDeCartas ||
    tiposDeCartas.length === 0 ||
    !especiales ||
    especiales.length === 0
  ) {
    throw 'Los tipos de cartas y los especiales tienen que ser arreglos no vacios'
  }

  let deck = []
  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo)
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of especiales) {
      deck.push(esp + tipo)
    }
  }
  deck = _.shuffle(deck)
  return deck
}
