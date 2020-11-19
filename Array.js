const colection = [];

function serthMinElement(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let minElement = colection[0];
    for(let i = 0; i < colection.length; i++) {
        if(minElement > colection[i]) {
            minElement = colection[i];
        }
    }
    return minElement;
}
console.log(serthMinElement(colection));

function serthMaxElement(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let maxElement = colection[0];
    for(let i = 0; i < colection.length; i++) {
        if(maxElement < colection[i]) {
            maxElement = colection[i];
        }
    }
    return `максимальный элемент массива ${maxElement}`;
}
console.log(serthMaxElement(colection));

function serthMinIndex(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let minElement = colection[0];
    let minIndex = 0;
    for(let i = 0; i < colection.length; i++) {
        if(minElement > colection[i]) {
            minElement = colection[i];
            minIndex = i;
        }
    }
    return `индекс минимального элемента ${minIndex}`;
}
console.log(serthMinIndex(colection));

function serthMaxIndex(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let maxElement = colection[0];
    let maxIndex = 0;
    for(let i = 0; i < colection.length; i++) {
        if(maxElement < colection[i]) {
            maxElement = colection[i];
            maxIndex = i;
        }
    }
    return `индекс максимального элемента ${maxIndex}`;
}
console.log(serthMaxIndex(colection));

function sumOddElement(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    
    let sumElement = 0;
    for(let i = 0; i < colection.length; i++) {
        if(colection[i] % 2 >0) {
            sumElement += colection[i];
        }
    }
    return `сумма не четных элементов равна ${sumElement}`
}
console.log(sumOddElement(colection));

function reversArray(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let reversColection = "";
    for(let i = colection.length - 1; i >= 0; i--) {
        reversColection += (colection[i] + " "); 
    }
    return ` реверс массива ${reversColection}`;
}
console.log(reversArray(colection));

function sumOddIndex(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let sumElement = 0;
    for(let i = 0; i < colection.length; i++) {
        if(i % 2 > 0) {
            sumElement += colection[i];
        }
    }
    return `сумма элементов с нечетным индексом равна ${sumElement}`;
}
console.log(sumOddIndex(colection));

function reversHalf(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let half = "";
    const halfColection = Math.ceil(colection.length / 2);
    if(colection.length % 2 === 0) {
        for(let i = 0; i < colection.length; i++) {
           if(i < colection.length / 2) {
               half += colection[i + halfColection] + " ";
           } else {
                half += colection[i - halfColection] + " ";
           }
        }
    } else {
        for(let i = 0; i < colection.length; i++) {
            if(i < halfColection - 1) {
                half += colection[i + halfColection] + " ";
            } else if(i > halfColection - 1) {
                half += colection[i - halfColection] + " ";
            } else {
                half += colection[i] + " ";
            }
        }
    }
    return `смена мест ${half}`;
}
console.log(reversHalf(colection));

function sortBubble(colection) {
    if(!Array.isArray(colection)) {
        return "аргумент не являеться массивом";
    }
    let temp = 0;
    for(let i = 0; i < colection.length; i++) {
        for(let j = i + 1; j < colection.length; j++) {
            if(colection[i] > colection[j]) {
                temp = colection[i];
                colection[i] = colection[j];
                colection[j] = temp;
            }
        }
    }
    return `отсортированный массив bubble ${colection}`;
}
console.log(sortBubble(colection));

function sortSelect(colection) {
    for (let i = 0, l = colection.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (colection[indexMin] > colection[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [colection[i], colection[indexMin]] = [colection[indexMin], colection[i]];
        }
    }
    return `сортированный масив select ${colection}`;
}
console.log(sortSelect(colection));

module.exports = { 
    serthMinElement,
    serthMaxElement,
}