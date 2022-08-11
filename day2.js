// Cau 1
const arr1 = [1, 2, 3, 5]
const copy_arr1 = [...arr1]
const copy2_arr1 = arr1.concat([])

// Cau 2
const arrA = ['Hello', 'Xin chao']
const arrB = ['Bonjour', 'Ola']
const waysToSayHello = [...arrA, ...arrB]
const waysToSayHello2 = arrA.concat(arrB)

// Cau 3
const arrX =[0,1,2,3,4,5,6,7,8]
const arrSquare = arrX.map(e=>e**2)
const arrOdds = arrX.filter(e=>e%2==1)

// Cau 4
const filterRange = (arr, a, b) => {
    return arr.slice(a,b)
}

// Cau 5
const filterArr = (arr, a, b) => {
    return arr.filter(e=>e>a&&e<b)
}

// Cau 6
const students = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]

// 6.1
const age = prompt('Input your age: ')
const names = students.filter(e=>e.age==parseInt(age)).map(e=>e.name)

// 6.2
const hobby = prompt('Please enter your hobby: ')
const pupils = students.filter(e=>e.hobbies.includes(hobby)).map(e=>({name: e.name, hobbies: e.hobbies}))

// 6.3
const nerds = students.filter(e=>e.hobbies.includes('study'))

// 6.4
const newStudents = students.map(e=>e.age===11?({...e, age: 15}):e)