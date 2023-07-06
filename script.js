const message = 'Hello world'
const fruits = ["apple", "banana", "mango"]

console.log(message)
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

let n = 0
let result = 0

function plus() {
  while (n < 100) {
    n++
    result += n
  }
  return result
}

console.log(plus())