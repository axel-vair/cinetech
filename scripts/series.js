const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzExNTZjZTUxNWU5YWE4NmQwYjEyZjBhYjU5YzI1NyIsInN1YiI6IjY0NjFmMGMxZGJiYjQyMDExOWY1NzVjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xAvION7fKBZGpqmFCzLIE5__EHPS9toGgUeKRexqp-w'
    }
};

fetch('https://api.themoviedb.org/3/trending/tv/day?language=fr-FR', options)
    .then(response => response.json())
    .then(data => {
        const listSeries = data.results;
        listSeries.map((item) => {
            const title = item.name;
            const pathImg = "https://image.tmdb.org/t/p/w500"
            const image = pathImg + item.poster_path;
            const serie = `<li><img src="${image}"><h2>${title}</h2></li>`
            document.querySelector('.series').innerHTML += serie;
        })
    })
    .catch(err => console.error(err));