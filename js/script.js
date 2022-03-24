// Cristiano
// ICS2O-Unit2-04-HTML
// March 23 2022

'use strict'
/**
 * Calculates area and perimeter of the user's triangle.
 */
function calculate() {
  const length = parseInt(document.getElementById("lengthinput").value)
  const width = parseInt(document.getElementById("widthinput").value)
  document.getElementById("areaoutput").innerHTML = "<p>The area of this triangle is " + (length * width / 2) + "cm²</p>"
}
