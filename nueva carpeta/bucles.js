const createrUser = (username, password, age) => {
    return {
        username,
        password,
        age
    }
}

const user1 = createrUser ('gabo', '123', 27)
const user2 = createrUser ('caro', '456', 55)
const user3 = createrUser ('alejo', '789', 17)
const user4 = createrUser ('pedrito', 'hola', 5)

const users = (user1, user2, user3, user4);

const userAComparar = user4

//Condicionales
if (userAComparar.age > 18 && userAComparar.age <= 100) {
    alert(`${userAComparar.username} es adulto`)
} else if (userAComparar.age <= 18 && userAComparar.age >= 14) {
    alert(`${userAComparar.username} es adolescente`)
} else if (userAComparar.username >= 0 && userAComparar.age < 14) {
    alert (`${userAComparar.username} es nino`)
}else {
    alert ('La edad tiene un valor erroneo');
}