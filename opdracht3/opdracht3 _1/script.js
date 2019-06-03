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
    // var myList = document.createElement('ul');
    var button = document.createElement('button');
    var myList = document.createElement('ul');


// give the elements a value of..
    myH2.textContent = 'Titel: ' + movie['title'];
    myH3.textContent = 'Genre: ' + movie['genres'];
    myP1.textContent = movie['plot'];
    myP2.textContent = 'Release date: ' + movie['release_date'];
    myImg.src = movie['cover'];
    button.innerHTML = ['meer info'];

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
    }

// shows directors. Later created than the button. Therefore the value l
  directors = movie['directors'];
      for (l in directors){
        director = directors[l];
        var listItem3 = document.createElement('li');
        listItem3.textContent = 'Director: ' + director['name'];
        myList.appendChild(listItem3);
      }



// button to hide/show more info
    var articleList = document.getElementsByTagName('article');
    console.log(articleList);

    var buttons = document.querySelectorAll('button');
    for (var k = 0; k <buttons.length; k++) {
      buttons[k].addEventListener('click', updateMoreInfo);
      console.log('click');
    }

    // var toggle = function (meerInfo){
    //   var meerInfo = this.parentNode.querySelector('ul');
    //   meerInfo.classList.toggle('visible');
    //
    // }

    function updateMoreInfo() {
      var meerInfo = this.parentNode.querySelector('ul');
      if (meerInfo.style.visibility == 'hidden') {
        meerInfo.style.visibility = 'visible';
      } else {
        meerInfo.style.visibility = 'hidden';
      }
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myH3);
    myArticle.appendChild(myP1);
    myArticle.appendChild(myP2);
    myArticle.appendChild(myImg);
    myArticle.appendChild(myList);
    myArticle.appendChild(myList);
    myArticle.appendChild(myList);
    myArticle.appendChild(button);

    section.appendChild(myArticle);
    console.log(movie['genres']);

  }
}
