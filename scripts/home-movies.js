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
            document.querySelector('.trending-movies').innerHTML += movie;
        })
    })
    .catch(err => console.error(err));



fetch('https://api.themoviedb.org/3/trending/tv/day?language=fr-FR', options)
    .then(response => response.json())
    .then(data => {
        const series = data.results;
        series.map((item) => {
            const titleSeries = item.name;
            console.log(series)
            const pathImgSeries = "https://image.tmdb.org/t/p/w500"
            const imageSeries = pathImgSeries + item.poster_path;
            const serie = `<li><img src="${imageSeries}"><h2>${titleSeries}</h2></li>`
            document.querySelector('.trending-series').innerHTML += serie;
        })
    })
    .catch(err => console.error(err));