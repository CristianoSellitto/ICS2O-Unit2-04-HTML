// Cristiano
// ICS2O-Unit2-04-HTML
// March 23 2022

'use strict'
/**
 * Calculates area and perimeter of the user's rectangle.
 */
function calculate() {
  const length = parseInt(document.getElementById("lengthinput").value)
  const width = parseInt(document.getElementById("widthinput").value)
  document.getElementById("perimeteroutput").innerHTML = "<p>The perimeter of this rectangle is " + ((length * 2) + (width * 2)) + "cm</p>"
  document.getElementById("areaoutput").innerHTML = "<p>The area of this rectangle is " + (length * width) + "cm²</p>"
}
