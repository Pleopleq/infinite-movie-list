function getAll(key) {
    const data = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`)
    .then(data => data.json())
    return data
}

document.addEventListener("DOMContentLoaded", (e) => {
    const fetchMovies = document.querySelector(".fetch-btn")
    
    fetchMovies.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(e)
    })
})