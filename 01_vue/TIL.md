# 프론트엔드

프론트엔드 개발이란 사용자에게 보여주는 화면을 만드는것. 이러한 web app(spa)를 만드는것이 프론트엔드 프레임워크

## SPA
spa는 서버에서 최초 1장 html만 전달받고 모든 요청에 대응한다. 이는 `CSR`방식으로 요청을 처리하기때문에 가능하다.(기존 방식은 SSR,페이지 새로고침)  

## CSR
이전에 했던 자바스크립트로 요청을 바꾸는것이 바로 CSR. AJAX으로 요청하며, JSON데이터로 받아서 처리한다.

<장점>
(1) 모든 html 페이지를 서버에서 받지 않아도 된다.
- 트래픽감소 및 응답속도 개선  
  
(2) 필요한 부분만 고치므로 요청이 끊이지 않고 진행  
 - UX적인 부분  

(3) 백,프론트의 작업영업을 분리할 수 있다.
 - 협업쪽인 부분

<단점>  
(1) 첫 구동시 시간이 더욱 필요하다  
(2) 검색엔진최적화가 어렵다.  


## vue

### MVVM 패턴
장고의 MTV 패턴처럼 뷰도 MVVM패턴이 존재한다.  
M : model, 실제 데이터(JSON)   
V : View, 눈에 보이는 부분(Dom)  
VM : ViewModel, view와 연결되어 Action을 주고받으며 Model 수정시 View Model도 변경된다.(vue)  
view(Dom)과 model(data)는 적은 의존성으로 독립된것으로 서로를 알지 못하지만, 가운데에 VM을 통해 처리가 가능하다.


### vue 문법

#### 생성자 함수
new로 새로운 데이터형식을 생성하는 함수. 첫 글자는 대문자로 표시한다.

#### el(element)
Vue instance와 DOM을 연결하는 옵션으로 view와 Model을 연결하는 역활이다.
DOM외부는 Vue의 영향을 받지 않는다.

#### data
Vue instance의 데이터 객체 혹은 인스턴스 속성으로 `반드시 객체`여야한다.
정의된 속성은 interpolation == {{ }}을 통해 렌더링 가능

#### 메서드
해당 객체에서 사용될수있는 함수들.  
여기서 this는 생성된 객체 그자체이다.  
기본적으로 데이터를 접근시에는 `this.$data.message`가 맞지만 축약으로 `this.message`로 사용된다.  
this를 사용하다보니, 화살표함수를 메서드 정의시 사용하면 window를 가르키게된다. 따라서 정의할때는 사용을 하면 안된다.

### template 용법
  
  
  
#### Directives
name(v-이름):submit(아규먼트):prevent(modifiers)="onSubmit"(value)  

(1) v-text : 출력문구값을 해당 값으로 설정  
(2) v-html : raw html을 받는 속성. 공격에 취약해서 입력받는곳에는 사용X  
(3) v-show : 표현식의 boolean값에 따라 element를 보여줄지 결정한다. 즉 display속성을 기본속성과 none으로 토글하는것(true면 기본속성, false이면 none)  
(4) v-if : v-show와 사용방법과 겉보기에는 같지만, false일경우에 DOM에서 사라진다.  
(+) 위 차이에 따라서 v-show 초기 렌더링때 v-if는 토글때 비용이 증가한다.  
따라서 v-show는 토글이 많을때, v-if는 토글이 적을때 사용되는것이 효율적이다.  
단 v-if는 elif,eles등의 용법이 가능하므로 v-if를 많이 사용한다.  
(5) v-for : `for .. in ..` 형식으로 작성 문자열로 작성한다. index도 같이 사용하고싶으면 값에 넣으면된다.  
(+) v-for 사용시, key속성을 각 요소에 반드시 작성해야한다. 현재 데이터의 변화를 좀 더 편하게 확인하기 위함이다. 이러한 key속성값은 고유한 값이 되도록 설정해야한다. 반대로 객체에서는 키는 중복되지 않기때문에, key를 그대로 사용해도 문제가 없다.  
(6) v-on : 이벤트가 발생시 할당된 표현식을 실행하는 구조.  
v-on:이벤트="표현식" 구조를 가지게된다. 이를 더 축약하면  
@이벤트="표현식" 구조를 자주 사용한다.  
`:`를 통해 전달된 인자에 따라 특별한 수식어가 있을수 있다.  
(7) v-bind : 속성값의 변경때 사용되는것   
v-bind:속성="속성값" 이를 축약하면  
:속성="속성값"  
(8) v-model : v-bind를 양방향으로 처리된것.  
(+) v-model의 경우, ime 즉 조합형 입력으로 되는것에 대해서는 실시간 작동이 되지않는다.  

#### Vue advanced
(1) computed : Vue instance가 가진 options. 첫 실행시에 계산한 값을 저장해서 사용한다.그리고 계산될 값의 변화가 있을때만 계산을 한다. 기본적으로 메서드랑 사용방식도 조금 다르다. 재활용 측면에서 효율적인 속성이다.[메서드랑 차이점 확실히 알기]  
(2) watch : 특정 데이터의 변화를 감지한다. 즉 감시하는 데이터가 변화가있는것을 발견시, 저장된 함수를 실행시킨다. 값은 (변동후값,변동전값)을 담는다.  
(3) filters : 인자 | 필터함수명, nums.filter 형식으로 작성한다.