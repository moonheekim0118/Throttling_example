# Throttling example

```javascript
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
```
- 100ms에 한번만 함수가 실행되도록 함
- 클로저에 의해서 throttle 함수의 실행컨텍스트가 종료된 후에도 inThrottle 변수에 계속 접근 가능
- 100ms이 아직 지나지 않은 상태(inThrottle===true) 에서 scroll 이벤트가 들어올 시, changeColor 함수를 실행하지 않음
- 100ms가 지날 시 inThrottle 변수를 false로 변경해주어 scroll 이벤트 발생 시 함수 실행하도록 함
 
