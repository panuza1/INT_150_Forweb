## All values have types

Dynamic type --> ไม่ต้องมานั่งเช็ค type 
static type --> ต้องเขียน type ตลอด เช่น C C++   

Literals = ข้อมูล ที่เขียนลงไปตรงๆเลยๆ ว่าเป็น type อะไร 
Variables = กำหนด ค่าใหม่ให้มันได้ 
Constants = เปลี่ยนไม่ได้ 
่
## Concerns

javascript -> primitive --> store value   ex. number, boolean, string    
              nonprimitive --> reference   ex. 

## Variables

immutable --> เปลี่ยนแปลงไม่ได้    int, float, str, tuple   เหมาะสำหรับข้อมูลที่ไม่ต้องการให้เปลี่ยนแปลง เช่น ค่าคงที่ หรือข้อมูลที่ใช้ร่วมกันในหลายส่วนของโปรแกรม
mutable --> เปลี่ยนได้ list, dict, set   เหมาะสำหรับข้อมูลที่ต้องการปรับเปลี่ยนบ่อย ๆ เช่น คอลเล็กชันที่ต้องเพิ่ม/ลบข้อมูล



##  Hoisting

javascript have " Hoisting " EX. 
------------------------------- 
sayHello(); 

function sayHello() {       //hosting --- ยกขึ้นไปข้างบน 
    console.log("Hello world"); 
} 
--------------------------------


## Declaration

Declaration ใน JavaScript เป็นการบอกโปรแกรมว่ามีตัวแปร, ฟังก์ชัน, หรือคลาสที่เราจะใช้งาน 

1.Variable Declaration: ใช้ var, let, const เพื่อสร้างตัวแปร
2.Function Declaration: ใช้ function เพื่อกำหนดฟังก์ชัน
3.Class Declaration: ใช้ class เพื่อสร้างคลาสและกำหนดโครงสร้างวัตถุ

## Null 

ืีnull = ใช้กำหนด ค่าที่ยังว่างอยู่ ยังไม่มีอะไรเลย EX.
-------------------------------- 
x = {name : 'somesri', value: 6}

console.log(x);

x = null 
console.log(x) 
-------------------------------- 
NaN = not a number

## Value Scope 

บริเวณในโปรแกรมที่สามารถเข้าถึงตัวแปรนั้นได้ Javascript
แบ่งออกเป็นสองประเภท
    Block scope
    Function scope
    Global scope


![alt text](image.png)
