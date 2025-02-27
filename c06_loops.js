function countDigit(num, digit) {
    if (!Number.isInteger(num) || num < 0) return null 
    if (!Number.isInteger(digit) || digit < 0 || digit > 9) return null

    let counter = 0;
    while (num > 0) {
    remainder = num % 10;
    if (remainder == digit) ++counter;
    num = (num - remainder) / 10;
    }
    return counter;
}

function t(func, ...a) {
    console.log(func(...a), ":",func(...a));
    
}



function testcountDigit() {
    console.log("test countDigit(...) --------------------");
    t(countDigit, 31311131, 1);
    t(countDigit, 44423441, 2);  
    t(countDigit, 4141414, 3);
    t(countDigit, 3131313, 4);
    t(countDigit, 3131314, 5);
}


// testcountDigit();


function sumDigit(num) {
    if (!Number.isInteger(num) || num < 0) return null; // ตรวจสอบว่า num เป็นตัวเลขบวก

    let sum = 0;
    while (num > 0) {
        sum += num % 10; // บวกหลักสุดท้ายของ num เข้าไปในผลรวม
        num = Math.floor(num / 10); // ตัดหลักสุดท้ายออกโดยการหารด้วย 10 แล้วปัดเศษ
    }
    return sum;
}




function isPrime(value) {
    // input validation 
    if (!Number.isInteger(value) || value <= 1) return false;
    if (value == 2) return true; 
    // คำนวณหาจำนวนเฉพาะ 
    let bound = value / 2;
    let divider = 3;
    while (divider <= bound) {
        if (value % divider == 0) return false;
        divider += 2; 

    }
    return true;
}

function testIsPrime() {
    console.log("Testing isPrime(value) --------------------");
    t(isPrime, 1);
    t(isPrime, 2);
    t(isPrime, 3);  
    t(isPrime, 4);
    t(isPrime, 5);
    t(isPrime, 6);
    t(isPrime, 7);
    t(isPrime, 8);
    t(isPrime, 9);
    
    
}

// isPrime(20);
testIsPrime();

// หาคำตอบ 
// let counter = 0
// while (num > 0) {
//     if (num % 10 == digit) counter++ ;
//     num = Math.floor(num / 10)    //ปัดเศษทิ้ง
// }





/* --------------------------------------------------------------------------------------------------------------------*/

//c06_loops.js

// test script ------------------------
//testCountDigit()
//testSumDigit()
testIsPrime()

// testing function -------------------
function t(func, ...a) { console.log(...a, ":", func(...a)) }

/*
1) write a countDigit() function that receives a <num> (a non-negative integer) and 
a <digit> (i.e., 0-9). This function returns the number of occurrences of the <digit> 
in the <num>; and returns null if the inputs are invalid. 
E.g., countDigit(406705,0) returns 2.
Do NOT use functions related to strings.
*/

function countDigit(num, digit) {
    // input validation ----------------------
    if (!Number.isInteger(num) || num < 0)
        return null;
    if (!Number.isInteger(digit) || digit < 0 || digit > 9)
        return null;

    // handle special case
    if (num == 0 && digit == 0) return 1;

    // find the answer ----------------------
    let counter = 0;
    while (num > 0) {
        remainder = num % 10;
        if (remainder == digit) ++counter;
        num = (num - remainder) / 10;
    }
    return counter;
}

function testCountDigit() {
    console.log("Testing countDigit(num, digit) ----------------")
    t(countDigit,532643344,0)
    t(countDigit,532643344,1)
    t(countDigit,532643344,2)
    t(countDigit,532643344,3)
    t(countDigit,532643344,4)
    t(countDigit,532643344,5)
    t(countDigit,532643344,6)
    t(countDigit,532643344,7)
    t(countDigit,1000, 0)
    t(countDigit, 202, 0)
    t(countDigit, 200, 0)
    t(countDigit, 2, 0)
    t(countDigit, 0, 0)
    t(countDigit, 0, 3)
    t(countDigit, 2, -4)
}

/*
2) write a sumDigit() function that receives a value and returns the summation of 
the product of each digit and its position: e.g., sumDigit(705) = 7*3+0*2+5*1 = 26;
returns null if the input value is not a non-negative integer.
Do NOT use functions related to strings.
*/

function sumDigit(value) {
    // input validation ---------
    if (!Number.isInteger(value) || value < 0) return null;

    // processing ---------------
    let sum = 0;
    let pos = 1;
    while (value > 0) {
        let remainder = value % 10;
        sum += pos++ * remainder;
        value = (value - remainder) / 10;
    }
    return sum;

}

function testSumDigit() {
    console.log("Testing sumDigit(value) ----------------")
    t(sumDigit, 234) // 2*3+3*2+4*1 = 16
    t(sumDigit, 0)   // 0
    t(sumDigit, 10)  // 2
    t(sumDigit, 3)   // 3
    t(sumDigit, -4)  // null
    t(sumDigit, Infinity) // null
}

/*
3) write a isPrime() function that receives a value and returns true if the input value is
a prime number, otherwise returns false. A prime number is a positive integer > 1 and
divisible by itself and 1 only and no other positive integers that can divide a prime number.
*/

function isPrime(value) {
    // input validation ---------
    if (!Number.isInteger(value) || value <= 1) return false;

    // handling special case ----
    if (value == 2) return true;
    if (value % 2 == 0) return false;

    // processing ---------------
    let bound = value / 2;
    let divider = 3;
    while (divider <= bound) {
        if (value % divider == 0) return false;
        divider += 2;
    }
    return true;
}

function testIsPrime() {
    console.log("Testing isPrime(value) ----------------")
    t(isPrime, 1)
    t(isPrime, 2)
    t(isPrime, 3)
    t(isPrime, 4)
    t(isPrime, 5)
    t(isPrime, 7)
    t(isPrime, 9)
    t(isPrime, 11)
    t(isPrime, 15)
    t(isPrime, 16)
    t(isPrime, 17)
    t(isPrime, 19)
    t(isPrime, 21)
}

/*
4) write a nextPrime() function that receives a value and returns the smallest prime number
that is greater than the input value. Return null if the input value is not an integer.
Use isPrime() function to check if a number is a prime number.
*/