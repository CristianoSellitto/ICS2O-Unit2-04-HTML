// Cristiano
// ICS2O-Unit2-04-HTML
// March 23 2022

'use strict'
/**
 * Calculates area of the user's triangle.
 */
function calculate() {
  const base = parseInt(document.getElementById("baseinput").value)
  const height = parseInt(document.getElementById("heightinput").value)
  document.getElementById("areaoutput").innerHTML = "<p>The area of this triangle is " + (base * height / 2) + "cm²</p>"
}
