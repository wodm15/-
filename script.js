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
        movieContainer.classList.add('moviebackground');
        movieContainer.dataset.id = movie.id; //이거 안넣어서 계속 오류남 아오
        const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        movieContainer.innerHTML=`
        <h2 class="movie-title"><a href="https://www.google.com/search?q=${encodeURI(movie.title)}" target="_blank" class='link';>${movie.title}</a></h2>
        <img src = "${imageUrl}" class="img-style" alt = '이미지 없음' style='cursor:pointer';>
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
        //dataset으로 이미지->results-> id로 접근, 해당 데이터를 명시적로 해야된다함

        movietable.appendChild(movieContainer);
        
    })

    
  
    
  })
  .catch(error => console.log(error));
}

fetchTMDBData();


const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase(); // 입력된 텍스트를 공백 제거 후 소문자로 변환

    const movieTitles = document.querySelectorAll('.movie-title');

    movieTitles.forEach(title => {
        const titleText = title.textContent.toLowerCase(); // 영화 제목을 가져와 소문자로 변환
        const movieContainer = title.closest('.movieContainer-style'); // 영화 컨테이너를 가져옴
        if (titleText.includes(searchText)) {
            movieContainer.style.display = 'block'; // 검색어가 포함된 경우 보이기
        } else {
            movieContainer.style.display = 'none'; // 검색어가 포함되지 않은 경우 숨기기
        }
    });
});

 //dark mode 구현 , 기본 style은 .normal, 다크모드는 .dark
 var dark_cnt=0;
   document.getElementById('badage').addEventListener('click', function(){
    dark_cnt++;
    if (dark_cnt % 2 == 1){
      document.getElementById('badage').textContent= 'light 🔄'
      document.getElementById('body').classList.add('dark');
      document.getElementById('body').classList.remove('normal');
      document.getElementById('badage').classList.add('b-w');
      document.getElementById('search-container').classList.add('bottom-line2');
      
    } else {
      document.getElementById('badage').textContent= 'dark 🔄'
      document.getElementById('body').classList.add('normal');
      document.getElementById('body').classList.remove('dark');
      document.getElementById('badage').classList.remove('b-w');
      document.getElementById('search-container').classList.remove('bottom-line2');
    }
  });
    
// 스크롤바 스크립트

var content = document.getElementById('content');
var progress_bar = document.getElementById('progress_bar');

window.addEventListener('scroll', function(){
  var height = content.scrollHeight;   //실제 높이
  var scrollTop = this.window.scrollY;    //스크롤한 양
  var clientHeight = content.clientHeight;  // 스크롤 요소 높이
  console.log(height, scrollTop,clientHeight);
  var progress = (scrollTop / (height - clientHeight)) * 100; 
  progress_bar.style.width = progress + '%';
});
