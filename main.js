// function isStringEmpty(str) {
//     if (typeof str === 'string' && Boolean(str)) {
//         console.log("String isn't empty ")
//     } else {
//         console.log("string is empty or str is not a string")
//     }
// }


// isStringEmpty("Hello")

// // isStringEmpty()

// var gpax = 4.00   // constants (ค่าคงที่ , เปลี่ยนค่าไม่ได้) 
// gpax = 1.00

// console.log(gpax) 
// kanna seto
const arr = [1, "String", true] 

const obj = {
    id: 1,
    name: "pavadee"
}




function greeting(name) {
    console.log('hello, ' + name)
}


function receiveInput() {
    const input = document.getElementById('userInput').value;
    console.log("User entered:", input);
}
 
console.log(receiveInput())