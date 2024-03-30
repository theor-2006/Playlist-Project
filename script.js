// Input variables
let songName = document.querySelector(".song-name");
let artists = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");
let add = document.querySelector(".add");
let plusButton = document.querySelector(".plusSym");

// Task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");
let displayadd=document.querySelector(".form");

// Task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqm-cLTZTKZe5PcVuXQOvWqn3pqBAev1yMe_WzJrrVKw&s","https://upload.wikimedia.org/wikipedia/en/7/7b/AmericanDream.jpeg", "https://upload.wikimedia.org/wikipedia/en/8/8b/Future_-_Life_Is_Good.png", "https://media.pitchfork.com/photos/5929fbff0c2bba1b7de03f1a/1:1/w_450%2Cc_limit/2d538998.jpg", "https://audiok.ir/wp-content/uploads/2021/12/IMG_20211216_160354.jpg"]
let songNames = [ "I THINK", " all of me", " Life Is Good", " A.D.H.D", "The Color Violet"]
let artist = ["Tyler The Creator", " 21 Savage", " Future, Drake", " Kendrick Lamar", "Tory Lanez"]
let songLinks = [ "https://www.youtube.com/watch?v=rkRdgFvuiYk", "https://www.youtube.com/watch?v=UpYb4C2--UY", "https://www.youtube.com/watch?v=l0U7SxXHkPY", "https://www.youtube.com/watch?app=desktop&v=QjlFqgRbICY", "https://www.youtube.com/watch?v=07fhkAoCnig"]

//math.random

function addSongInfo() {
  let ImageEntry =document.querySelector(".image").value;
  image.push(ImageEntry);

  let songEntry =document.querySelector(".song-name").value;
  songNames.push(songEntry);

  let artistEntry =document.querySelector(".artist").value;
  artist.push(artistEntry);

  let linkEntry = document.querySelector(".song-link").value;
  songLinks.push(linkEntry);
}

/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}

function displaySongInfo() {
  emptyDisplay()
  
// Task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
for(let imageNum=0; imageNum<image.length; imageNum++) {
  displayImage.insertAdjacentHTML("beforeend",`<img src="${image[imageNum]}">`);
}

  for(let songs=0; songs<songNames.length; songs++){
    displaySong.insertAdjacentHTML("beforeend","<p>"+songNames[songs]+"</p>");
  }

  for(let art=0; art<artist.length; art++){
    displayArtist.insertAdjacentHTML("beforeend","<p>"+artist [art]+"</p>");
  }

  for(let link=0; link<songLinks.length; link++){
    displayLink.insertAdjacentHTML("beforeend", "<a href="+songLinks[link]+">"+"play"+"</a>");
  };
}

//Add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

//Plus button
plusButton.addEventListener("click",function(){
  displayadd.style.display="block"
});
plusButton.addEventListener("dblclick",function(){
  displayadd.style.display="none"
});

displaySongInfo();
