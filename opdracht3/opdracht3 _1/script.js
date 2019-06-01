var header = document.querySelector('header');
var section = document.querySelector('section');
console.log(section);

//both section and header are now stored in a  variable
var reqURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'
var request = new XMLHttpRequest();

request.open('get', reqURL);
//setting the response type to json to know that server will be returning json
request.responseTpe = 'json';
request.send();

request.onload = function() {
  var movies = JSON.parse(request.response);
  // console.log("request is geladen: ",request.response);
  populateHeader(movies);
  showMovies(movies);
}

function populateHeader(jsonObj){
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj.length + ' movies for days';
  header.appendChild(myH1);
}

//creating the stories
function showMovies(jsonObj){
  // console.log(jsonObj.length);


  for (i in jsonObj){
    var movie = jsonObj[i];
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myP1 = document.createElement('p');
    var myP2 = document.createElement('p');
    var myImg = document.createElement('img');
    // var myList = document.createElement('ul');
    var myList = document.createElement('ul');

    myH2.textContent = movie['title'];
    myH3.textContent = movie['genres'];
    myP1.textContent = movie['plot'];
    myP2.textContent = movie['release_date'];
    myImg.src = movie['cover'];
    reviews = movie['reviews'];
    for (j in reviews){
      review = reviews[j];
      var listItem = document.createElement('li');
      listItem.textContent = review['score'];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myP1);
    myArticle.appendChild(myP2);
    myArticle.appendChild(myImg);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
    console.log(movie['genres']);

  }
}
