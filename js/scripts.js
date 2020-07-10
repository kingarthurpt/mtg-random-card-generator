const timer = 30000;
const url = "https://api.scryfall.com/cards/random";

setInterval(startLoading, timer);

document.body.onload = startLoading();

function startLoading() {
  document.getElementById("loader").style.visibility = "visible";
  getCard();
}

function stopLoading() {
  document.getElementById("loader").style.visibility = "hidden";
}

function changeImage(url) {
  document.getElementById("pic").style.backgroundImage = "url('" + url + "')";
}

function getCard() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.addEventListener("load", function() {

    const response = JSON.parse(xhr.response);

    changeImage(response.image_uris.art_crop);
    // document.getElementById("pic").style.backgroundImage = "url('"+response.image_uris.art_crop+"')";
    // document.getElementById("pic").src = response.image_uris.art_crop;
    // document.getElementById("pic").src = response.image_uris.border_crop;
    // document.getElementById("pic").src = response.image_uris.normal;
    
    console.log(response);

    stopLoading();
  });
  xhr.send();
}
