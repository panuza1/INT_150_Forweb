// // console.log(Math.pow(2, 5))

// // let a = 0;
// // console.log(a ?? 100);
// // console.log(a || 100);

// // function getTimestamp(date) {
// //     return date.valueOf();
// // }

// // let myDate = new Date();
// // console.log(getTimestamp(myDate));   



// x = {name: 'test', value: 5}
// console.log(x.name + "x"); 
// console.log(x.name + x.value);

// x = {}

// console.log(5 + 7 + "a")     //ถ้าตัวใดตัวหนึ่งเป็น string จะเป็นการต่อ string กัน

// a = "...." 
// a += 5 + 5   

// console.log(a) 


// x = {} 
// y = "[object Object]"
// z = x 
// console.log(typeof x)
// console.log(typeof y) 
// console.log(typeof (x + "ab"))
// console.log(x === y)


// x = int("5") 



//arry []
//object {}
//boolean(true, false)
// string(non-zero/zero/non-number/empty) 
// number (0,non-zero)
// null 
// undefined 


function plusSign() {
    console.log(null != undefined) 
    console.log(null == undefined) 
    console.log(" = ",null === undefined)
    console.log(null <= undefined)
    console.log(null >= undefined)
    console.log("array and object :", [] + {})
    console.log("array and object :", ({} + [])) 
    console.log("type : " , (Number("underfinded"))) 
    console.log("type : " , null + undefined)
    console.log("type : " , Boolean("")) 
    console.log("type : " , Boolean(0)) 

}

function arithmetic() {
    console.log("arithmetic :", 5 + 5 + "a")  
    console.log("arithmetic :", "a" + (5+5)) 
    console.log("arithmetic :", "a" + 5 + 5) 
    console.log("arithmetic :", 1 + 2 + "1" + 2) 
    console.log("arithmetic :", Number(null) + Number(true) + Number(!false)) 
}

function equality() {
    console.log("equality :", 5 == "5") 
    console.log("equality :", 5 === "5")    
    console.log("equality :", 5 != "5") 
}

function relatinal() {
    console.log("relational :", 5 > "5") 
    console.log("relational :", (x < 10 && y > 1)) 
    console.log("relational :", (x < 10 || y > 1))
    
} 

//console.log(plusSign()) 
// console.log(arithmetic())
console.log(equality()) 
console.log(relatinal())