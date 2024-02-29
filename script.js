// Input variables
let songName = document.querySelector(".song-name");
let artists = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

let add = document.querySelector(".add");
let plusButton = document.querySelector(".plusSym");

// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");
let displayadd=document.querySelector(".form");


// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let image = [
"https://media.pitchfork.com/photos/5cd0900c5a46c21b62097a79/16:9/w_3632,h_2043,c_limit/Tyler-the-Creator-IGOR.jpeg"]
let songNames = [ "I THINK"]
let artist = ["Tyler, The Creator"]
let songLinks = [ "https://www.youtube.com/watch?v=rkRdgFvuiYk"]


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
// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.
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



// Event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

//this is for the plus button that makes the form appear and disappear when clicked 
plusButton.addEventListener("click",function(){

  displayadd.style.display="block"
});
plusButton.addEventListener("dblclick",function(){

  displayadd.style.display="none"
});

displaySongInfo();
