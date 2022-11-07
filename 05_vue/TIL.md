## 📕 상태관리(state management)
```
🔔  
App의 상태를 알고싶은데, 현재 구성으로는 각 component가 각각의 상태를 가지고있다.
이제 상태관리를 통해서 여러 컴포넌트가 같은 상태를 유지하도록 관리해준다.
```

```
🛠  
기존의 방식은 props,emit 를 사용한 부모와 자식간의 데이터 전달하지만 구조가 복잡해지면서 같은 높이의 구조에게 데이터 전달같은것이 쉽지않다. 이를 해결해보자
```

## 📕 centralized store
```
모든 데이터가 중앙저장소에 전달되고 받아온다.
이를 이루어지게 하는 라이브러리가 Vuex
```

## 📕 Vuex
기존대로 vue 프로젝트생성 후 디렉토리로 이동하고 `vue add vuex`로 플러그인을 추가한다.   
src/store/index.js가 생성된다.

### 1️⃣ state

vue의 data 역활.  
중앙에서 관리하는 모든 상태정보이다. state값이 변경되면, 해당 데이터를 사용하는 컴포넌트는 자동으로 다시 렌더링한다.
`$store.state` 명령어로 접근한다

### 2️⃣ getter

vue의 computed 역활.
state의 원본데이터 변경없이 계산된 값만 캐시한다. 해당 값이 변경된 경우에만 재계산된다(기존 computed 행동)  
첫번째 인자로 `state`, 두번째로 `getter`를 받는다

### 3️⃣ mutations

vue의 methods 역활중 일부  
`실제로 state를 변경하는 유일한 방법`으로 핸들러 함수(mutation,액션에서 호출되는 함수)가 반드시 동기적이여야한다.(비동기로직을 사용되면 state의 변화시기를 특정할 수 없다)  
첫번째 인자는 `state`를 받고 컴포넌트나 액션에서 `commit() 메서드`로 호출됨

### 4️⃣ actions

vue의 methods 역활중 일부.
mutations와 달리 `비동기작업이 가능`하다. 즉 `state를 직접 변경하지 않고` commit()메서드로 `mutations를 호출`해서 state를 변경  
context 객체를 인자로 받고 모든 요소에 접근할 수 있다  
component에서 `dispatch() 메서드`로 호출  
➕ 외부 api나 데이터와 소통한다

```
💡 
즉 state를 직접 변경하는것은 mutations,
그외에 나머지 해야하는것은 actions가 처리
```

![image](https://user-images.githubusercontent.com/109258271/200210068-c5359682-45a5-4292-9b83-58c1363352a3.png)


## 📕 Vuex 실제사용
  
1️⃣ vue -> actions `dispatch` 
```js
this.$store.dispatch('actions 메서드 이름', 전달할데이터)
```

2️⃣ vuex actions -> mutations `commit`  
```js
editMessage(context, 데이터) {
      context.commit('mutations 메서드 이름',데이터)
    }
```

3️⃣ vuex mutations에서 state 데이터 직접 수정  
```js
EDIT_MESSAGE(state,데이터) {
    state.`변경될state값` = 데이터
}
```


## 📕 Lifecycle Hooks(vue인스턴스 데이터 변경)
![image](https://user-images.githubusercontent.com/109258271/200230386-a2f0f447-f330-472d-8518-3f17bc4e4367.png)

사진과 같은 위치에서 데이터의 변경이 가능하다

### created
```
vue 인스턴스가 생성되고 data, computed 등의 설정된 상태. 서버 데이터를 data에 바로 할당하는 로직에 적합
아직 mount전이여서 dom요소에 접근은 불가
```
### mounted
```
vue 인스턴스가 mount 된 뒤에 호출.  
해당 요소 조작이 가능
```

### updated
```
vue 인스턴스 데이터가 업데이트될때 호출
```

```
💡 
부모자식 관계와도 상관없이 각각의 라이프 사이클을 가지고 있다.
```


💡  getter에서 연산된 다른 getter을 사용하고싶다면
```js
uncomplitedTodosCound(state,getters) {
      return state.todos.length - getters.complitedTodosCound
    }
```

💡  데이터 종료에 따라서 특정 클래스를 토글하려면
```html
템플릿부분
<span @click='updateTodoStatus' 
    :class="{'is-completed':todo.isCompleted }" >
    {{ todo.title }}
    </span>
```
```js
스타일부분
<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>
```
형식으로 todo.isCompleted 값에 따라 on,off 되는 형식으로 구현할 수 있다.


💡  로컬저장, 로컬로드 관련해서는 매우 편리한 라이브러리가 있다
`import createPersistedState from 'vuex-persistedstate'`  
```js
plugins: [
    createPersistedState(),
  ],
```
`npm i vuex-persistedstate` npm 설치  
라이브러리 설치및 설정으로 로컬저장이 간단하게된다.