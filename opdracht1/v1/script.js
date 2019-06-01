// var button = document.querySelector(".btn-2"); // Assumes element with id='button'
//
//
// button.onclick = function() {
//     console.log("click!")
//       var div = document.querySelector('meerinfo');
//       if (div.style.display !== 'none') {
//         div.style.display = 'none';
//     }
//       else {
//         div.style.display = 'inline-block';
//     }
// };

var articleList = document.getElementsByTagName('article');

for (var i = 0; i<articleList.length; i++) {
  articleList[i].querySelector(".btn-2").addEventListener('click', updateMoreInfo);
      console.log("articleList");
}

function updateMoreInfo() {
  var meerInfo = this.parentNode.querySelector(".meerinfo");
  if (meerInfo.style.display === "none") {
    meerInfo.style.display = "block";
  } else {
    meerInfo.style.display = "none";
  }
}
