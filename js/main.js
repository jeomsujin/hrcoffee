/*검색창을 제어해보자*/
//검색창 요소(.search)찾기
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
//검색창 요소를 클릭하면 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
//검색창 요소 내부 실제 INPUT 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

//검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

/*페이지 스크롤에 따른 요소 제어 : 배지*/
//페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', function(){
  console.log(window.scrollY);
  if(window.scrollY>500){
    //badge요소 숨기기 gsap이용
    gsap.to(badgeEl, .6,{
      opacity:0,
      display: 'none'
    });
  } else{
    //badge요소 보이기
    gsap.to(badgeEl, .6,{
      opacity: 1,
      display: 'block'
    });
  }
});

/*visual section */
//나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
//요소들을 하나씩 반복해서 처리
fadeEls.forEach(function(fadeEls, index) {
  gsap.to(fadeEls, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

//슬라이드 기능을 추가해보자
new Swiper('.notice .swiper',{
  direction: 'vertical', //수직슬라이드
  autoplay: true, //자동재생여부
  loop: true //반복 재생 여부
});
//promotion 스와이퍼
new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용
    el: '.promotion .swiper-pagination', // 페이지 번호 요소
    clickable: true // 사용자의 페이지 번호 제어 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용
    prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
    nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
  }
});