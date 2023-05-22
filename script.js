// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

var allTimer = 0;
var anyTimer = 0;

const outputAll = document.querySelector("#output-all");
const outputAny = document.querySelector("#output-any");

const all = async function () {
  while (true) {
    allTimer++;
    const promise = await Promise.all(
      apiUrls.map((val) => {
        return fetch(val);
      })
    );
    outputAll.textContent = allTimer;
    return promise;
  }
};

const any = async function () {
  while (true) {
    anyTimer++;
    const promise = await Promise.any(
      apiUrls.map((val) => {
        return fetch(val);
      })
    );
    outputAny.innerText = anyTimer;
    return promise;
  }
};

all();
any();

// You can write your code here
