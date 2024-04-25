const apiKey = 'f62a4e11263f400c617265700750d002'; 
  
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjJhNGUxMTI2M2Y0MDBjNjE3MjY1NzAwNzUwZDAwMiIsInN1YiI6IjY2Mjc4ZGJhY2I1YzhlMDE4NzQyZmUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeQmMX_ZFnsPbVvEUEAGuejOKZV3C3NgOtnsjtcK1qc'
  }
};

//const movieContainer = document.getElementById('movieContainer'); //영화 리스트 보여줄데이터 창고


function fetchTMDBData() {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then (response => response.json())
  .then( data => { 
    // const movieContainer = data.results;
    const movietable = document.getElementById('movietable');
    data.results.forEach(movie => {
        const movieContainer = document.createElement('div');

        movieContainer.classList.add('movieContainer-style');
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        movieContainer.innerHTML=`
        <h2> ${movie.title} </h2>
        <img src = "${imageUrl}" class="img-style" alt = '이미지 없음'>
        <h1> 영화 평점: ${movie.vote_average}</h1>
        <h1 class='overview-style'> ${movie.overview}</h1>
        
        `;

        movietable.appendChild(movieContainer);
        
    })
  
    console.log(movieContainer)
  })
  .catch(error => console.log(error));
}

fetchTMDBData();
//document.getElementById('fetchButton').addEventListener('click', fetchTMDBData);
