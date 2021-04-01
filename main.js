let sticky = document.querySelectorAll('.sticky-block'),
    arrHeights = [],
    arrCoords = [];
 for (let i = 0; i < sticky.length; i++) {
  let gbcr = sticky[i].getBoundingClientRect();
  arrCoords.push(gbcr.top);
  arrHeights.push(gbcr.height);

  let stickyHeights = arrHeights.reduce(function(prev, next) {
    return prev + next;
  }, 0);
  console.log(stickyHeights);
  
  


  window.addEventListener('scroll', function() {
    // console.log(arrCoords[i]);
    //i>0 &&
   if ( arrCoords[i] <= ( window.pageYOffset + stickyHeights - arrHeights[0]) ) {
    sticky[i].classList.add('sticky');
    sticky[i].style.top = stickyHeights - arrHeights[0] + 'px';



  }else if ( arrCoords[i] >= ( window.pageYOffset + stickyHeights - arrHeights[0]) ) {
    sticky[i].classList.remove('sticky');
  }
  });
 };




  
/* 
 let sticky = document.querySelectorAll('.sticky-block');

 let arrOfEls = [];

for (let i = 0; i < sticky.length; i++) {
  let gbcr = sticky[i].getBoundingClientRect();
  arrOfEls.push(gbcr);
}
console.log(arrOfEls);

let coord = gbcr.top;
let arrHeights = [];







let centerY = document.documentElement.clientHeight/2; //центр экрана по Y...
//sticky1.style.top = centerY - sticky1.offsetWidth/2 + 'px'; //расположит по центру по оси Y блок sticky1.
let coords = sticky1.getBoundingClientRect(); // 
console.log(coords);

let elem = document.elementFromPoint(102, 110); // - получаем элемент находящийся на данной координате (максимально глубокой вложенности,  только те которые мы видим в облоасти видимости окна браузера).

function getCordFromDocument(elem){
  let coords = elem.getBoundingClientRect();
  return {
    top: coords.top + window.pageYOffset,
    left: coords.left + window.pageXOffset
  }
}

let obj = getCordFromDocument(sticky1);

console.log(obj.top);
console.log(coords.top);
console.log(window.pageYOffset);

// let body = document.querySelector('.body');

  if(coords.top <= 20 ) {
    sticky1.classList.add('fixed');
 }
*/





/* 
let def {

};
*/


/*
const sec = {

}

const someBlock = {
    width : '200px',
    height : '200px'

}

window.addEventListener('scroll', function() {




});
  */

// let qsa = document.querySelectorAll('sticky-block');
// console.log(qsa);


// sticky.forEach(function() {

// })




