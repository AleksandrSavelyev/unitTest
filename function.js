let numb;
function getDayName(numb){
    let answer;
    if ((!numb)){
        answer = "Данные не были введены либо был введен ноль";

        return answer;
    } 
    if(typeof numb !== "number"){
        answer = "Данные не соответствуют условию задачи";

        return answer;
    }

    switch(numb){
        case 1 :
            return "Понедельник";
        case 2 :
            return "Вторник";
        case 3 :
            return "Среда";
        case 4 :
            return "Четверг"; 
        case 5 :
            return "Пятница";
        case 6 :
            return "Суббота";  
        case 7 :
            return "Воскресенье";
        default :
            return "В неделе 7 дней. Введите число в диапазоне 1-7."; 
    }

}
console.log(getDayName(numb));



function getDecimal(numb){

    switch(numb){
        case 1 :
            return "Десять";
        case 2 :
            return "Двадцать";
        case 3 :
            return "Тридцать";
        case 4 :
            return "Сорок"; 
        case 5 :
            return "Пятьдесят";
        case 6 :
            return "Шестьдесят";  
        case 7 :
            return "Семьдесят";
        case 8 :
            return "Восемьдесят";
        case 9 :
            return "Девяносто";
    }

}
function getUnit(numb){

    switch(numb){
        case 1 :
            return "Один";
        case 2 :
            return "Два";
        case 3 :
            return "Три";
        case 4 :
            return "Четыре"; 
        case 5 :
            return "Пять";
        case 6 :
            return "Шесть";  
        case 7 :
            return "Семь";
        case 8 :
            return "Восемь";
        case 9 :
            return "Девять";
    }

}
function getHundreds(numb){

    switch(numb){
        case 1 :
            return "Сто";
        case 2 :
            return "Двести";
        case 3 :
            return "Триста";
        case 4 :
            return "Четыреста"; 
        case 5 :
            return "Пятьсот";
        case 6 :
            return "Шестьсот";  
        case 7 :
            return "Семьсот";
        case 8 :
            return "Восемьсот";
        case 9 :
            return "Девятьсот";
    }

}
function getDecimal2(numb){

    switch(numb){
        case 11 :
            return "Одиннадцать";
        case 12 :
            return "Двенадцать";
        case 13 :
            return "Тринадцать";
        case 14 :
            return "Четырнадцать"; 
        case 15 :
            return "Пятнадцать";
        case 16 :
            return "Шестнадцать";  
        case 17 :
            return "Семьнадцать";
        case 18 :
            return "Восемнадцать";
        case 19 :
            return "Девятнадцать";
    }

}

function getNumberName(numb){
    let answer;
    if ((!numb)){
        answer = "Данные не были введены либо был введен ноль";

        return answer;
    } 
    if(typeof numb !== "number"){
        answer = "Данные не соответствуют условию задачи";

        return answer;
    }

    let numb_string_format = String(numb);
    //console.log(numb_string_format);
    let how_long = numb_string_format.length;
    //console.log(how_long);
    let result = '';
    //console.log(numb_string_format[1])
    switch(how_long){
        case 1 :
            result = getUnit(numb);

            return result;
        case 2 :
            if(+numb_string_format[0]!== 1){
               result = getDecimal2(numb);
            }else{
               result = getDecimal(+numb_string_format[0]) + " " + getUnit(+numb_string_format[1]); 
            }

            return result;
        case 3 :
            result = getHundreds(+numb_string_format[0]) + " " + getDecimal(+numb_string_format[1]) + " " + getUnit(+numb_string_format[2]);

            return result;
        default :
            return "Введенное число не входит в диапазон 0-999"; 
    }
}
console.log(getNumberName(555));
//console.log(getHundreds(5));

function switchNumber(numb){

    switch(numb){
        case "ноль":
            return 0;
        case "десять":
            return 10;
        case "двадцать":
            return 20;
        case "тридцать":
            return 30;
        case "сорок" :
            return 40; 
        case "пятьдесят":
            return 50;
        case "шестьдесят":
            return 60;  
        case "семьдесят":
            return 70;
        case "восемьдесят":
            return 80;
        case "девяносто":
            return 90;
        case "один" :
            return 1;
        case "два" :
            return 2;
        case "три" :
            return 3;
        case "четыре" :
            return 4; 
        case "пять" :
            return 5;
        case "шесть" :
            return 6;  
        case "семь" :
            return 7;
        case "восемь" :
            return 8;
        case "девять" :
            return 9;
        case "сто" :
            return 100;
        case "двести" :
            return 200;
        case "триста" :
            return 300;
        case "четыреста" :
            return 400; 
        case "пятьсот" :
            return 500;
        case "шестьсот" :
            return 600;  
        case "семьсот" :
            return 700;
        case "восемьсот" :
            return 800;
        case "девятьсот" :
            return 900;
        case "одиннадцать" :
            return 11;
        case "двенадцать" :
            return 12;
        case "тринадцать" :
            return 13;
        case "четырнадуать" :
            return 14;
        case "пятнадцать" :
            return 15;
        case "шестнадцать" :
            return 16;
        case "семнадцать" :
            return 17;
        case "восемнадцать" :
            return 18;
        case "девятнадцать" :
            return 19;
        default:
            return 0;
    }

}

function getNumber(numb){
    let answer;
    if ((!numb)){
        answer = "Данные не были введены либо был введен ноль";

        return answer;
    } 

    let index;
    let result = 0;
    index = numb.indexOf(" ");
    if(index !== -1){
        for(let i = 0; (numb.indexOf(" ") !== -1) ; i++){
            index = numb.indexOf(" ");
            let newNumb = numb.substr(0, index);
            if (newNumb === "ноль"){
                answer = "введено некорректное число"
        
                return answer;
            } 
            // console.log(newNumb);
            result = result + switchNumber(newNumb);
            //console.log(result, 'newNumb');

            numb = numb.substr(index + 1);
            // console.log(numb);
            
            result = result + switchNumber(numb);

            //console.log(result, 'result');
        }

        //return result;
    }else{

        result = result + switchNumber(numb);
    }
    
    return result;

}
console.log(getNumber("семьсот восемьдесят один"));


function findDistance(x1, x2, y1, y2){
    let answer;
    if (!x1 && x1 !== 0 || !x2 && x2 !== 0 || !y1 && y1 !== 0 || !y2 && y2 !== 0){
        answer = "Данные не были введены корректно";

        return answer;
    } 
    if(typeof x1 !== "number" || typeof y1 !== "number" || typeof x2 !== "number" || typeof y2 !== "number"){
        answer = "Данные не соответствуют условию задачи";

        return answer;
    }
    let formula = (x2 - x1 ) ** 2 + (y2 - y1) ** 2

    let distance = findSqrt(formula);
    
    return distance;

}
function findSqrt(numb){

    for(let i = 1; i <= numb / 2; i ++){
        if (i * i > numb){
          return i - 1;
    
        }else if(i * i === numb){
    
         return i;
        }
    }
}
console.log(findDistance(8, 0, -5, 6));