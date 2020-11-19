function calc(a, b) {
    if((!a && a !== 0) || (!b && b !== 0)) {
        return "не указаны все аргументы";
    } 
    if(typeof a!=="number" || typeof b!=="number") {
        return "один из аргументов не являеться числом";       
    }
    if(a % 2 === 0) {
        return a*b;
    } else {
        return a+b;
    } 
}
console.log(`${calc(3, 6)}`);
 
function pointSearch(x, y) {
    if((!x && y !== 0) || (!x && y !==0)) {
        return "не указаны все аргументы";
    }
    if(typeof x!=="number" || typeof y!=="number") {
        return "один из аргументов не являеться числом";       
    } if(x > 0 && y > 0) {
        return "I";
    } else if(x < 0 && y > 0) {
        return "II";
    } else if(x < 0 && y < 0) {
        return "III";
    } else if(x > 0 && y < 0) {
        return "IV";
    }
}
console.log(`${pointSearch(2, 3)}`);

function sumPositivNum(num1, num2, num3) {
    let sum = 0;
    if((!num1 && num1 !== 0) || (!num2 && num2 !== 0) || (!num3 && num3 !== 0)) {
        return "не указаны все аргументы";
    } 
    if(typeof num1 !== "number" || typeof num2 !== "number" || typeof num3 !== "number") {
        return "один из аргументов не являеться числом";       
    } 
    if(num1 <= 0 && num2 <= 0 && num3 <= 0){
        return "положительных чисел нету";
    }
    if(num1 > 0) {
        sum += num1;
    }
    if(num2 > 0) {
        sum += num2;
    }
    if(num3 > 0) {
        sum += num3;
    }
    return sum;
}
console.log(`${sumPositivNum(3, 4, 0)}`);

function countMax(a, b, c) {
    if((!a && a !== 0) || (!b && b !== 0) || (!c && c !== 0)) {
        return "не указаны все аргументы";
    } 
    if(typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return "один из аргументов не являеться числом";       
    } 
    let addition = a+b+c;
    let multiplication = a*b*c;
    if(addition>multiplication) {
        return addition + 3;
    } else if(multiplication > addition) {
        return multiplication + 3;
    } else {
        return "они равны";
    }
}
console.log(`${countMax(2, 2, 0)}`);

function definitionGrade(grade) {
    if(!grade && grade !== 0) {
        return "не указан аргумент";
    } 
    if(typeof grade!=="number") {
        return "аргумен не являеться числом";       
    }
    if(grade >= 0 && grade <=19) {
        return "F";
    } else if(grade >= 20 && grade <= 39) {
        return "E";
    } else if(grade >= 40 && grade <= 59) {
        return "D";
    } else if(grade >= 60 && grade <= 74) {
        return "C";
    } else if(grade >= 75 && grade <= 89) {
        return "B";
    } else if(grade >= 90 && grade <= 100) {
        return "A";
    } else {
        return "такой оценки не существует";
    }
}
console.log(`${definitionGrade(0)}`);
