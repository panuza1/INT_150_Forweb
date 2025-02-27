/*
1) write an evenOdd function that receives a value and returns
- true if the value is an even number
- false if the value is an odd number
- null otherwise (e.g., a number but not an integer, not a number, Infinity).
*/
function evenOdd(value) {
    return Number.isInteger(value) ? value % 2 == 0 : null;
}

function testEvenOdd() {
    console.log("test evenOdd(...) --------------------");
    console.log("5:", evenOdd(5));
    console.log("8:",evenOdd(8));
    console.log("7.2:", evenOdd(7.2));
    console.log("NaN:", evenOdd(NaN));
    console.log("Infinity:", evenOdd(Infinity));
    console.log("true:", evenOdd(true));
    console.log("'word':", evenOdd("word"));
    console.log("null:", evenOdd(null));
    console.log("undefined:", evenOdd(undefined));
}

/*
2) write a middle function that receives three values and returns the middle value 
among the three values based on comparison.
- firstly, all values must be either all strings or all numbers; otherwise returns null –AND–
- secondly, if there are duplicate values, any of the duplicate values can be returned –AND–
- avoiding duplicate logic and minimizing the number of comparisons.
*/
function middle(v1, v2, v3) {
    // eliminate exception cases out first
    var t1 = typeof v1;
    var t2 = typeof v2;
    var t3 = typeof v3;
    if (t1 == "string") {                     // if v1 is a string
        if (t2 != "string" || t3 != "string") //    the rest must be strings too
            return null;
    } else if (t1 == "number") {              // if v1 is a number, 
                                              //    all of them must be non-NaN numbers
        if (t2 != "number" || t3 != "number" || isNaN(v1) || isNaN(v2) || isNaN(v3)) 
            return null;
    } else {                                  // v1 is neither a string nor a non-NaN number
        return null;
    }
    // at this point, the three inputs are either all strings or all non-NaN numbers

    if (v1 <= v2) {              // (1)
        if (v2 <= v3) return v2; // (2) v1 <= v2 && v2 <= v3
        if (v1 <= v3) return v3; // (3) v1 <= v2 && v3 < v2 && v1 <= v3
        return v1;               // (4) v1 <= v2 && v3 < v2 && v3 < v1
    }
    if (v1 <= v3) return v1;     // (5) v2 < v1 && v1 <= v3
    if (v2 <= v3) return v3;     // (6) v2 < v1 && v3 < v1 && v2 <= v3
    return v2;                   // (7) v2 < v1 && v3 < v1 && v3 < v2
    // (2) and (6) are the same logic (v2<=v3) but only one of them will get evaluated
    // (3) and (5) are the same logic (v1<=v3) but only one of them will get evaluated
}
function mid(v1,v2,v3) { // a short version of the above middle function without input validation
    return v1 <= v2 ? (v2 <= v3 ? v2 : (v1 <= v3 ? v3 : v1)) : (v1 <= v3 ? v1 : (v2 <= v3 ? v3 : v2));
}

function testMiddle() {
    console.log("test middle(...) --------------------");
    function t(...x) { console.log(...x,": middle:",middle(...x), ", mid:", mid(...x)); }
    t(5,5,5);
    t(3,5,5);
    t(5,3,5);
    t(5,5,3);
    t(5,5,7);
    t(5,7,5);
    t(7,5,5);
    t(3,5,7);
    t(3,7,5);
    t(5,3,7);
    t(5,7,3);
    t(7,3,5);
    t(7,5,3);
}

/*
3) write a ticketPrice function that receives age, dayOfWeek, and timeOfDay 
and returns the ticket price according to the following criteria:
- Full price for an adult is ฿160. Children (age<=7) are free (0). Seniors (age>=60) pay half price.
- Weekend rate (dayOfWeek is "Saturday" or "Sunday") adds 10% to the price.
- Daytime (timeOfDay<=16) on Weekday (not Weekend) get a discount of ฿20 (except children).
- return NaN on invalid inputs (valid: age<=0, dayOfWeek is a string, 0<=timeOfDay<24).
*/
function ticketPrice(age, dayOfWeek, timeOfDay) {
    // input validation --------------------------
    if (typeof age != "number" || isNaN(age) || age <= 0) return NaN;
    if (typeof dayOfWeek != "string") return NaN;
    if (typeof timeOfDay != "number" || isNaN(timeOfDay) || timeOfDay<0 || timeOfDay>=24) return NaN;

    // ticket price calculation ------------------
    if (age <= 7) return 0;
    price = 160;
    if (age >= 60) price /= 2;
    if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") return price * 1.1;
    if (timeOfDay <= 16) return price - 20;
    return price;
}

/* testing function */
function t(func, ...testCase) { console.log(...testCase, ":", func(...testCase)); }

function testTicketPrice() {
    console.log("test ticketPrice(...) --------------------");
    t(ticketPrice, 5,"Saturday",17);
    t(ticketPrice, 20,"Monday",18);
    t(ticketPrice, 20,"Monday",12);
    t(ticketPrice, 20,"Saturday",18);
    t(ticketPrice, 20,"Saturday",12);
    t(ticketPrice, 66,"Monday",18);
    t(ticketPrice, 66,"Monday",12);
    t(ticketPrice, 66,"Saturday",18);
    t(ticketPrice, 66,"Saturday",12);
}

/*
4) write a yearToDate function that receives a date (as three integers: day, month, year) 
and returns the number of days from the first of January to that date on the same year.
e.g., yearToDate(14,2,2000) returns 31+14 = 45, i.e., 31 days in January and 14 days in February.
Note that, in a leap year, February has 29 days. If the inputs are invalid, return NaN.
A leap year is the year that is divisible by 400 -or- divisible by 4 but not divisible by 100.
*/
function yearToDate(day, month, year) {
    /* 
    problem decompostion ---------------------
    - input validation
    - compute the number of days in February
    - accumulate the number of days to date
    */

    // input validation
    if (! Number.isInteger(day) || ! Number.isInteger(month) || ! Number.isInteger(year) 
        || day < 1 || day > 31 || month < 1 || month > 12 || year < 1)
        return NaN;
    if (day > 30) {
        switch (month) {
            case 4: case 6: case 9: case 11: return NaN;
        }
    }

    // compute the number of days in February
    let daysInFeb = (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) ? 29 : 28;
    if (day > daysInFeb && month == 2) 
        return NaN;

    // accumulate the number of days to date
    let days = day;
    if (month > 1) days += 31;
    if (month > 2) days += daysInFeb;
    if (month > 3) days += 31;
    if (month > 4) days += 30;
    if (month > 5) days += 31;
    if (month > 6) days += 30;
    if (month > 7) days += 31;
    if (month > 8) days += 31;
    if (month > 9) days += 30;
    if (month > 10) days += 31;
    if (month > 11) days += 30;
    return days;
}

function testYearToDate() {
    console.log("test yearToDate(...) --------------------");
    t(yearToDate, 1,1,2000);
    t(yearToDate, 0,1,2000);
    t(yearToDate, 31,1,2000);
    t(yearToDate, 1,2,2000);
    t(yearToDate, 28,2,2000);
    t(yearToDate, 29,2,2000);
    t(yearToDate, 1,3,2000);
    t(yearToDate, 31,3,2000);
    t(yearToDate, 32,3,2000);
    t(yearToDate, 1,4,2000);
    t(yearToDate, 28,2,2001);
    t(yearToDate, 29,2,2001);
    t(yearToDate, 1,3,2001);
}

testEvenOdd();
testMiddle();
testTicketPrice();
testYearToDate();
