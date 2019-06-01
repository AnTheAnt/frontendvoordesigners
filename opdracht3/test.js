for (i in jsonObj){
  var movie = jsonObj[i];
  var myArticle = document.createElement('article');
  var myH2 = document.createElement('h2');
  var myP1 = document.createElement('p');
  var myCover = document.createElement('section');
  var cover = jsonObj[i].cover;
  for (var a = 0; a < cover.length; a++){
    var img = document.createElement("img");
    img.src = cover[a].url;
    myCover.appendChild(img);
  }
  // img.src = "https://m.media-amazon.com/images/M/MV5BNTQ3OTkwNTgyN15BMl5BanBnXkFtZTcwNTAzOTAzOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg";


  myH2.textContent = movie['title'];
  // myImg.textContent = 'cover';
  myP1.textContent = 'genres';

  myArticle.appendChild(myH2);
  // myArticle.appendChild(myImg);
  myArticle.appendChild(myP1);
  // console.log(document.images[0].src);

  section.appendChild(myArticle);
  console.log(movie['genres']);


}
}
