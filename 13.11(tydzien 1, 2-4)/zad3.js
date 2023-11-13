function tab(form){
    let tab = form.txt.value.toLowerCase().split(",");
    let answer = "";
    let num = tab[0].charCodeAt(0);
    if (num >= 48 && num <= 57) {
        let a = parseInt(tab[0]);
        let b = parseInt(tab[0]);
        for (let i = tab.length - 1; i >= 0; i--) {
          let tablica = parseInt( tab[i]);
          if (tablica > a) {
              b = a;
              a = tablica;
          }
          else if (tablica == a){
              //nic nie zrobi
          }
          else if (tablica > b) {
              b = tablica;
          }
        }
      answer = b + " to jest liczba";
    } 
    else if (typeof tab[0] === "string") {
      let tab2 = "";
      let tab1 = tab[0];
      for (let i = tab.length - 1; i >= 0; i--) {
        if (tab[i].length > tab1.length) {
          tab2 = tab1;
          tab1 = tab[i];
        } else if (tab[i].length > tab2.length) {
          tab2 = tab[i];
        }
      }
      answer = tab2 + " to jest string";
    } 
    else answer = "Błąd";
    document.getElementById("z3").innerHTML = answer;
}