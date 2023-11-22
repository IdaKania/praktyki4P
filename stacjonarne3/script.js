var myFetch = new Array();
let currentIndex = 0;
var url = 'https://jsonplaceholder.typicode.com/todos'

const todos = () => {
    url = 'https://jsonplaceholder.typicode.com/todos';
    func();
}

const posts = () => {
    url = 'https://jsonplaceholder.typicode.com/posts';
    func();
}

const func = () => {
    fetch(url) 
        .then((response) => response.json())
        .then((json) => przypisz(json))
}

func();

const przypisz = (arr) => {
    myFetch = arr;
    console.log(myFetch);
} 

const funPosts = (el) => (id) => {
    return document.getElementById(el).innerHTML = myFetch[id].id;
}

const kolejny = () => {
    if(currentIndex>100) {
        document.getElementById('show').innerHTML = "Za duzy index";
    }
    else {
        currentIndex++;
        console.log(myFetch);
        document.getElementById('show').innerHTML = myFetch[currentIndex].title;
        funPosts('todosShow')(currentIndex);
    }
}

const poprzedni = () => {
    if(currentIndex<0) {
        document.getElementById('show').innerHTML = "Za maly index";
    }
    else {
        currentIndex--;
        document.getElementById('show').innerHTML = myFetch[currentIndex].title;
        funPosts('todosShow')(currentIndex);
    }
}