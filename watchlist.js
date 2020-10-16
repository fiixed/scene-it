document.addEventListener('DOMContentLoaded', () => {
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    
    let renderMovies = (movieArray) => {
        let movieHTML = movieArray.map((currentMovie) => {
             return `<div class="card movie">
            <img class="card-img-top poster" src="${currentMovie.Poster}" alt="" srcset="" />
            <div id="heading">
            <h5 class="card-title title">${currentMovie.Title}</h5>
            <h6 class="release-date">${currentMovie.Year}</h6>
            </div>
            <button href="#" class="btn btn-primary add"  onclick="saveToWatchlist('${currentMovie.imdbID}')">Add!</button>
          </div>`;
        });


        return movieHTML.join("");
        
    };

    document.querySelector(".movies-container").innerHTML = renderMovies(watchlist);

});