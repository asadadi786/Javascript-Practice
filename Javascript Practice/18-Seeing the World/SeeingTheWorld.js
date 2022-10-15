var placesToVisit = ['USA', 'Canada','Turkey','Saudia','Thailand','Indonesia','Switzerland']

console.log('Array is it originl Order is as follow:\n')
placesToVisit.forEach(printArray)

function printArray(value,index,array)
{
    console.log(value)
}


//Alphabatically Sorted Places
var sortedArray = [...placesToVisit].sort()
console.log('\n Alphabatically sorted array of places is as follow:')
sortedArray.forEach(SortedPlacesList)
function SortedPlacesList(value,index,array)
{
    console.log(value)
}

console.log('\nActual Array is still in original position is as follow:')
placesToVisit.forEach(printArray)

console.log('\nReverse ordered new array is as follow:')
var reverseOrderArray = [...placesToVisit].reverse()
reverseOrderArray.forEach(printArray)

console.log('\nAfter reverse Actual Array is still in original position is as follow:')
placesToVisit.forEach(printArray)

console.log('\nReverse order of actual array contain places is as follow:')
placesToVisit.reverse()
placesToVisit.forEach(printArray)

console.log('\nReverse order of actual array contain places in its original order is as follow:')
placesToVisit.reverse()
placesToVisit.forEach(printArray)

console.log('\nSort actual array so it’s stored in alphabetical order is as follow:')
placesToVisit.sort()
placesToVisit.forEach(printArray)

console.log('\nSort to change your array so it’s stored in reverse alphabetical order is as follow:')
placesToVisit.reverse()
placesToVisit.forEach(printArray)
