const [red, green, blue]=[5,253,166];
const $body=document.querySelector('body');

const changeColor=()=>{ // 스크롤 이벤트에 따른 색상 변경 
    let y= 1+ (window.scrollY || window.pageYOffset) / 150;
    y = y < 1 ? 1: y ;
    const [r,g,b]=[red/y, green/y, blue/y].map(Math.round);
    $body.style.backgroundColor=`rgb(${r},${g},${b})`
    console.log('스크롤 이벤트 실행');
}


const throttle=(func,limit)=>{
    let inThrottle;
    return function(){
        const context= this; // 콜백함수이므로 addEventListener의 this 위임
        // 클로저에 의해서 throttle 함수의 실행컨텍스트가 종료된 후에도 inThrottle 변수에 계속 접근 가능
        if(!inThrottle){
            func.apply(context);
            inThrottle=true; // limit.ms에 한번씩만 함수 실행
            setTimeout(()=>inThrottle=false,limit);
        }
    }
}

window.addEventListener('scroll',throttle(changeColor,100));