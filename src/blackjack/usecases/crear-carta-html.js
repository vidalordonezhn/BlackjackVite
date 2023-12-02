/**
 * Generates a HTML image element for a given carta.
 *
 * @param {string} carta - The carta to generate the image for.
 * @return {HTMLElement} The HTML image element for the carta.
 */

export const crearCartaHtml = (carta) => {
  if (!carta) throw 'La carta es requerida'
  const imgCarta = document.createElement('img')
  imgCarta.src = `assets/cartas/${carta}.png` //3H, JD
  imgCarta.classList.add('carta')
  return imgCarta
}
