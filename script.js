// var allStudents = ['Habeeb', 'Abdullateef', 'Winner', 'Rebecca', 'John']
// allStudents[1] = 'Basheer'
// console.log(allStudents.length);

// var evenNumbers = [2,4,6,8,10]

// var truthy = [true, false, 5]

var cart = []
cart.push('Corn Flakes')
cart.unshift('Milo')
cart.push('Ipara')
cart.unshift('Body Spray')
cart.push('Indomie')
cart.push('Oats')
cart.pop()
cart.push('5 alive')
cart.shift()
cart.unshift('Active')
cart.push('Pulpy')
console.log(cart);




// console.log(cart.length);

var newArray = [1,2,3,4,5,6,7,8,9,10]
// newArray.splice(startingIndex, noOfItemsToRemove, replacement)
newArray.splice(9,1,'Dodo')
console.log(newArray);