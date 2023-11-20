const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

const all = () => {
    console.log(z6(books));
    console.log(z7(books));
    console.log(z8(books));
}

const usuniecieSpacji = (text) => text.split(' ').join('');

const ostatniaLitera = (text) => usuniecieSpacji(text).slice(-1).toLowerCase();

const parzystosc = (num1, num2) => num1%2==num2;

const czyWieksze = (num1, num2) => num1>num2;

const iloscLiter = (text) => text.length;

const czyZawieraCyfre = (text) => /\d/.test(text);


const z6 = (tab) => {
    console.log("ZADANIE 1");
    let booksTitles = [];
    let totalQuantity = 0;
    for(var x=0; x<tab.length; x++) {
        if(ostatniaLitera(tab[x].genre) === 'y') {
            if(parzystosc(tab[x].pages, 0)){
                totalQuantity += usuniecieSpacji(tab[x].title).length;
                booksTitles.push(usuniecieSpacji(tab[x].title).length);
            }
        }
    }
    console.log("Ilosc zsumowana: " + totalQuantity);
    return "Ilość osobno: " + booksTitles;
}

const z7 = (tab) => {
    console.log("ZADANIE 2");
    var quantity=0;
    for(var x=0; x<tab.length; x++) {
        if(czyWieksze(tab[x].rating, 5) == 1) {
            if(parzystosc(tab[x].pages, 1)) {
                if(czyZawieraCyfre(tab[x].title) == 1) {
                    quantity++;
                }
            }
        }
    }
    return "Ilosc: " + quantity;
}

const z8 = (tab) => {
    console.log("ZADANIE 3");
    var letters1 = 0;
    var letters2 = 0;
    var theLongest1 = "";
    var theLongest2 = "";
    for(var x=0; x<tab.length; x++) {
        if(tab[x].title.length > letters1) {
            letters1 = letters2;
            letters2 = tab[x].title.length;
            theLongest1 = theLongest2;
            theLongest2 = tab[x].title;
        }
    }
    return "słowo: " + theLongest2 + ", \nliter: " + letters2;
}

all(); //wywołanie wszystkich trzech funkcji