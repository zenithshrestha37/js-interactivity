const form = document.querySelector("form")
form.addEventListener("submit", addMovie)
const message = document.querySelector('#message')

function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')
    
    const movie = document.createElement('li')
    
    const movieTitle = document.createElement('span')

    movieTitle.textContent = inputField.value
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent ="x"
    deleteBtn.addEventListener("click", deleteMovie)
    movie.appendChild(deleteBtn)

    movieTitle.addEventListener("click", crossOffMovie)
    


    movie.appendChild(movieTitle)

    const list = document.querySelector('ul')
    list.appendChild(movie)
    inputField.value=" "
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted!"
}

form.addEventListener("submit", addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked') === true){
        message.textContent = 'Movie watched'
    } else {
        message.textContent = 'Movie added back'
    }
}