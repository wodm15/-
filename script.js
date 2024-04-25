const apiKey = 'f62a4e11263f400c617265700750d002'; 
  
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjJhNGUxMTI2M2Y0MDBjNjE3MjY1NzAwNzUwZDAwMiIsInN1YiI6IjY2Mjc4ZGJhY2I1YzhlMDE4NzQyZmUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeQmMX_ZFnsPbVvEUEAGuejOKZV3C3NgOtnsjtcK1qc'
  }
};


// fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
// .then(response => response.json())
// .then(data => {
// console.log(data);
// const movie = data.results;
// console.log(movie);
// })
// .catch(error => console.error(error));

function fetchTMDBData() {
  fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); 
}

//DOM 요소 만들기
const searchInput = document.getElementById('searchInput');
const serarchButton = document.getElementById('searchButton');
const movieList = document.getElementsById('movieList');


// HTML 버튼과 JavaScript 함수 연결
document.getElementById('fetchButton').addEventListener('click', fetchTMDBData);
  