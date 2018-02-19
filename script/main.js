const moviesURL = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
const loadMovies = document.querySelector('#load');
const loadExcellentMovies = document.querySelector('#excellent')
const loadVeryGoodMovies = document.querySelector('#very')
const loadGoodMovies = document.querySelector('#good')
const searchField = document.querySelector('#searchField')
const searchButton = document.querySelector('#search')
const moviesList = document.querySelector('ul');

function fetchJSONDataNew(url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            const jsonData = JSON.parse(xhr.responseText);
            resolve(jsonData);
        });

        xhr.open('get', url);
        xhr.send();
    });



    return promise;
}

fetchJSONDataNew(moviesURL).then(movies =>{
    
    /*Give each movie a tag: Excellent (>=8.5), Very Good (>=8), Good (<8) based on the ratings.*/
    
    movies.map(movie =>{
       if(movie.rating >= 8.5){
           movie['tag'] = 'Excellent';
       } else if (movie.rating >= 8 && movie.rating < 8.5){
           movie['tag'] = 'Very Good';
       } else {
           movie['tag'] = 'Good'
       }
    });
    console.log(movies);
    
    /*Render all the movies as a list*/
    
    loadMovies.addEventListener('click',function(){
        moviesList.innerHTML = "";
        movies.map(movie =>{
            const allMovies = document.createElement('li');
            moviesList.appendChild(allMovies);
            allMovies.innerHTML = movie.title;
        });
    });
    
    /*Add a input field, and a button to perform search. Use .filter method on arrays to filter on the titles.*/
    

    
    /*Add 4 radio buttons for each tag + All tag (All, Excellent, Very Good, Good) and filter the movies based on the tag selected.*/
    
    loadExcellentMovies.addEventListener('click',function(){
        moviesList.innerHTML = "";
        moviesFilter(movies,'Excellent');
    });
    
    loadVeryGoodMovies.addEventListener('click',function(){
        moviesList.innerHTML = "";
        moviesFilter(movies,'Very Good');
    });
    
    loadGoodMovies.addEventListener('click',function(){
        moviesList.innerHTML = "";
        moviesFilter(movies,'Good');
    });
    
});






function moviesFilter(json,arg){
    json.filter(movie =>{
            return movie.tag === arg;
        }).map(movie =>{
            const moviesRating = document.createElement('li');
            moviesList.appendChild(moviesRating);
            moviesRating.innerHTML = movie.title;
        });
}