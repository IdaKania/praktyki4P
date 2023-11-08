function rekurencja(x,y) {
    if(y<x) return;
    console.log(y);
    rekurencja(x, y-1);
}
let x=3;
let y=10;
console.log(rekurencja(x,y));