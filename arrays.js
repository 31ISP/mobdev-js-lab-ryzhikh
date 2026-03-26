const ocenki = [4, 5, 3, 5, 2, 4, 5, 3]
const  sredball = ocenki.reduce((a, b)=> a + b, 0) / ocenki.length
console.log(sredball.toFixed(2))

const f = ocenki.filter(b => b >3)
const m = f.map(b => "Оценка: " + b)
console.log(m)

const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const sort = fruits.sort((c,d)=> c.localeCompare(d))
console.log(sort.join(", "))


const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const deshevle = products.filter(l => l.price <10000)
console.log(deshevle)
const name3 = products.map(l => l.name)
console.log(name3)
const sum = products.reduce((n, u)=> n + u.price, 0)
console.log(sum)

const chisla = [12, 45, 7, 33, 18]
console.log(chisla.some(t=> t > 40))
console.log(chisla.every(t=> t > 5))