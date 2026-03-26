const text = " javascript — это просто! "
const a = text.trim()
const result = a[0].toUpperCase() + a.slice(1)
console.log(result)

const name2 = "Иванов"
const name = "Иван"
const group = "ИСР-21"
const mbal = 4.75
console.log(`Студент ${name2} ${name}, группа ${group}, средний былл: ${mbal}`)

const data = "2025-03-15"
const j = data.split("-")
console.log(`${j[2]}.${j[1]}.${j[0]}`)

const text1 = "Node.js разработчик"
console.log(text1.startsWith("Node"))
console.log(text.endsWith("разработчик"))


const acc = 42
console.log(String(acc).padStart(8, "0"))