# my-album📷
## 1. 소개
### 프로젝트 명 
> 🌄 사진 api를 활용한 이미지 검색 웹 사이트 🌉

<br><br>
### 프로젝트 내용
> 여러 종류의 사진을 제공하는 이미지 API를 활용해 **TypeScript** 기반 **React**로 개발된 웹사이트이다. 사진과 정보를 제공할 뿐만 아니라 검색, 북마크 등 다양한 기능을 지원한다.

<br><br>

### Vite 사용 효과
#### 📌 기본 React app과 비교
| **특징**             | **CRA (Create React App)**           | **Vite**                           |
|----------------------|-------------------------------------|-----------------------------------|
| **속도**             | 초기 빌드와 개발 서버가 느림         | 초기 빌드와 개발 서버가 매우 빠름  |
| **Hot Module Reload**| 느리고 전체 리로드 필요              | 매우 빠르고 변경된 부분만 적용     |
| **설정 유연성**      | 복잡한 설정 필요 (eject 필요)         | 플러그인으로 간단히 확장 가능       |
| **빌드 속도**         | 느림                                  | 최적화된 프로덕션 빌드 지원        |
| **최신 기술 지원**    | 업데이트가 느림                       | 최신 웹 기술과 표준을 적극 활용    |

<br><br>

### 타입스크립트 사용 장점
#### 📌 안정성
- TypeScript는 컴파일 단계에서 오류를 잡아주어 런타임 에러를 줄여준다.
- API 응답이나 컴포넌트 props 구조를 명확히 정의할 수 있어, 예상치 못한 문제를 방지한다.

#### 📌 개발 생산성
- 자동 완성과 코드 힌트를 제공하여 코드를 빠르고 정확하게 작성할 수 있다.
- 리팩토링이 더 쉬워져 프로젝트를 수정하거나 확장할 때 시간을 절약가능.

#### 📌 유지보수성
- 타입 정의가 코드의 문서화 역할을 해준다.<br><br>
- 프로젝트가 커지더라도 명확한 구조 덕분에 관리와 유지보수가 더 효율적이다.

<br><br>

## 2. 사용 기술
<div style="display: flex; gap: 10px;">
  <img src="https://camo.githubusercontent.com/e89cc7228d58884fdd9fe4388f57e5cd29d3b16472ad4c3aa75312198949e09a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d3331373843363f7374796c653d666c61742d737175617265266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" alt="TypeScript">
  <img src="https://camo.githubusercontent.com/f5aaeddebfb89b74e44e33753e684f64b764729d8455bbae398911442f946ab9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666c61742d737175617265266c6f676f3d5265616374266c6f676f436f6c6f723d7768697465" alt="React">
  <img src="https://img.shields.io/badge/vite-vite?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://camo.githubusercontent.com/61a01b501f7bb79e0ed1440b120bd9a9721226f9eb3594d837567e85c1aa9518/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d3135373242363f7374796c653d666c61742d737175617265266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="CSS3">
</div>


## 3. 상세
### [⚙️ 프로젝트 환경 설정]
> 1. 프로젝트 환경설정(vite를 활용한 React 프로젝트) 설치 : `npm install vite@latest` <br />
> 2. React 중앙집중식 상태관리 라이브러리 Recoil 설치 : `yarn add recoil` <br />
> 3. 외부 오픈 API 통신을 위한 라이브러리 axios 설치 : `npm install axios` <br />
> 4. CSS 스타일링을 위한 SASS/SCSS 설치 : `yarn add -D sass` <br />
> 5. React Router 설치: `npm install react-router-dom localforage match-sorter sort-by` <br />
> 6. TypeScript와 Node.js 모듈을 쓸 수 있도록 도와주는 환경 구축: `npm install @types/node` <br />
> 7. React Toast Popup 모듈 설치: `npm install react-simple-toasts` <br />

<br><br>


### [📚 페이지 라우터]
#### <mark>📌 Router 란?</mark>
> React Router는 React 애플리케이션에서 <b>클라이언트 사이드 라우팅(Client-Side Routing)</b>을 구현하기 위한 라이브러리이다. React는 기본적으로 단일 페이지 애플리케이션(SPA)으로 동작하며, React Router를 사용하면 URL에 따라 다른 컴포넌트나 페이지를 렌더링이 가능하다.
#### <mark>📌 Router 적용</mark>
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

<br><br>
### [🧷 Style]
#### <mark>📌 SCSS 적용</mark>
> <b>SCSS(Sassy CSS)</b>는 CSS의 확장 버전으로, 더 효율적이고 유지보수하기 쉬운 스타일을 작성할 수 있게 해주는 CSS 전처리기 Sass의 문법입니다. 기존 CSS 문법을 그대로 사용하면서 추가적인 기능(<mark>변수, 중첩, 믹스인</mark> 등)을 제공

<br><br>
### [🔖 공통 컴포넌트]
#### <mark>📌 공통 컴포넌트 사용</mark>
> 반복되는 UI 요소를 별도의 컴포넌트로 분리하여 구현하였다. 

#### <mark>📌 공통 컴토넌트 효과</mark>
> `코드 간결화` : 전체 페이지는 컴포넌트를 호출하여 렌더링만 처리하고, 코드 양을 크게 줄이는 효과를 가짐<br><br>
> `재사용성` : 공통 컴포넌트를 다양한 페이지나 상황에서 재활용 효과<br><br>
> `유지보수성` : UI 변경 시 컴포넌트만 수정하면 모든 페이지에 반영되어 수정이 용이함.

<br><br>
### [💿 useState]
#### <mark>📌 UI 반복생성</mark>
® `useState` 로 동적 데이터 관리
> `navigaion` 상태는 JSON 파일(`nav.json`)에서 읽어온 데이터를 기반으로 관리<br><br>
> `useEffect`를 통해 URL 경로가 변경될 때마다 `navigation`상태 업데이트

® UI 반복 생성
> `navigaion.map()` 을 사용해 `Link`컴포넌트를 동적으로 생성하여 각 네비게이션 항목을 렌더링<br><br>
> <b>CSS 클래스</b>는 `item.isActive`상태에 따라 동적으로 설정

<br>

#### <mark>📌 검색 기능</mark>
® 검색어 관리
> `useState`를 사용하여 사용자가 입력한 검색어 `text`상태로 관리<br><br>
> `onChange` 이벤트를 통해 입력 필드의 값이 변경될 때 상태를 업데이트

® Recoil 상태 업데이트
>  검색 버튼 클릭 시 `searchState`와 `pageState`를 업데이트하여 검색 동작을 트리거함

<br><br>
### [🔗 Open API 통신]
#### <mark>📌 Unsplash API를 활용한 통신 및 데이터 호출</mark>
® Open API 사용
> 이 프로젝트에서는 <b>Unsplash API</b>를 사용해서 사진 데이터를 불러옴<br><br>
> <b>검색어(query)</b>와 <b>페이지 번호(page)</b>를 파라미터로 전달하여 원하는 데이터를 가져온다.

® Recoil Selector 활용
> `searchState` : 검색어를 관리하는 상태<br><br>
> `pageState` : 현재 페이지를 관리하는 상태<br><br>
> Recoil의 `selector`를 통해 검색어와 페이지 번호에 따라 API를 호출

® API 호출
> <b>URL : </b>`http://api.unsplash.com/search/photos` <br><br>
> <b>주요 파라미터 : </b>
> - `query` : 검색어
> - `page` : 현재 페이지 번호
> - `per_page` : 한 페이지당 가져올 데이터 개수
> - `client_id` : API 인증 키
>
> 응답 데이터: 사진, 작성자 정보, 업로드 날짜 등.

® Recoil과 `useRecoilValueLoadable`
> API 호출 상태(`loading`,`hasValue`,`hasError`)를 관리<br><br>
> 데이터를 성공적으로 가져오면, 이를 기반으로 UI를 동적으로 렌더링

® API 통신 실패 시 처리
> API 호출 실패 시 에러를 출력하며 사용자에게 적절한 메시지를 표시<br><br>
> 로딩 상태에서는 별도의 로딩 UI를 제공

® UI 렌더링
> 데이터를 기반으로 카드 UI를 생성하여 화면에 표시
> 검색어 변경 또는 페이지 이동 시 API가 재호출되어 UI가 업데이트 됨


<br><br>
### [📑 Recoil]
#### <mark>📌 Recoil 검색 기능</mark>
® 구조
> `searchstate` : 검색어를 전역적으로 관리하는 상태<br><br>
> `pageState` : 현재 페이지 번호를 관리하는 상태.<br><br>
> `imageData` Selector: 검색어(searchState)와 페이지 번호(pageState)를 기반으로 API를 호출하여 데이터를 가져오는 로직.

® 동작 흐름
> `검색어 입력` : 사용자가 검색창에 입력한 검색어는 searchState에 저장되고, 입력값이 없을 경우 기본 검색어로 "Korea"가 설정<br><br>
> `Recoil Selector로 API 호출` : `imageData` Selector는 `searchState`와 `pageState`를 기반으로 Unsplash API를 호출하고, API 호출 성공 시 데이터를 반환하고, 실패 시 에러를 처리<br><br>
> `UI 업데이트` : `useRecoilValueLoadable`을 통해 API 호출 상태(loading, hasValue, hasError)를 관리하며, 데이터가 성공적으로 반환되면, 이를 기반으로 UI가 동적으로 렌더링

<br>

#### <mark>📌 Recoil + 로컬 스토리지로 구현한 북마크 기능</mark>
® 구조
> <b>로컬 스토리지 </b>: 북마크 데이터를 브라우저의 `localStorage`에 저장.<br><br>
> <b>Recoil 상태 관리</b>: `bookmarkState` 로 로컬 스토리지와 동기화하여 북마크 데이터를 관리.

® 동작 흐름
> `북마크 추가` : 사용자가 특정 이미지를 북마크하면, 해당 데이터가 로컬 스토리지와 `bookmarkState`에 저장되고, 중복 데이터가 저장되지 않도록 체크<br><br>
> `북마크 삭제` : 사용자가 북마크를 제거하면, 해당 데이터가 로컬 스토리지와 bookmarkState에서 삭제됨<br><br>
> `북마크 데이터 로드` : 컴포넌트가 로드될 때 `localStorage`에서 데이터를 가져와 `bookmarkState`에 저장하고, 상태가 초기화되지 않도록 로컬 스토리지 데이터를 동기화<br><br>
> `북마크 목록 UI` : `bookmarkState`의 데이터를 기반으로 북마크된 이미지 리스트를 렌더링, 북마크된 데이터가 없을 경우, 기본 메시지를 출력

## 4. 결과

| 메인 화면 | 이미지 검색 | 
|--|--|
| ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.46.38.png) | ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.53.23.png) |
| 페이지 라우터 | 북마크 페이지 |
| ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.54.26.png) | ![image](https://github.com/Gunayeon/React-album/blob/main/img/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-12-19%20%EC%98%A4%ED%9B%84%203.54.40.png)
