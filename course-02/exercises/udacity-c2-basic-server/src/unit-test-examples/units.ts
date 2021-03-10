// Super Simple Unit Functions

export const add = (a: number, b: number) => {
    return a + b;
    }

export const divide = (a: number, b: number) => {
    if(b === 0) { throw new Error('div by 0') }

    return a / b;
    }

// @TODO try creating a method "concat" to concatenate two strings
// it should take two string paramaters.
// it should return one string combining the two strings.
// it should throw an error if either of the strings are empty.
// ensure your function is exported.
 export const concat = (str1: string, str2: string ) : string => {

    if(str1 === "" || str2 ===""){ throw new Error("please pass a valid string to both args")}
     return str1 + str2;
 }