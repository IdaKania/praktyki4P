var myFetch = new Array();
let currentIndex = 0;

fetch('https://jsonplaceholder.typicode.com/posts') 
      .then((response) => response.json())
      .then((json) => przypisz(json))

const przypisz = (arr) => {
    myFetch = arr;
    console.log(myFetch)
} 

const kolejny = () => {
    if(currentIndex>100) {
        document.getElementById('show').innerHTML = "Za duzy index";
    }
    else {
        currentIndex++;
        document.getElementById('show').innerHTML = myFetch[currentIndex].title;
    }
}
const poprzedni = () => {
    if(currentIndex<0) {
        document.getElementById('show').innerHTML = "Za maly index";
    }
    else {
        currentIndex--;
        document.getElementById('show').innerHTML = myFetch[currentIndex].title;
    }
}
