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

//페이지 스크롤에 따른 요소 제어
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
