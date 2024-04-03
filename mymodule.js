const fullnames = ["Juan dela Cruz", "Pedro Penduko", "Tiagong Akyat"]
//const fullname = "Juan dela Cruz"
//console.log(fullname)

const students = [
    {name: fullnames[0], age: 18, course: 'IT'},
    {name: fullnames[1], age: 19, course: 'IS'},
    {name: fullnames[2], age: 20, course: 'CS'},
]

const hello = function(name = "Cardo") {
    return (`Hello ${name}`)
}
//module.exports = {fullnames}
//module.exports = {fullnames, students}
module.exports = {fullnames, students, hello} //different color sa variables