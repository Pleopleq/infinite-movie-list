function createMovie(props){
    const element = document.createElement("div")
    element.innerHTML = 
    `
    <h2>${props.original_title}</h2>
    <img src="https://image.tmdb.org/t/p/w500/${props.poster_path}" width="200px">
    `
    return element
}

function showMovies(movies) {
    const container = document.createElement("div")
    const mainContainer = document.querySelector(".fetch-movies")
    const fragment = new DocumentFragment()

    movies.forEach(element => {
        const movie = createMovie(element)
        fragment.appendChild(movie)
    });

    container.appendChild(fragment)
    mainContainer.after(container)
}


document.addEventListener("DOMContentLoaded", (e) => {
    const fetchMovies = document.querySelector(".fetch-btn")
    
    fetchMovies.addEventListener("click", (e) => {
        e.preventDefault()
        fetch("/movies")
        .then(res => res.json())
        .then(json => showMovies(json.results))
    }) 
})