/*jshint esversion: 8 */
document.addEventListener('DOMContentLoaded',()=> {
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
    document.getElementById('search-form').addEventListener('submit', (event) => {
        event.preventDefault();
        let searchString = $('.search-bar').val();
        let urlEncodedSearchString = encodeURIComponent(searchString);
        (async () => {
            try {
              const response = await axios.get(`http://www.omdbapi.com/?apikey=27f8b4bd&s=${urlEncodedSearchString}`);
              console.log(response.data);
              document.querySelector(".movies-container").innerHTML = renderMovies(response.data.Search);
            } catch (error) {
              console.log(error.response.body);
            }
          })();
        
    });

    saveToWatchlist = (imdbID) => {
        
        let movie = movieData.find((currentMovie) => {
            return currentMovie.imdbID == imdbID;
        });

        

        let watchlistJSON = localStorage.getItem('watchlist');
        let watchlist = JSON.parse(watchlistJSON);

        if (!watchlist) watchlist = [];

        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON); 

    };
});