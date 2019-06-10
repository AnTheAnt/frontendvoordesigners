// var person = {
//   name: "Brad",
//   age: 35,
//   adress:{
//     street: "5 main st",
//     city: "Boston"
//   },
//   children:["Brixie", "Klaus"]
// }
//
// var people = [
//   {
//     name: "Brad",
//     age: 23
//   },
//   {
//    name: "Jane",
//    age: 27
//  },
//  {
//    name: "Emily",
//    age: 34
//  }
// ];
//
// var output = "";
//
// for (var i = 0; i < people.lenght;i++) {
//     // console.log(people[i]);
//     output += '<li>' +people[i].name+'</li>';
// }
//
// document.getElementById('people').innerHTML = output;

// sending a get request

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // // Typical action to be performed when the document is ready:
       // document.getElementById("demo").innerHTML = xhttp.responseText;
       console.log(shttp.responseText);
       // you can also load this from a live server
    }
};
xhttp.open("GET", "people.json", true);
xhttp.send();
