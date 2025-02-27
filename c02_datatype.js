function test1Exponential1(x, y, z) {
    return x ** y ** z
} 

function test1Exponential2(x, y, z) {
    return x ** (y ** z)
}

function test2Conditional1(x, y, z, w, u) { // ? :
    return x ? y : z ? w : u 

}   

function ans_test2Conditional1(x, y, z, w, u) { // ? :
    return x ? y : (z ? w : u)    // x จริง คืนค่า y   ถ้าไม่ จะไป ดู : ต่อ 
 }    

function test3Boolean1() { // && || !
    return null
}
    
function ans_test3Boolean1(x, y) { // && || !
    return (x && y) || (!y);     
}

function test4ComparisonAndBoolean1( ) { // <, > vs. &&, ||, !
    return null
}

function ans_test4ComparisonAndBoolean1(x, y, z, w) { // <, > vs. &&, ||, !
    return ((x > y && false) || !(z < w) && null);
} 



console.log(test2Conditional1(1, 2, 3, 4, 5)) 
console.log(ans_test2Conditional1(1, 2, 3, 4, 5)) 

console.log(test3Boolean1(1,2))
console.log(ans_test3Boolean1(1,2))

console.log(test4ComparisonAndBoolean1(1,2,3,4))
console.log(ans_test4ComparisonAndBoolean1(1,2,3,4))


