# rollingpaper_clone

# clone한 사이트
[https://rollingpaper.site/](https://rollingpaper.site/)

## 2020-09-17
- react ref(element직접 접근 위해)
- 비동기 처리 후 반환된 promise 객체를 사용하는 법.(resolve, then)
- 배열을 map을 사용해 component 생성

## 2020-09-21
- jsx 안에는 if문을 쓸 수 없음. 아래의 예시로 if문의 대안책을 마련할 수 있었음.
    {
        조건문 &&
        조건문의 true, false에 따라 출력될 html 태그
    }
###### 삼항연산자 또한 대안이 될 수 있다.

- img 태그안에 경로를 변수에 담아 변수를 props로 보내고 싶었지만 실패. import 이미지변수 from 경로 해서 이미지변수를 보내야 가능.
###### 혹은 hook을 이용해 props로 전달해서 img componenet 안에서 import해도 되지만 화살표 함수로 만들어놔서 변경하기가 시간이 걸림.

- component들을 반응형 디자인으로 제작하지 않아, 조금만 뷰포트가 바뀌어도 무너진다. 다음 프로젝트부터는 반응형으로 고려해서 하자.

## 2020-09-23
- axios.post를 이용해 서버 DB에 card info를 업데이트 시켰다. 그러나 card info들을 렌더링하는 페이지에서 새로고침을 하지 않으면 정보가 업데이트되지 않았음. 엣지의 경우는 바로 반영되지만 크롬은 정보가 없었음. 검색 결과 브라우저 캐시의 문제인 것으로[X]
    ### 시도
    - react-hot-loader를 사용하여 새로고침없이 바뀐 부분만 업데이트 => 실패..

## 2020-09-24
- dnd module을 이용헤 스티커 붙이기.[O]
    - hook 써야함.
    ###### useState를 import하여 function 컴포넌트에도 유지가능한 state를 부여할 수 있음.
- 스티커 deltaX,Y 위치 조절하기. 원하는 곳에 이미지 입력이 안됌.[X]


# TODO
- kakao api 사용
- 리팩토링
###### 더 작은 컴포넌트 단위로 쪼개기
