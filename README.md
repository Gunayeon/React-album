# my-album📷
## 1. 소개
### 프로젝트 명 
> 🌄 사진 api를 활용한 이미지 검색 웹 사이트 🌉

### 프로젝트 내용
> 여러 종류의 사진을 제공하는 이미지 API를 활용해 **TypeScript** 기반 **React**로 개발된 웹사이트입니다. 사진과 정보를 제공할 뿐만 아니라 검색, 북마크 등 다양한 기능을 지원합니다.


## 2. 사용 기술
<div style="display: flex; gap: 10px;">
  <img src="https://camo.githubusercontent.com/e89cc7228d58884fdd9fe4388f57e5cd29d3b16472ad4c3aa75312198949e09a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d3331373843363f7374796c653d666c61742d737175617265266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" alt="TypeScript">
  <img src="https://camo.githubusercontent.com/f5aaeddebfb89b74e44e33753e684f64b764729d8455bbae398911442f946ab9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666c61742d737175617265266c6f676f3d5265616374266c6f676f436f6c6f723d7768697465" alt="React">
  <img src="https://camo.githubusercontent.com/61a01b501f7bb79e0ed1440b120bd9a9721226f9eb3594d837567e85c1aa9518/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS3">
</div>


## 3. 상세
### ⚙️ 프로젝트 환경 설정
> 1. 프로젝트 환경설정(vite를 활용한 React 프로젝트) 설치 : `npm install vite@latest` <br />
> 2. React 중앙집중식 상태관리 라이브러리 Recoil 설치 : `yarn add recoil` <br />
> 3. 외부 오픈 API 통신을 위한 라이브러리 axios 설치 : `npm install axios` <br />
> 4. CSS 스타일링을 위한 SASS/SCSS 설치 : `yarn add -D sass` <br />
> 5. React Router 설치: `npm install react-router-dom localforage match-sorter sort-by` <br />
> 6. TypeScript와 Node.js 모듈을 쓸 수 있도록 도와주는 환경 구축: `npm install @types/node` <br />
> 7. React Toast Popup 모듈 설치: `npm install react-simple-toasts` <br />
### 📚 페이지 라우터
### <mark>📌 Router 란?</mark>
> React Router는 React 애플리케이션에서 <b>클라이언트 사이드 라우팅(Client-Side Routing)</b>을 구현하기 위한 라이브러리입니다. React는 기본적으로 단일 페이지 애플리케이션(SPA)으로 동작하며, React Router를 사용하면 URL에 따라 다른 컴포넌트나 페이지를 렌더링할 수 있습니다.
### <mark>📌 Router 적용</mark>
® ```App.tsx```
> <b>라우팅</b>과 <b>네비게이션</b>을 정의, 
> 전체 앱의 라우팅을 설정



> 1. ```RecoilRoot``` : Recoil 상태를 전역에서 사용할 수 있도록 설정
> 2. ```BrowserRouter``` : 라우팅을 관리
> 3. ```CommonNav``` : 네비게이션을 최상단에 랜더링
> 4. ```Routes```: URL 경로에 따라 적절한 컴포넌트를 랜더링
> - ```/``` : ```MainPage```
> - ```/search/:id``` :  ```MainPage```
> - ```/bookmark``` : ```BookmarkPage```

® ```CommonNav.tsx```
> 네비게이션 UI를 렌더링하고, URL에 따라 활성 상태를 관리하며, Recoil상태를 업데이트


> 1. URL 감지 (```useLocation```) : 현재 경로를 추적해 네비게이션 항목의 ```isActive```상태를 업데이트
> 2. Recoil 상태 관리
> - 활성화된 메뉴의 ```SearchValue```를 ```searchState```에 설정
> - 페이지를 항상 초기화(```pageState``` -> 1)
> 3. UI 렌더링 : 활성화된 메뉴의 동적 스타일(```active/inactive```)적용
>

® 전체 흐름
> 1. ```App.tsx```에서 <b>라우팅</b>과 <b>네비게이션</b> 정의
> 2. ```CommonNav.tsx```는 <b>URL에 따른 네비게이션 상태 업데이트</b> 및 <b>Recoil 상태 관리</b>
> 3. 각 페이지는 ```Routes```를 통해 URL경로에 매핑되어 렌더링
### 🧷 css

### 🔖 공통 컴포넌트

### 📌 useState

### 🔗 Open Api 통신

### 📑 Recoil

## 4. 결과

| 메인 화면 | 이미지 검색 | 
|--|--|
| ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.46.38.png) | ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.53.23.png) |
| 페이지 라우터 | 북마크 페이지 |
| ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.54.26.png) | ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.54.40.png)
