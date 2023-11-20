const promise = new Promise((resolve, reject) => { //zad9
    setTimeout(() => {
        var a = 10;

        if (a == 10) {
            resolve("Udało się!");
        } else {
            reject("Nie udało się");
        }

    }, 5000);
});

promise.then((message) => {
    console.log(message);
});
// ----------------------------------------------------------------
const multiplyAsync = (x, y) => { //zad10
    const promise = new Promise((resolve, reject) => {
        if((typeof x === "number") && (typeof y === "number")) {
            resolve("Udało się!");
        } else {
            reject("Nie udało się");
        }
    }, console.log(x*y))

    promise.then((message) => {
        console.log(message);
    });
}

const show = () => {
    multiplyAsync(10,"20");
}
show();
// ----------------------------------------------------------------
const get = (url) => { //zad11
    return fetch(url)
    .then(response => {
        if(response.status==200) {
            return response.json();
        }else{
            console.log("nie działa");
        }
      })
}

get('https://jsonplaceholder.typicode.com/posts').then(response => {
    for(var x=0; x<response.length; x++){
        const { title, body } = response[x];
        console.log(title, body);
    }
});