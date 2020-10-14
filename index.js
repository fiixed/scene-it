document.addEventListener('DOMContentLoaded',()=> {
    let renderMovies = (movieArray) => {
        let movieHTML = movieArray.map((currentMovie) => {
             return `<div class="card movie">
            <img class="card-img-top poster" src="${currentMovie.Poster}" alt="" srcset="" />
            <div id="heading">
            <h5 class="card-title title">${currentMovie.Title}</h5>
            <h6 class="release-date">${currentMovie.Year}</h6>
            </div>
            <a href="#" class="btn btn-primary add">Add!</a>
          </div>`;
        });
        return movieHTML.join("");
        
        
    };
    document.querySelector(".movies-container").innerHTML = renderMovies(movieData);
});