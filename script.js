//1
let arr = [1, 2, 'sd', 13, 'ds'];

let number = arr.map(string => parseInt(string));
console.log(number);

let numbers = [];

number.forEach(
    (elem) => {
        if (isNaN(elem) == false) {
            numbers.push(elem)
        }
    }
);
console.log(numbers);

function average(numbers) {
    return numbers.reduce((a, b) => (a + b)) / numbers.length;
}
console.log(average(numbers));

//2 
let x = Number(prompt('введіть перше число' , ''));
let znak = prompt('оберіть дію (+, -, *, /, %, ^ (ступінь ))' , '');
let y = Number(prompt('введіть друге число' , ''));

function removeElement(x, znak, y) {
    if('+' === znak) {
        return (x + y);
    } else if('-' === znak) {
        return (x - y); 
    } else if('*' === znak) {
        return (x * y); 
    } else if('/' === znak) {
        return (x / y); 
    } else if('%' === znak) {
        return (x / 100 * y);
    } else if('^' === znak) {
        return (x ** y); 
    } 
}

console.log(removeElement(x, znak, y));

//3


function arrAdd() {
    let arr = [];
    let amount = prompt("Введите количество массивов в главном массиве");
    for(let i = 0; i < amount; i++) {
        arr.push([]);
        let amount2 = prompt("Введите количество елементов в подмассиве №" + (i));
        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введите текст в подмассиве № " + (j));
            arr[i].push([elem]);
        }
    }
    console.log(arr);
}

console.log(arrAdd());

//4 

function removeElement(text,item) {
    console.log(text);
    console.log(item);
    var it = item.toString();
    console.log(it);
    const itemS = it.split(",").join("|");
    console.log(itemS);
    const itemNew = new RegExp(itemS, "g");
    let newStr = text.replaceAll(itemNew,"");
    console.log(newStr);
}


console.log(removeElement("hello world",['l','d']));