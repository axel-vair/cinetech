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
            const movie = `<li><img class="poster" src="${image}" alt="${title}"></li>`
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
            const pathImgSeries = "https://image.tmdb.org/t/p/w500"
            const imageSeries = pathImgSeries + item.poster_path;
            const serie = `<li><img class="poster" src="${imageSeries}" alt="${titleSeries}"></li>`
            document.querySelector('.trending-series').innerHTML += serie;
        })
    })
    .catch(err => console.error(err));

// Tag search input
let searchBar = document.getElementById('search');

// Listening searchbar on keyup
searchBar.addEventListener('keyup', () => {
    let keypress = searchBar.value;
    fetch(`https://api.themoviedb.org/3/search/multi?query=${keypress}&include_adult=false&language=fr-FR&page=1`, options)
        .then(response => response.json())
        .then(data => {
            const search = data.results;
            search.map((item) => {
                const titleSearch = item.title ? item.title : item.name;
                const pathImgSearch = "https://image.tmdb.org/t/p/w500"
                const imageSearch = pathImgSearch + item.poster_path;
                const searchValue = `<li><img class="poster" src="${imageSearch}" alt="${titleSearch}"></li>`
                document.querySelector('.search').innerHTML += searchValue;
            })

})})

