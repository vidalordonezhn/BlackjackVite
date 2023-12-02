import { crearCartaHtml, pedirCarta, valorCarta } from './'

/**
 *
 * @param {number} puntosMinimos puntos minimos de la computadora
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas de la computadora
 * @param {Array<string>} deck
 */

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error('Puntos minimos son necesarios')
  if (!puntosHTML) throw new Error('Argumento puntosHTML es necesario')
  if (!divCartasComputadora)
    throw new Error('Argumento divCartasComputadora es necesario')

  let puntosComputadora = 0

  do {
    const carta = pedirCarta(deck)

    puntosComputadora = puntosComputadora + valorCarta(carta)
    puntosHTML.innerText = puntosComputadora

    const imgCarta = crearCartaHtml(carta)
    divCartasComputadora.append(imgCarta)

    if (puntosMinimos > 21) {
      break
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21)

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert('Nadie gana :(')
    } else if (puntosMinimos > 21) {
      alert('Computadora gana')
    } else if (puntosComputadora > 21) {
      alert('Jugador Gana')
    } else {
      alert('Computadora Gana')
    }
  }, 100)
}
