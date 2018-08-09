var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(arr, element) {
  return [element, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, element) {
  console.log(`helllo ${arr}`)
  arr.unshift(element)
  console.log(`hello second time, ${arr}``)
  return arr
}
