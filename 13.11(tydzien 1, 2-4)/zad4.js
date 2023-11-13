function bubble(tab){
    for (let i = 0; i < tab.length - 1; i++) {
        for (let j = 0; j < tab.length - i - 1; j++) {
          if (tab[j] > tab[j + 1]) {
            [tab[j], tab[j + 1]] = [tab[j + 1], tab[j]];
          }
        }
      }
      return tab;
}

function anagram() {
    let w1 = document.getElementById("txt1").value.toLowerCase();
    let w2 = document.getElementById("txt2").value.toLowerCase();
    answer = "jest anagramem";
    if (w1.length !== w2.length) {
        answer = "nie jest anagramem";
    }
    else{
        let sortW1 = w1.split("");
        let sortW2 = w2.split("");
        sortW1 = bubble(sortW1);
        sortW2 = bubble(sortW2);
        for (let i = 0; i < w1.length; i++) {
        if (sortW1[i] !== sortW2[i]) {
            out = "nie jest ";
        }
        }
    }
    document.getElementById("z4").innerHTML=answer;
  }
