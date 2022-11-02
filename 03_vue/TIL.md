# node.js

자바스크립트는 브라우저를 조작하는 유일한 언어이지만, 브라우저 밖에서는 구동이 불가능. 이를 위해 런타임 환경인 node.js로 브라우저가 아닌 환경에서 구동가능.

## npm
자바스크립트의 패키지 관리자로, python의 pip와 같은 역활을 한다.

## Vue CLI
프로젝트 구성을 도와주어 Vue 개발을 위한 표준도구.

## 초기설정

1. 설치 `npm install -g @vue/cli`
2. vs코드에서(디렉터리에서) 프로젝트 생성 `vue create "프로젝트이름"`
3. 설치환경 선택
4. 만들어진 폴더로 이동 `cd 프로젝트이름`
5. 서버 on `npm run serve`
6. 모듈만 삭제된 경우에는 `npm install` 로 재설치

## 내부 파일

### node_modules
장고의 venv처럼 각종 환경파일을 저장한 폴더. 당연하게 원격저장소에는 올리지않는다.  

### webpack

### module
기능에 따라 분리된 .js 파일 하나하나가 모듈이다.  
(+) 이 모듈이 너무 많아지고, 서로 의존성이 싶어지면서 문제발생시 특정지점을 찾기가 어렵다. 이를 위해 등장한것이 `webpack`

### bundler
모듈 의존성 문제를 해결해주는 작업이 `bundling`, 이를 해주는 도구가 `bundler`이고 `webpack은 다양한 bundler중 하나이다`.

### babel.config.js
자바스크립트를 구버전으로 번역/변환해주는 자바스크립트 컴파일러.  
즉 계속 변화되는 작성된 코드를 어떠한 구버전 코드로 변환되어 모든 브라우저에 사용가능한 상황으로 됨.  
원시코드(현재코드) -> 목적코드(구버전코드)

### package.json
프로젝트의 종속성 목록과 지원 브라우저에 대한 구성옵션.

### package-lock.json
python에서 requierments.txt와 같은 역활로, 모든 모듈의 의존성을 관리하며 사용할 패키지 버전을 고정(==freeze)한다.

### public/index.html
Vue 앱 뼈대가 되는 html파일

### src


## component
```
UI를 독립적이고 기능별로 분화한것으로, 
CS에서는 다시 사용할 수 있는 범용성을 위해 개발된 소프트웨어 구성요소를 의미한다.
Vue에서 컴포넌트란 Vue instance, new Vue()로 만들어진것
```

### 특징
(1) 관리가 용이
(2) 재사용성
(3) 확장가능
(4) 캡슐화

### SFC
```
.vue 파일이 하나의 Vue instance(컴포넌트)이다. 이것이
Single File Componecnt , SFC
```

### 구성
템플릿 : html 바디부분으로 눈에 보여지는 요소 작성  
스크립트 : 스크립트가 작성되는곳으로, vue 인스턴스를 구성하는 대부분이 작성  
스타일 : 컴포넌트 스타일 담당  

### 생성의 3단계
1. scr/componects 안에 생성
2. script에 이름 등록(name)
3. template에 요소 추가(하나의 요소만, 비어있는것도 안됨)


### 등록의 3단계
1. 불러오기 : 스크립트에서 필요한것 import
2. 등록하기 : 스크립트 컴포넌트에서 불러온것 등록
3. 보여주기 : 템플릿에서 해당 컴포넌트 사용

### 컴포넌트 스타일가이드
스타일 가이드는 많기때문에 한번씩 공식 페이지를 참고하자.  
일단 간단하게 신경쓸만한것은

1. 컴포넌트는 MyChild 형식 혹은 my-child 형식으로 작성
2. 근원이되는 베이스는 Base를 앞에 붙이기
3. 연관성없이 혼자만 사용되는것은 The붙여주기
4. 강한 연관성을 가지면 상위 컴포넌트의 이름에 뒤에 속성을 이어서 작성  
ex)   
TodoList,TodoItem,TodoButton
↓
TodoList,TodoListItem,TodoListItemButton 

## Data in components
```
component로 나누어진 상태에서 데이터는 공유가 되어야한다.
다른 컴포넌트에서 같은 이름으로 작성된다고, 공유되지 않으며 필요에 따라 데이터를 주고 받는다고해도 개발속도나 유지보수 측면에서 비효율적이다.
그렇다면 어떻게 해결할까?
```

### pass props & emit event
```
컴포넌트는 부모<->자식 관계이기때문에, 부모<->자식관계에만 데이터를 주고받게 한다.
```

#### pass props
`부모->자식으로의 데이터 흐름`
- 요소의 속성을 사용하여 데이터 전달
- props는 부모 컴포넌트에 정보를 전달하기 위한 사용자 지정 특성
- 즉 부모 컴포넌트에서 넘긴 데이터를 자식 컴포넌트에서 props로 선언한뒤 사용한다.

##### pass prop convention
props는 html부분에서 사용된다({{ props }}) 따라서 대소문자를 작성해도 차이를 알지 못한다. 따라서 부모에서 props명을 보낼때는 `prop-data-name=“value”`형태로 작성한다.  
다만 자식 컴포넌트에서 명시할때는 자바스크립트이기때문에 카멜케이스`propDataName: type`를 사용한다.  
(+) 부모에서 bebab-case로 보낸것이 자식에서는 자동으로 camelCase로 변환됨

##### pass prop 동적(dynamic)
변수를 props하는것으로 v-bind(:)를 사용해 데이터를 동적으로 바인딩한다.  
단 여기서 같은 data객체를 공유하기때문에 새로운 data 객체를 반환 즉 함수형이 되어야한다.
```
data: function () {
    return {
      dynamicProps: "It's in data",
    };
  },
```

기본적으로 static으로 전달시에 문자열만 가능하고, dynamic으로 전달시 자바스크립트 형식이므로 숫자형도 가능하다
```
<SomeComponent num-props="1"/> === "1"
<SomeComponent :num-props="1"/> === 1
```
##### 단방향 흐름
모든 props는 부모->자식으로 위에서 아래로의 단방향 바인딩만 형성한다.  
이는 자식 컴포넌트가 실수로 상위 컴포넌트를 변경하는것을 방지하기 위함이다.  


#### emit event
`자식->부모으로의 데이터 흐름`
- 자식->부모로 데이터를 전달할때는 `이벤트`를 발동시킨다
- 데이터를 이벤트리스너의 콜백함수 인자로 전달->이벤트로 데이터 수신

[자식]  
<이벤트발생>  
```html
<button @click="meowToHost">냐아아아아아아아아아아옹</button>
```

<이벤트 발생시 $emit메서드로 부모에게 데이터 전달>  
```js
methods: {
    meowToHost: function () {
      this.$emit("meow-to-host", "밥줘!!!!");
      // 첫인자는 보내지는 이벤트이름, 두번째인자는 넘어가는 데이터
    },
  },
```

[부모]  

<이벤트 수신>  
```html
@meow-to-host="hostGetMeow"
<!-- 자식 컴포넌트에서 이벤트이름으로 받은것이 작동시, 함수호출 -->
```
<이벤트 수신 데이터 처리>
```js
methods: {
    hostGetMeow: function (catSay) {
      console.log(catSay);
      // 아규먼트로 자식 컴포넌트에서 보내준것을 사용
    },
  },
```

##### emit event 동적(dynamic)
추가적으로 자식컴포넌트에서 데이터를 받고, 해당 데이터를 변수로 넘겨주고 부모컴포넌트에서 사용하면된다.

[자식]

```js
data: function () {
    return {
      inputData: null,
    };
  },
```
```js
inputToHost: function () {
      this.$emit("input-to-host", this.inputData);
    },
```

#### convention
결국 주는위치보다는 받는 위치에서 필요한 형식으로 보내주어야한다.  
받는곳이 html쪽이라면 kebab-case 받는쪽이 자바스크립트라면 camelCase으로 보내준다고 생각한다.  

