const prompt = require('prompt-sync')();
// function a() { console.log("A"); return false}
// function b() { console.log("B"); return true}
// function c() { console.log("C"); return null}
 
// console.log(a() || (b() && c()))
 
 
// declaration
// const  --> ค่าคงที่
// var, let  --> เปลี่ยค่าได้
// var  (can be used multiple time)
//      (funciton scope)
//      (hoisted)
// let (use only one)
//     (block scope) smaller the function scope
//     (not hoisted)
// funciton
// class
 
 
 
// var x = 5
 
// function declaration
function a() {
 
    { var x = 5 } // block of statements
    console.log(x)
}
 
// a()
 
x = 10
y = 11
 
function rec() {
    let score = prompt("enter someting : ");
    console.log("Your Typed : " + score)
    if (score <= 0) {
        console.log("kuy")
        return score
    }
    return score
}
 
 
function grading(score) {  
    if (score > 100) return 'unknown';
    if (score >= 80) return "A";    
    if (score >= 70) return "B";        
    if (score >= 60) return "C";        
    if (score >= 0) return "F";        
    return 'unknown';          
}
 
 
let score = rec();
 
let grade = grading(score);
console.log(grade);
