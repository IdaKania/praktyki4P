function kalkulator() {
    const liczba1 = parseFloat(document.getElementById('liczba1').value);
    const liczba2 = parseFloat(document.getElementById('liczba2').value);
    const dzialanie = document.getElementById('dzialanie').value;
    let wynik;

    if(dzialanie === 'dodaj') {
        wynik = liczba1 + liczba2;
    }

    else if(dzialanie === 'odejmij') {
        wynik = liczba1 - liczba2;
    }

    else if(dzialanie === 'pomnoz') {
        wynik = liczba1 * liczba2;
    }

    else if(dzialanie === 'podziel') {
        if(liczba2 === 0) {
            wynik = "Blad, nie wolno dzielic przez zero";
        }
        else {
            wynik = liczba1 / liczba2;
        }
    }
    document.getElementById('wynik').innerText = wynik;
}