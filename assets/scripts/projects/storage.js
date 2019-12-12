const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const storeCookieBtn = document.getElementById("store-cookie-btn");
const retrCookieBtn = document.getElementById("retrieve-cookie-btn");

const storeIndexeddbBtn = document.getElementById("store-indexeddb-btn");
const retrIndexeddbBtn = document.getElementById("retrieve-indexeddb-btn");

const userId = "u123";
const user = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"]
};

//================== Store and retrieve from Local and Session Storage ===================
storeBtn.addEventListener("click", () => {
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extractedId = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);
  if (extractedId) {
    console.log("Got the id - " + extractedId);
  } else {
    console.log("Could not find id.");
  }
});

//================== Store and Retrieve Cookies ========================================
storeCookieBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Max", age: 30 };
  document.cookie = `uid=${userId}; max-age=360`;
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrCookieBtn.addEventListener("click", () => {
  console.log(document.cookie);
  const cookieData = document.cookie.split(";");
  const data = cookieData.map(i => {
    return i.trim();
  });
  console.log(data[1].split("=")[1]); // user value
  
});

//================== Store and retreive from Indexed DB ===================================
let db;

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function(event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) {
  db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function(event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productsStore.add({
      id: "p1",
      title: "A First Product",
      price: 12.99,
      tags: ["Expensive", "Luxury"]
    });
  };
};

dbRequest.onerror = function(event) {
  console.log("ERROR!");
};

storeIndexeddbBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productsStore.add({
    id: "p2",
    title: "A Second Product",
    price: 122.99,
    tags: ["Expensive", "Luxury"]
  });
});

retrIndexeddbBtn.addEventListener("click", () => {
  const productsStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  const request = productsStore.get("p2");

  request.onsuccess = function() {
    console.log(request.result);
  };
});
