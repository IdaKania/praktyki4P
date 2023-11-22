const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
const compose2 = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

const deleteSpaces = (x) => x.map((book) => book.title.split(' ').join(''));
const titleLength = (x) => x.map((book) => book.length);
const evenNumbers = (x) => x.filter((book) => book.pages%2==0);
const bookGenreEndingWithY = (x) => x.filter((book) => book.genre.endsWith('y'));
const raitingOverFive = (x) => x.filter((book) => book.rating>5) ; 
const oddNumbers = (x) => x.filter((book) => book.pages%2==1);
const containsNumber = (x) => x.filter((book) => /\d/.test(book.title));
const booksSort = (x) => x.sort((a, b) => a.title.length - b.title.length);
const theSecondLongest = (x) => x[x.length - 2];
const howMany = (x) => x.length;
const showTitle = (x) => x.title;

const z6 = compose(titleLength,deleteSpaces,evenNumbers,bookGenreEndingWithY); 
const z7 = compose(howMany,oddNumbers,containsNumber,raitingOverFive);
const z8 = compose(showTitle,theSecondLongest,booksSort);

books.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
});


console.log(z6(books));
console.log(z7(books));
console.log(z8(books));