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


# TODO
- kakao api 사용
- 리팩토링
###### 더 작은 컴포넌트 단위로 쪼개기
