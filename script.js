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
  .then(response => response.json())
  .then(data => {
    // 받은 데이터에서 이미지 URL과 제목을 추출하여 출력
    const movieList = data.results.map(movie => {
      return {
        title: movie.title,
        imageUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      };
    });
    // movieList를 이용하여 HTML에 출력
    const movieListContainer = document.getElementById('movieList');
    movieListContainer.innerHTML = ''; // 기존에 있던 내용을 지웁니다.

    movieList.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.imageUrl}" alt="${movie.title}" width="200">
      `;
      movieListContainer.appendChild(movieElement);
    });
  })

  .catch(error => console.error(error));
}

//DOM 요소 만들기
// const movieCard = function(movie){
//   const 
// }

const searchInput = document.getElementById('searchInput');
const serarchButton = document.getElementById('searchButton');
const movieList = document.getElementById('movieList');




// HTML 버튼과 JavaScript 함수 연결
document.getElementById('fetchButton').addEventListener('click', fetchTMDBData);

