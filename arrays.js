var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  console.log(`Hello 1: ${array}`)
  array.unshift(element)
  console.log(`Hello 2: ${array}`)
  return array
}

function addElementToEndOfArray(arr, element) {
  return [...arr, element]
}

function destructivelyAddElementToBeginningOfArray(arr,element) {
  arr.push(element)
  return arr
}
