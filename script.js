const apiKey = 'f62a4e11263f400c617265700750d002'; 
  
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjJhNGUxMTI2M2Y0MDBjNjE3MjY1NzAwNzUwZDAwMiIsInN1YiI6IjY2Mjc4ZGJhY2I1YzhlMDE4NzQyZmUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeQmMX_ZFnsPbVvEUEAGuejOKZV3C3NgOtnsjtcK1qc'
  }
};



function fetchTMDBData() {
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then (response => response.json())
  .then( data => { 
 
    const movietable = document.getElementById('movietable');
    data.results.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movieContainer-style');
        movieContainer.dataset.id = movie.id;
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        movieContainer.innerHTML=`
        <h2> ${movie.title} </h2>
        <img src = "${imageUrl}" class="img-style" alt = '이미지 없음'>
        <h1> 영화 평점: ${movie.vote_average}</h1>
        <h1 class='overview-style'> ${movie.overview}</h1>
        
        `;
        
        const images = movieContainer.querySelectorAll('.img-style');
        images.forEach(image => {
        image.addEventListener('click', (event) => { 
        const movieId = event.target.closest('.movieContainer-style').dataset.id;
        alert(`영화 ID: ${movieId}`);
    });  ////event.target은 이벤트가 발생한 요소
});     //closest은 주어진 선택자와 일치하는 가장 가까운 조상 요소

        movietable.appendChild(movieContainer);
        
    })

    
  
    
  })
  .catch(error => console.log(error));
}

fetchTMDBData();

const searchInput = document.getElementById('searchInput');

//document.getElementById('fetchButton').addEventListener('click', fetchTMDBData);

// const images = movieContainer.querySelectorAll('.img-style');
// images.forEach(image => {
//  const movieId = image.dataset.id;
//  image.addEventListener('click', () => {
//      alert(`영화 ID: ${movieId}`);
//  });
// });