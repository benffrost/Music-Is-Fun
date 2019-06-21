import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  let songElement = document.querySelector("#song-list")
  let songs = itunesService.Songs;
  let template = "";
  for (let i = 0; i < songs.length; i++) {
    template += `
            <li class="row border mt-1 py-1">
                <div class="col-2"><img class="img img-fluid" src="${songs[i].albumArt}" alt="" ></div>
                <div class="col-5 text-left">
                    <h5>${songs[i].artist}</h5>
                    <h3>${songs[i].title}</h3>
                    <h5>${songs[i].collection}</h5>
                    <p>${songs[i].price}</p>
                </div>
                <div class="col-5 text-right d-flex align-items-center justify-content-end">
                <div><audio controls>
                <source src="${songs[i].preview}">
                </audio></div>

                </div>
            </li>`
  }

  songElement.innerHTML = template;

  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(itunesService.Songs)

}


//PUBLIC
class ItunesController {
  constructor() {
    itunesService.addSubscriber("songs", drawSongs)
    drawSongs()
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController