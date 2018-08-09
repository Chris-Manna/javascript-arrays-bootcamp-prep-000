var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, element) {
  arr.shift(element)
  return arr
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element]
}

function destructivelyAddElementToBeginningOfArray(arr,element) {
  arr.push(element)
  return arr
}
