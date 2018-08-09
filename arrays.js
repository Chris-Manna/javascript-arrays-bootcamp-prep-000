var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = ['bread','mild cheese','sharp cheese','butter','tomato','garlic']
var tomatoSauceIngredients = ['tomato','garlic','olive oil', 'basil', 'oregano']

var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, element) {
  arr.unshift(element)
}
function destructivelyAddElementToBeginningOfArray(arr, element) {
  [element, ...arr]
}
