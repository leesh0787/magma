// text ani

let pTag1 = document.querySelector('.mg-featured-reel-wrap .items')
let count1 = 0

//새로운 요소를 생성하고 내용을 복사한다.

let newItems = pTag1.cloneNode(true)

//복사한 내용을 다음 태그로 삽입한다.

let nextEle = document.querySelector('.mg-featured-reel-wrap');
nextEle.appendChild(newItems);
nextEle.style.width=pTag1.offsetWidth * 2+"px";

function marqueeText(count,element,direction){
  if(count>element.scrollWidth/2){
    element.style.transform = `translate3d(0,0,0)`;
    count = 0;
  }
  element.style.transform = `translate3d(${count * direction}px,0,0)`;
  return count;
}

function animate(){
  count1++;
  count1=marqueeText(count1,nextEle,1)
  requestAnimationFrame(animate)
}

animate()