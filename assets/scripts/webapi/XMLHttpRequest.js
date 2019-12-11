//To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request. After the transaction completes, the object will contain useful information
//such as the response body and the HTTP status of the result.
function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener); //Not supported in all the browsers
oReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
oReq.send();
