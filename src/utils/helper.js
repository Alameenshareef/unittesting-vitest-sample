import axios from "axios"

export const add = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 0
    }
    return num1 + num2
}

export const reverseString = (value) => {
    // ameen = neema
    return value.split('').reverse().join('')
}

export const USER_API = "https://api.com/user"

export const languages = ["JS", "CSS", "HTML"]

export const userDetails = {
    name: "james",
    age: 25
}

export const Details = {
    name: "john",
    age: 26,
    gender: "male"
}

export const fechtUser = async () => {
    const response = axios('http://jsonplaceholder.typicode.com/todos/1')
    return (await response).data
}

export const isAuthenticated = (isLogged = false) => {
    if (isLogged) {
        return "welcome Al ameen"
    }
    throw new Error("user is not logged in")
}