const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzExNTZjZTUxNWU5YWE4NmQwYjEyZjBhYjU5YzI1NyIsInN1YiI6IjY0NjFmMGMxZGJiYjQyMDExOWY1NzVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xAvION7fKBZGpqmFCzLIE5__EHPS9toGgUeKRexqp-w'
    }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=fr-Fr', options)
    .then(response => response.json())
    .then(data => {
        const listMovies = data.results;
        listMovies.map((item) => {
            const title = item.title;
            const pathImg = "https://image.tmdb.org/t/p/w500"
            const image = pathImg + item.poster_path;
            const movie = `<li><img src="${image}"><h2>${title}</h2></li>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
    .catch(err => console.error(err));

