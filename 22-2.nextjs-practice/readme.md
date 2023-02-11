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
`<button>` 태그의 onClick에 링크 함수를 하나 걸어서 router.push('어드레스') 같은 형식으로 유저 페이지를 옮겨 갈 수 있습니다.

## 346. Custom module css
이 강의가 왜 중간에 있는지 모르겠음.. 그냥 평소 알던 moduel css 쓰는것처럼 쓰면 됩니다~
Style Sheet 을 관리하는데도 page/component 시스템은 좋은 호율을 낸다고 생각합니다. component별로 스타일싯이 있으면 개별적으로 수정이 용이하니까요.

## 347. Http Request of Next.js and Pre-rendering
이제 db가 있다고 가정하고, 데이터를 요청해보겠습니다. 평소에 하는것처럼 fetch와 useEffect를 통해서 데이터를 가져오면 되겠습니다.
다시한번 강조하지만, 리액트는 구조 자체가 synchronous하기 때문에, async function들은 반드시 useEffect안에서 dependency와 함께
처리해 주어야 합니다. 여기서 더 중요한것은, 데이터 fetching은 항상 컴포넌트가 다 만들어진 후에야, 도착한다는 것입니다.
우리 프로젝트로 예를 들자면, index.js 안의 <MeetupList>에 들어갈 데이터는 최조로 <MeetupList>가 랜더링 되고 난 후, useEffect안에서
불러와지고, 다시 <MeetupList>를 렌더링을 하게되는, 불필요한 일련의 작업을 거치게 됩니다.

이런 Pre-rendering의 문제점으로는 유저는 조금 더 많은 시간을 들여야 페이지를 볼 수 있고, SEO(Search engine Optimization?)같은 문제도 발생하게 됩니다.
Next.js는 이런 문제점들을 해결하고자 몇가지 방식을 제안하는데, 결과적으로 데이터를 먼저 받아서 랜더링을 진행하게끔 하는 특수한 함수들이 있습니다.

## 348. Static Page

### **기억 안나면 여기부터 보세요**
솔직히 위에서 하는 말이 뭔가 싶어서 조금 찾아봤는데, 조금 오해하고 있던 부분이 있다.
일단 다시 처음부터 내가 이해한대로 설명을 하자면

1. React vs Next.js

   리액트는 웹페이지를 뼈대있게 만들어주는 라이브러리이고, Next는 리액트를 쉽게 사용 할 수 있게 하는 프레임워크이다.
   리액트는 CSR을 지원하는 반면, 넥스트는 기본적으로 Pre-Rendering을 하고, 그 방법도 크게 2가지가 있다.
   CSR의 좋은점은 서버의 부담을 줄인다는 것이지만, SEO 문제도 있고, 다른 방법에 비해 느리다는 것이다.
   그런 문제점을 개선한것이 넥스트의 프리랜더링인데, 그것도 크게 두가지로 나뉜다.<br>

2. Static site generation vs.  Server side rendering
   
   그래, 이제 CSR이 페이지를 처음부터 끝까지 js을 이용해 만드니 느리다는건 알겠어. 그럼 왜 또 static page하고 SSR을 나누는거지?
   둘다 서버에서 뭘 하는것까지는 똑같다.
   
   1) Static Site Generation
   
      일단 Static site generation은 빌드타임때 모든것을 만들어 놓고, 요청이 올때 내보내기만 한다.
      다 만들어 놓은 것들이니, 요청이 가면서 처리할것도, 도착해서 랜더링 해야 할것도 없다.
      그렇기 때문에 굉장히 빠른것이다(일고있는 글에 따르면 ridiculously fast 라고 한다)
      그렇기때문에, 보여줘야 하는것이 정해져있거나, 변화가 거의 없거나, 유저마다 다른것을 보여줄 필요가 없거나, 데이터의 유통기한이 길다면,
      고려할만한 방법인 것이다.
   2) Server Side Rendering(SSR)
   
      반대로 위와 같은 특징들이 없거나, 하나라도 필요한 상황이 오면, SSR의 필요성이 올라간다.
      계속 데이터를 fetching해서, html 파일을 랜더링한 후, 보내는 방식으로 새로운 데이터를 추가하는 것이다.
      이런 방법은 전통적인 방법으로 알려져 있고, SEO를 액티브하게 해결하고자 할때 쓴다고 한다.

이제 대충 Static과 SSR을 구분할 수 있으니, 강의로 돌아와서, 넥스트는 일단 다 static이라고 한다.
그런데 여기에 데이터까지 붙혀서 statically generate를 하고 싶다면, getStaticProps라는 함수를 활용하면 된다.
이 함수는 비동기 함수여서, 데이터가 올때까지 넥스트가 기다리고, 데이터를 받으면 랜더링해서 전송하는 형태이다.
이 함수를 리턴으로 객체를 반환해야 한다. 그리고 그 안에는 무조건 props라는 값이 들어가 있어야하고,
그 props는 파일에 해당되는 component function의 parameter로 들어가게 된다. 

## 349. Static Page continued
이제 잠깐 run dev를 멈추고 run build를 하게되면, 빌드되는 페이지마다 어떤 종류로 빌드 되었는지 나옵니다.
Static, SSR,ISR(Incremental Static Rendering)같이요. 그냥 Static과 ISR의 차이를 얘기하자면,
넥스트는 디폴트가 static입니다. ISR 우리가 저번 강의에서 구현했듯, 어떤 정보를 미리 받아서 static하게 빌드 한것을 말하고요.
SSR은 서버에서 즉각적으로 만들어서 보내는 페이지입니다. 
그런데 SSG는 큰 문제점이 하나 있습니다. 데이터가 업데이트 되더라고, 반영을 못한다는 것이죠. 알리가 없으니깐요.
그걸 위해서 getStaticProps는 리턴 객체에 revalidate 값을 넣어서 데이터를 받게 합니다. revalidate 에 있는 숫자만큼, 페이지는 간격을 둬서 새로운 데이터를 받아올겁니다.
그렇기 때문에 계속 새로운 데이터를 띄울 수 있는 것이죠. 

## 350. Server Side Rendering (SSR)
이제 앞에서 설명했던 ssr을 만들어 봅시다. 이것도 static같이 특정 함수를 사용하게끔 만들어 놨는데, 그게 getServerSideProps() 입니다.
getStaticProps와 같이 객체를 반환하고, props 값을 가지고 해당 파일의 함수 컴포넌트에 패러미터로 들어갑니다.
하지만 revalidate 값은 무용지물이니 있지도 않습니다. getServerSideProps는 context를 매개변수로 받는데, 그것으로 req와 res객체로 접근 할 수 있습니다.
익스프레스와 비슷한 점이 있죠? 
지금까지 두가지의 pre-rendering 방법을 알아보았습니다. 두개의 장단점은 계속해서 설명했기에 넘어가고,
어떤 방법이 더 낫다는 것은 없습니다. 실전에서 상황에 맞게 쓰면 될것 같습니다.

## 351. Back to SSG
우리가 만드는 페이지는 데이터를 계속해서 업데이트 할 필요는 없습니다. 그렇기 때문에 서버에 부담이 가지 않는 SSG가 더 나은 선택일것 같습니다.
이제 meetupId 페이지를 만들어 볼텐데, 이와 같은 이유로 SSG로 만들어 보겠습니다.
당장은 데이터를 받아 올 수 없기 때문에, 반환값에 더미를 하드 코딩 하겠습니다.
근데 상세페이지에는 ID가 필요할텐데 그 값은 함수 컴포넌트 밖에서 어떻게 받아올까요?
getServerSideProps에서 context가 req나 res를 가지고 있는것과 달리, 
getStaticProps에서는 context에 params가 있어서, 이걸로 url query를 가지고 옵니다.

## 352. getStaticPath
다른 함수와 다르게 getStaticProps는 getStaticPath로 요청이 올 수 있는 url 경로를 미리 알려줘야 합니다.
예를들어, meetupId는 1부터 n까지 올 수 있다, 처럼 말이죠. 
[meetupId]/index.js를 보면, 반환하는 객체에 paths라는 list를 만들어주고, 올 수 있는 url을 객체화 하여 더해줍니다. 지금은 하드코드 하지만, 나중에 api를 다루게되면, 이런 루트를
동적으로 설정해줘야 삥이 안납니다. 추가로, 반환 객체에 fallback이라는 boolean 값을 설정해서, 만약 모르는 url이 들어왔을때
404를 띄울건지, 리디렉션을 할것인지 설정해 주어야 합니다.

## 353. Introduction to API Routes

API라는 개념을 설명하기에는 이 페이지로는 부족합니다ㅎㅎ 

그래서 어떻게 작동하는지만 여기서 설명하도록 하죠. page 폴더 아래 api라는 폴더를 만들고 파일을 만듭니다. 파일 이름이 api의 route가 되고, 이 안에서 작동하는 코드는
server side로 돌아가게 됩니다. 즉, 클라이언트에서 돌아가는 react에 관한 내용이 끝난다는 말입니다.
그 안에서 req method를 처리하고 데이터를 주고 받을 수 있게 됩니다.

## 354. MongoDB

pages/api/new-meetup.js 참고.
아.. 이게 백앤드를 알아야 이해 할 수 있는 개념인데, DB부터, mongodb connection까지 설명할게 너무 많아서 넘어가겠습니다.
그냥 명시된 파일을 보고 아 post req은 이렇게 하는거구나 라고 알면 되겠습니다.

## 355. Fetching data from internal api
여타 다른 fetch() 했던 방식과 마찬가지로, api의 경로를 fetch의 parameter로 사용하면 됩니다.


## 356. Getting Data from DB
getStaticProps의 재미있는 점은, 컴포넌트에 포함이 되지 않는다는 점입니다. 따라서 클라이언트가 볼 수도 없고, 그렇기 때문에
data fetching을 그 함수 안에서 해도 문제가 생기지 않는다는 것이죠. 하나 더 중요한것은, 우리가 데이터를 잘 가지고와도,
MongoDB는 id를 객체형태로 저장하고 있습니다. 따라서 객체를 unpack하여 id를 string으로 바꿔야만, 제대로 랜더링이 이루어 집니다.
(아니면 id를 애초에 객체로 만드세요)
pages/index.js를 참고하면 되겠습니다.

## 357. Fetching data in detail page
마찬가지로, 첫 인덱스 파일에서 데이터를 가져오는것 같이, 이번엔 아이디로 데이터를 긁어오면 됩니다.
정말 특별한것 없으니 넘어가겠습니다.

## 358. Adding meta data
마지막으로 메타 데이터를 추가합니다. 예를 들어, 크롬에서 위에 뜨는 이름이라던가, 검색 앤진에 짧게 뜨는 설명같은 것들이죠.
아주 간단하게도 넥스트는 Head라는 컴포넌트를 만들어서 사용합니다. 그냥 함수 컴포넌트 리턴에 끼워 넣어주면 되요.

## 259. Deploying the project: Vercel










