import { describe, it, expect } from "vitest";
import { Details, USER_API, add, fechtUser, isAuthenticated, languages, reverseString, userDetails } from "./helper";

describe("Test cases for add function", () => {
    it("it returns 1+1 = 2", () => {
        expect(add(1, 1)).toBe(2)
    })
    it("it returns 100+100 = 200", () => {
        expect(add(100, 100)).toBe(200)
    })
    it("check for strings", () => {
        expect(add("1", "1")).toBe(0)
    })
    it("check for arrays", () => {
        expect(add(["1"], ["1"])).toBe(0)
    })
})
describe('To reverse a string,reverseString()', () => {
    it('check if it is defined', () => {
        expect(reverseString).toBeDefined() // it check the method is defined or not
    })
    // it('returns a string eg:("super" to "repus") check it reverse properly',()=>{
    //     expect(reverseString("james")).toBe("semaj")
    // })
    // it('returns a string eg:("ab" to "ba") check it reverse properly',()=>{
    //     expect(reverseString("ab")).toBe("ba")
    // })
})

describe('USER_API_URL', () => {
    it('check if url is correct', () => {
        expect(USER_API).toBe("https://api.com/user")
    })
})

describe('languages', () => {
    it('check if languages has 3 items', () => {
        expect(languages).toEqual(['JS', 'CSS', 'HTML']) // tobe is not working in array or object in this case we use toequal
    })
})

describe('user Details Object', () => {
    it('check if objects has 2 properties', () => {
        expect(userDetails).toEqual({
            name: "james",
            age: 25
        }) // tobe is not working in array or object in this case we use toequal
    })
})

describe('Details Object', () => {
    it('check if objects has 3 properties', () => {
        expect(Details).toHaveProperty("name")
        expect(Details).toHaveProperty("age")
        expect(Details).toHaveProperty("gender") // toHaveProperty checks the object have these properties
    })
})

// describe('API',()=>{
//     it('check if API return data', async ()=>{
//       const data =   await fechtUser()
//       expect(data).toHaveProperty('id')
//       expect(data).toHaveProperty('title')
//       expect(data).toHaveProperty('completed')
//     })
// })

describe('isAuthenticated', () => {
    it('if user is logged in?', () => {
        expect(isAuthenticated(true)).toBeTruthy() // to return the value
    })
    it('if user is  not logged in?', () => {
        expect(() => isAuthenticated(false)).toThrow // for check the throw error
    })
})