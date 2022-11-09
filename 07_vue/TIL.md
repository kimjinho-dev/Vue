### 📕 router-link
```
📝
a태그와 비슷한 기능으로, url을 이동시킨다.
히스토리 모드에서는 클릭 이벤트를 차단하여야한다.
to속성으로 목표를 알려준다
```


### 📕 router-view
```
📝
주어진 url에 대해 일치하는 컴포넌트를 렌더링하는 컴포넌트.
이를 통해 base.html을 사용하는 효과(block)을 누릴수있다.
```

### 📕 router/index.js
```
📝
장고의 urls같은 존재. 해당 입력에 대해서 이동해야하는 위치에대한 표현이다.
```

### 📕 views
```
📝
router-view에 들어갈 컴포넌트를 작성.
작동자체에는 문제가 없지만, 대체로 컴포넌트와 나눠서 폴더를 지정한다.(명시적으로 라우터랑 매칭된다는것을 알리기 위해서)
```

### ⚔ 선언적방식 vs 프로그래밍 방식

#### 📉 선언적 방식
```
📝
router-link to 속성으로 주소 전달,
name을 사용하여 전달
```
`:to="{name:about}"`

#### 📈 프로그래밍 방식
```
📝
vue 인스턴스 내부에서 $router로 라우터 인스턴스에 접근가능.
이를 사용해 다른 url로 이동시 this.$router.push 하여 해당 url로 이동.
push를 쓰기때문에 뒤로가기 버튼 구현도 가능.
```
`this.$router.push('about')`

### dynamic route matcing
```
📝
url내 변수 추가.
다른 것과 달리 :변수명으로 추가
```

라우터 데이터 값은 $router.parmas.필요데이터 형식으로 조회가능

### ⚔ 컴포넌트 등록 기존방식 vs lazy-loading
```
📝
기존방식은 시작과 동시에 로딩이 되기때문에, 모든 컴포넌트가 미리 로딩이 된다.
만약 접근이 적거나, 당장 사용하지 않을 컴포넌트는 lazy-loading방식으로 등록하면 방문할때 로딩하도록 한다.
import를 화살표함수로 componet 내부에서 실행한다.
```
`component: () => import('../views/AboutView.vue'),`


```
📝
라우터는 기본적으로 
url과 데이터값(params)을 담아서 요청을 보내면, 그것을 router/index.js에서 받아서 알맞은 컴포넌트로 다시 보내준다.
```

## 전역가드

### 📕 global before guard
종류는 여러가지 있지만, 그중 3가지를 다룬다
1. to : 이동할 url 정보가 담긴 객체
2. from : 현재 url 정보가 담긴 객체
3. next : 지정한 url로 이동하기위한 함수

```
📝
global before guard는 다른 url 이동전에 작동하기때문에, to에는 현재 넘어갈 url 정보, from에는 바뀌기전 정보가 담긴다.
또한 router.beforeEach 사용시 next()가 존재해야 넘어간다. 이러한 성격을 이용하여 상황에 따라 url넘어가는것을 방지할수있다. 
```

### beforeEach

```js
⌨
이런식으로 로그인이 필요한 이용자에게 로그인페이지로 돌려줄 수 있다.
router.beforeEach((to,from,next) => {
  if (isAuthRequired && !isLoggedIn) {
    next({ name: 'login' })
  } else {
    next()
  }
})
```

## 라우터가드
```
📝
해당 라우터에서만 가드처리를 한다.
beforeEnter(to,from,next)
```

### beforeEnter
```js
⌨
로그인 인증이 필요한 페이지에 하나씩 달아둘 수 있다.
beforeEnter(to,from,next) {
      if (isLoggedIn) {
        console.log('로그인중')
        next({name:'home'})
      } else {
        next()
      }
    }
```

## 컴포넌트가드
```
📝
해당 컴포넌트에서만 가드처리를 한다
beforeRouteUpdate(to,from,next)
경로(파라미터)의 변경이 확인되면 해당 데이터 처리를 해주고 보통 next로 넘긴다.
```

```js
⌨
파라미터 정보가 바뀐것을 확인하고 호출된다.
beforeRouteUpdate(to,from,next) {
    this.userName = to.params.userName
    next()
  }

```

## 404 not found 
```
📝
링크의 형식이 문제가 있으면 자동으로 404페이지가 뜨지만, 링크 형식은 옳바르지만 데이터가 없는 경우는 404가 뜨지않는다. 이는 직접 해당 오류가 발생할때 404로 redirect 시켜준다.
```


## 💎 Optional Chaining

```
📝
종종 비어있는 값으로 처음 들어오는 경우가 있다. 이런경우를 위해 ? 문자를 넣어주어서 해당 객체값이 존재할때만 출력되도록 할 수 있다.
```

```js
⌨
// Optional chaining 미사용(존재하는것을 확인하고, 출력해야한다)
const myCity = userInfo.address && userInfo.address.city
// Optional chaining 사용(존재하는것을 확인하지 않아도 된다)
const myCity = userInfo.address?.city

```