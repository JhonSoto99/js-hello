// Control Structures


// Conditionals
if (1 > 2) {

} else if(2 > 3) {

} else {

}

let fruit = "Papayas"

// switch
switch (fruit) { // ===
    case "Apples":
        console.log('yeah')
        break
    case "Organges":
        console.log('yeah2')
        break
    case "Mangos":
    case "Papayas":
        console.log('yeah2 yeah2')
        break
    default:
        console.log(`not ${fruit}`)
        break
}

// Loops
// for
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

let list = ["0", "1", "2"]

for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

// for of: arrays or strings
// arrays and strings: only elements.
for (let number of list) {
    console.log(number)
}

// for in: enumerable objects
// objects: data structure with key and value.
const shoppingList = {
    apple: 4,
    pera: 3
}
for (let object in shoppingList) {
    console.log(object, shoppingList[object])
}

// while: first execute the condition.
let counter = 0
while (counter < 10) {
    console.log(counter)
    counter++
}

// do while: first execute the code.
let counter2 = 15
do {
    console.log(counter2)
   counter2++
} while (counter2 < 20)