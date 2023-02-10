# Practice project with Next.js

이제 next.js를 사용하여 완성된 프로젝트를 하나 만들겁니다. SPA 구축만이 아닌,
SSR, CSR, 그리고 next.js 가 제공하는 API 통신까지 살펴보겠습니다.

## 341. Starting a new project
시작하기전, 스켈레톤 코드부터 살펴봅시다. 일단 우리가 만들어야 할 페이지는 총, 메인 페이지, 새로운 밋업 폼, 그리고 상세페이지 총 세개입니다.
이번 프로젝트의 목적은 next.js의 주기능을 살펴보기 위한 것이니, 컴포넌트는 거의 다 완성이 되어 있습니다.

1. 메인페이지

    메인 페이지는 /page 안에 index.js 에 만들어 줄겁니다.

2. 상세 페이지
   
    상세페이지에는 url에 id를 받아서 랜더링을 진행하려고 합니다. []안에 id param을 써주면 next.js가 자동으로 라우팅을 진행해 줍니다.
   
3. 양식 페이지

    양식 페이지는 new-meetup 이라는 라우트 안에 구현 하겠습니다.

## 342. Main Page
/page/index.js를 참고하면 됩니다. <MeetupList meetups={props.meetups}> 방식으로 기존에 해온 리액트 방식의 컴포넌트 구성을 따르고 있습니다.

## 343. New Meetup Page
/page/new-meetup.index.js을 참고. 메인 페이지와 비슷하게 <NewMeetupForm onAddMeetup={addMeetupHandler}/>을 사용하여 랜더 하고 있습니다.
onAddMeetup으로 양식을 제출했을때 작동할 함수를 포인팅 합니다. 다시한번 강조하자면, 세세하게 컴포넌트를 나누고 폴더 단위로 만드는 이유는, 라우팅을 위해서 입니다.

또 하나로 알아야 하는 것은 _app.js 파일입니다. 만약 우리가 어떤 레이아웃을 사이트 전체에 적용시키려면 일일이 페이지 파일마다 레이아웃을 감싸줘야 할까요?
그러기엔 너무 번거롭고 귀찮습니다. _app.js는 우리가 만들 사이트의 root component입니다. 따라서 여기에 레이아웃을 적용시키면, 사이트 전체에 걸쳐서 사용할 수 있게 되는 것이죠.

## 344. Detail Page

/page/[meetupId]/index.js 참고. 다른 페이지와 똑같이 만들어 줍니다. 특별한 것은 없습니다.

다만, 이 페이지를 여는 버튼을 좀 볼건데요, /components/meetups/MeetupItem.js 안에 상세 페이지를 여는 버튼이 있습니다.
보토은 이 태크를 Link 로 바꿔서 가볍게 만들지만, 지금은 조금 다른 방식을 찾아보겠습니다.

Next.js에서는 useRouter라는 훅으로 유저 히스토리를 볼 수 있습니다. 그리고 push()를 이용해 현재 페이지를 조작할 수도 있구요.
<button>태그의 onClick에 링크 함수를 하나 걸어서 router.push('어드레스') 같은 형식으로 유저 페이지를 옮겨 갈 수 있습니다.

## 345. Custom module css
이 강의가 왜 중간에 있는지 모르겠음.. 그냥 평소 알던 moduel css 쓰는것처럼 쓰면 됩니다~

## 346. 


