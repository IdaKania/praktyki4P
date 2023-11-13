function palindrome(form){
    let text2 = form.text.value.toLowerCase();
    let string1 = "";
    for (let x = text2.length - 1; x >= 0; x--) {
      string1 += text2[x];
    }
    let answer = "";
    if(text2 === string1) {
      answer= "Tekst jest palindromem";
    }
    else {
      answer = "Tekst nie jest palindromem";
    }
    document.getElementById("z2").innerHTML = answer;
}