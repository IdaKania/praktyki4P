let tablica1 = [1, 2, 3, 6, "Ania",5, 6];
let cyfra = 6;
let wyswietl = "";
for(i=0; i<tablica1.length; i++) {
    if(tablica1[i]==cyfra) {
        wyswietl += tablica1[i];
    }
}
console.log(wyswietl);