const book = {
    title:  "Мастер и Маргарита",
    author: "Булгаков М.А.",
    year: 1967,
    pages: 480,
    available: true,
    info(){
        return `"${this.title}", ${this.author}, ${this.year} г., ${this.pages} стр.`
    }
}
console.log(book.info())


const{ title, author, rating = 0} = book
console.log(title)
console.log(author)
console.log(rating)


const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
const passed = students.filter(y => y.passed).map(y => y.name)
console.log(passed)
const bolshe = students.find(y => y.grade > 4.5)
console.log(bolshe)
const sball = students.reduce((k, g)=>k + g.grade, 0) / students.length
console.log(sball)


function mergeUsers(user1, user2) {
    return{...user1,...user2}
}

const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
console.log(mergeUsers(u1,u2))


function countByField(arr, field) {
    return arr.reduce((h, k)=> {
        const i = k[field]
        h[i] = (h[i] || 0 ) + 1
        return h
    }, {})
}
console.log(countByField(students,"passed"))