# 20221114

```
🤔
백엔드와 프론트엔드의 협업을 위해서는 이 둘의 역활을 정하게된다. 이에따라 서로에게 필요한 데이터를 주고 받는것도 필요하다. 서로 다른 환경으로 구동되는 이 둘 사이에 어떻게 원하는 방식대로 데이터를 주고 받을 수 있을까?
```

## 📕 서버

```
📝
서버란 클라이언트에게 정보와 서비스를 제공하는 시스템. 현재 과정에서는 서비스 전체는 장고로, 정보는 DRF로 제공한다.
```

### 서비스 전체(django)

모든 내용을 렌더링하는 HTML로 제공한다.

### 정보(DRF)

정보만 클라이언트에게 JSON으로 제공

## 📕 클라이언트

```
📝
클라이언트란 서버에게 적절한 요청을하고, 반환받은 응답을 사용자에게 표현하는 시스템
```

## 서버(DRF) <=> 클라이언트(Vue) 간의 소통  


## 📕 클라이언트(Vue)

```
❗
클라이언트는 지금까지 하던대로, axios요청으로 해당 url에 서버 요청을 보낸다.
하지만 코드 200(정상)으로 출력되지만 이전과는 다른 오류가 발생한다.
```

### 📖 CORS 오류

```
👀
정상적으로 200이 반환되었지만 오류가 떳다는것은 sever는 정상 응답을 하지만, 브라우저가 막았다는것을 뜻한다.
해당 오류는 보안상의 이유(SOP)로 인해 막힌것이다.
```

### 📖 SOP(same origin policy)

```
📝
동일 출처 정책, 불러운 문서가 다른 출처에서 가져온 리소스와 소통하는것을 제한한다.
이는 보안상의 이유로 브라우저에서 기본적으로 채택된다.
```

origin(출처) - URL의 protocol,Host,Port를 모두 포함해서 출처라고한다. 즉 동일 출처 정책에 따라서 이 모든것이 같아야한다.  
ex) `http://localhost:8000/`

### 📖 CORS(교차 출처 리소스 공유)

```
📝
http header를 사용하여 브라우저에게 다른 출처의 자원에 접근 할 수 있는 권한을 주는것
어느 출처(클라이언트)에서 컨텐츠를 가져갈 수 있는지 서버에서 header를 붙여주는 방식으로 구분시킨다.
이러한 CORS 정책에 위반되면 브라우저에서 응답을 하지않는다.
```


## 📕 서버(DRF)

### 📖 CORS

```
📝
여러 헤더가 있지만 Access-Control-Allow-Origin을 사용한다.
자동으로 header를 추가해주는 아래 링크 라이브러리를 설치해서 사용한다.
```
https://pypi.org/project/django-cors-headers/

필수적으로 해야할것은
- 설치 및 requirements 업데이트
```
1. pip 설치
pip install django-cors-headers

2.app 등록
INSTALLED_APPS = [
    ...,
    "corsheaders",
    ...,
]

3. 
pip freeze > requirements.txt
```

- app, middleware(서순주의) 추가
```
1. 앱등록(settings.py)
corsheaders 추가

2. MIDDLEWARE 추가
"corsheaders.middleware.CorsMiddleware",
'django.middleware.common.commonMiddleware',
```

- CROS 도메인 추가(전부라면 ALL) 

```
CORS_ALLOWED_ORIGINS = [
    'http://localhost:8080',
]
```

## ⚔ 이제 데이터를 주고받아보자

### 🛠 서버->클라이언트

```
📝
클라이언트는 서버에 axois get요청을 보낸다. 해당 요청을 수신하면 서버는 json 형태로 데이터를 보내준다.
detail 같은경우는 url:`${API_URL}/api/v1/articles/${this.$route.params.id}`, 형식으로 파라미스 데이터를 활용한다
```

### 🛠 클라이언트->서버

```
📝
클라이언트에서 서버에 axois post요청을 보낸다.
해당 요청과 데이터를 수신한 서버는 데이터를 저장한다. 이후에 추가된 데이터는 클라이언트의 요청에 따라 출력된다.
```


```
🤔 백엔드는 그저 저장할뿐이고, 모든것은 프론트엔드에서 하는건가?

단순 조회,저장에서는 그럴수밖에 없을것같다. 추가로 백엔드에서 처리할것은 인증에 대한것이 있으니 그쪽에 더 치중을 해야할것같다
```

## 🚫 인증

```
🤔
백엔드에서 제일 중점으로 봐야하는 점이 아닐까 싶다.
어떻게 해당 정보가 틀린지를 판별할까? 판별이 되었다면 어떠한 내용을 반환해야 원하는 값을 표현할 수 있을까?
```

```
✅
기본적인 인증관련 내용은 공식문서에서 확인이 가능하다  
https://www.django-rest-framework.org/api-guide/authentication/  
인증에 대해서는 전역에서 발동하게 하는 방법과, 데코레이션으로 하나하나마다 지정하는 방식이 있다.
해당 api에서 제공하는 방식중에 'TokenAuthentication' 방식을 사용해보자.  
```

### TokenAuthentication

```
📝
매우 간단하게 기본적인 보안 기능을 구현할 수 있는 패키지.
```

[초기 세팅 & 사용 방법]  
1. app등록  
`'rest_framework.authtoken'`
2. 생성된 Token을 각 User에게 발급  

3. User는 발급 받은 Token을 headers에 담아서 전송  
ex) `Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`  
Token은 사이 `공백`으로 구분한다  

### dj-rest-auth

```
📝
각종 회원기능에 대한 라이브러리(회원 가입 기능은 없다).
(django-rest-auth가 아니다!)
```
깃허브 : https://github.com/iMerica/dj-rest-auth   
상세내용 : https://dj-rest-auth.readthedocs.io/en/latest/index.html   

[초기 세팅]  
1. pip 설치  
`pip install dj-rest-auth`
2. app 등록  
`'dj_rest_auth'`
3. 프로젝트 urls.py에 url패턴 추가  
`path('accounts/', include('dj_rest_auth.urls')),`  
==> 해당 추가로 인해서 패스워드, 로그인, 로그아웃등의 기능이 추가된다.  

[회원가입 기능 세팅]  
1. app 등록  
```
'django.contrib.sites',
'allauth',
'allauth.account',
'allauth.socialaccount',
'dj_rest_auth.registration',
```
2. SITE_ID 추가
`SITE_ID = 1`
3. 프로젝트 urls.py에 url패턴 추가  
`path('accounts/signup/', include('dj_rest_auth.registration.urls'))`

### 토큰 사용을 해보자

```
DRF에서 토큰을 담아보낼 방법이 없으므로, postman에서 해보자
```
![image](https://user-images.githubusercontent.com/109258271/201592144-d9dc0d33-ce8b-40fa-9d3e-f3d5cb7ae40b.png)

![image](https://user-images.githubusercontent.com/109258271/201592235-91163f57-812f-4f08-b6a8-3066afa9c167.png)

```
이렇게 해도 일단 403 오류가 뜬다.
이는 아직 token을 사용하는 정의를 하지 않았기 때문이다.
```

```python
rest_framework에 추가하기

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
```

### 👮‍♂️ 권한설정

```
✅
권한설정 내용도 공식문서에서 확인이 가능하다  
https://www.django-rest-framework.org/api-guide/permissions/  
모든 요청에 대해 인증을 요구할지(settings.py)
모든 요청에 대해 인증이 없어도 허용할지(settings.py)

```

```
<settings.py>
REST_FRAMEWORK = {
  ...
  'DEFAULT_PERMISSION_CLASSES': [
          # 'rest_framework.permissions.IsAuthenticated',
          => 모든 인증을 요구
          'rest_framework.permissions.AllowAny',
          => 모든 인증을 요구 X(데코레이터)
      ],
  ...
}
<views.py>
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
...
@permission_classes([IsAuthenticated])
```

### 클라이언트 회원가입

```
🤔
백엔드에서 충분히 기능이 구현되어있다.
이제 클라이언트에서 데이터를 보내서 회원가입을 해보자
```

```
너무빨라서 따라가기만했는데, token부분 제대로보고
도중에 create가 갑자기 안되기 시작했는데 왜일지 생각해보자
```

```
도중 401에러는 인증 요청중에 token이 담기지 않아서이다.
해당 axios 요청에 headers에 토큰을 담아주자
```

```
마지막 swagger은 작성한 api를 보다 편리하게 보고, 테스트할 수 있는 환경이다.
```