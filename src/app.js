let pagination = {
    totalPages: 0,
    currentPage: 1,
}

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
    const mainContainer = document.querySelector(".movies")
    const fragment = new DocumentFragment()
    pagination.currentPage = movies.page
    pagination.totalPages = movies.total_pages
    console.log(pagination)

    movies.results.forEach(element => {
        const movie = createMovie(element)
        fragment.appendChild(movie)
    });
    container.appendChild(fragment)
    mainContainer.appendChild(container)
}

function handleIntersect(entries) {
    if(entries[0].isIntersecting) {
        console.warn("something is intersecting with the viewport")
        if(pagination.currentPage != pagination.totalPages){
            getData(++pagination.currentPage)
        }
        return
    }
}

function getData(page = 1){
    fetch(`/movies/${page}`)
        .then(res => res.json())
        .then(json => showMovies(json)) 
    return
}


document.addEventListener("DOMContentLoaded", (e) => {
    const fetchMovies = document.querySelector(".fetch-btn")
    let options = {
        root: null,
        rootMargins: "-500px",
        threshold: 0.5
    }
    const observer = new IntersectionObserver(handleIntersect, options)
    observer.observe(document.querySelector("footer"))
    
    fetchMovies.addEventListener("click", (e) => {
        e.preventDefault()
        getData()
    }) 
})