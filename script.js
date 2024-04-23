function fetchTMDBData() {
    const apiKey = 'f62a4e11263f400c617265700750d002'; // 여기에 본인의 API 키를 넣으세요
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjJhNGUxMTI2M2Y0MDBjNjE3MjY1NzAwNzUwZDAwMiIsInN1YiI6IjY2Mjc4ZGJhY2I1YzhlMDE4NzQyZmUzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JeQmMX_ZFnsPbVvEUEAGuejOKZV3C3NgOtnsjtcK1qc'
      }
    };
  
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // 여기에서 데이터를 처리하거나 표시하는 등의 작업을 수행할 수 있습니다.
      })
      .catch(error => console.error(error));
  }
  
  // HTML 버튼과 JavaScript 함수 연결
  document.getElementById('fetchButton').addEventListener('click', fetchTMDBData);
  