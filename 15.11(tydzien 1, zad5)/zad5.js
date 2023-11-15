const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const concatFun = (arrA, arrB) => arrA.concat(arrB); //zad1

const reverseFun = (numbers2) => { //zad2
    numbers2.reverse();
    return numbers2[0];
}
const filterFun = arr2.filter( //zad3
    (x) => x.length <= 5
); 

const reduceFun = numbers.reduce( //zad4
    (num1, num2) => num1 + num2
);

const mapFun = numbers.map( //zad5
    (x) => x**2+3
); 

const filterFunDod = numbers.filter( //zad1dod
    (x) => x % 2 == 0
); 

const reduceFunDod = (num) => num.length === 1 ? num[0] : Math.min(num[0], findMinRecursive(num.slice(1)));
const minNumber = findMinRecursive(numbers);
console.log(minNumber);

function show() {
    document.getElementById("wynik1").innerHTML = concatFun(arr1, arr2);
    document.getElementById("wynik2").innerHTML = reverseFun(numbers);
    document.getElementById("wynik3").innerHTML = filterFun;
    document.getElementById("wynik4").innerHTML = reduceFun;
    document.getElementById("wynik5").innerHTML = mapFun;
    document.getElementById("dodatkowe").innerHTML ="--- ZADANIA DODATKOWE ---";
    document.getElementById("wynik1dod").innerHTML = filterFunDod;
}