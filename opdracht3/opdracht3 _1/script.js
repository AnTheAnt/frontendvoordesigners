
var header = document.querySelector('header');
var section = document.querySelector('section');
var loaderElement = document.querySelector('.loader');
// console.log(section);

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
  loaderElement.classList.add('hide');
} // end of request



function populateHeader(jsonObj){
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj.length + ' Movies to Watch';
  header.appendChild(myH1);
}



//creating the stories
function showMovies(jsonObj){
  // console.log(jsonObj.length);

// creates all the elements
  for (i in jsonObj){
    var movie = jsonObj[i];
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myH3 = document.createElement('h3');
    var myP1 = document.createElement('p');
    var myP2 = document.createElement('p');
    var myImg = document.createElement('img');
    // var myTrailer = document.createElement('video');  api key or such required
    var button = document.createElement('button');
    var myList = document.createElement('ul');


// give the elements a value of..
    myH2.textContent = 'Titel: ' + movie['title'];
    myH3.textContent = 'Genre: ' + movie['genres'];
    myP1.textContent = movie['plot'];
    myP2.textContent = 'Release date: ' + movie['release_date'];
    myImg.src = movie['cover'];
    button.innerHTML = ['more info'];

// shows reviews
    reviews = movie['reviews'];
    for (j in reviews){
      review = reviews[j];
      var listItem = document.createElement('li');
      listItem.textContent = 'Score: ' + review['score'];
      myList.appendChild(listItem);

      var listItem2 = document.createElement('li');
      listItem2.textContent = 'Created at: ' + review['created_at'];
      myList.appendChild(listItem2);
    }//end: for j loop


// shows directors. Later created than the button. Therefore the value l
    directors = movie['directors'];
    for (l in directors){
        director = directors[l];
        var listItem3 = document.createElement('li');
        listItem3.textContent = 'Director: ' + director['name'];
        myList.appendChild(listItem3);
      }//end: for l loop


// shows directors. Later created than the button. Therefore the value l
    actors = movie['actors'];
    for (m in actors){
        actor = actors[m];
        var listItem4 = document.createElement('li');
        listItem4.textContent = 'Actors: ' + actor['actor_name'];
        myList.appendChild(listItem4);
      }//end: for m loop



// button to hide/show more info
    var articleList = document.getElementsByTagName('article');
    var div_container = document.createElement('div');
    div_container.classList.add('foldin');

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myP1);
    myArticle.appendChild(myP2);
    myArticle.appendChild(myImg);
    // myArticle.appendChild(myTrailer); api key or such required
    myArticle.appendChild(button);
    // myArticle.appendChild(myList);
    div_container.appendChild(myList);
    myArticle.appendChild(div_container);
    section.appendChild(myArticle);
  } //end for i loop

  function toggleFunction() {
    var element = this.parentNode.querySelector('div');
    element.classList.toggle('show');
      element.classList.toggle('foldin');

    var btn = this.parentNode.querySelector('button');
    if (btn.innerHTML == 'more info') {
      btn.innerHTML = 'hide info';
    } else {
      btn.innerHTML = 'more info';
    }
  }

  var buttons = document.querySelectorAll('button');
  for (var k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener('click', toggleFunction);
        console.log(toggleFunction);
  } //end: for k loop


} //end: function showMovies











// function myMove() {
//
// }
//
// function updateMoreInfo() {
//   /*
//   var meerInfo = this.parentNode.querySelector('ul');
//   if (meerInfo.style.visibility === 'visible') {
//     meerInfo.style.visibility = 'hidden';
//   } else {
//     meerInfo.style.visibility = 'visible';
//   }
//   */
// }//end: funtion updateMoreInfo
