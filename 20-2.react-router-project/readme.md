# React-Router Project

이제 리액트 라우터를 실습해 볼 시간입니다.
여기서는 간단하게 메모를 작성하는 웹을 만들어 보겠습니다.
데이터는 어쩔수없이 로컬에 저장하는 방식으로 진행을 하고, 라우팅을 하는것에 초점을 맞춰서 개발을 진행하려고 합니다.

## 289 ~ 293

여기까지는 기존에 배웠던 내용을 복습하고, 적용해 보았습니다(적을게 없어요!)

## 294.Page Not Found

아무리 개발자가 url을 잘 세팅해 놓아도, 그걸 따라가는 유저는 드물죠. url에 오타가 날 수도 있고,
아예 없는 페이지를 보여달라고 할 수도 있어요. 그럴때, 우리는 '아이고 잘못 오셨습니다.' 라는 표시를 해주어야 하는데,
그게 보통 우리가 자주보는 '404 Page not found' 입니다. 여기서 404는 서버 response와 관계되는 내용이니 넘어가고, 중요한것은,
만약 우리 예상에 없는 경로를 가려 했을때, 잘못왔다는 것을 인지시킬만한 페이지가 필요하다는 겁니다.
그걸 react-router는 * 라는 특별한 path로 모든 예상밖의 경로를 다 한곳으로 모아줍니다.
예를들어

```<Route path="*"> <NotFound/> </Route>```

이런식으로 말이죠.

## 295. After sending a form

이번엔 양식으로 넘어갑니다. 지금까지, 우리는 양식을 쓰면, 일단은 콘솔에 내용이 뜨게끔 만들었습니다.
그런데 보통 우리가 메일을 쓰던가, 어떤 폼을 쓰고 제출을 하면 다른 페이지로 이동을 하는데, 이건 어떻게 하는걸까요>
이건 저번에 봤던 Redirect와는 조금 다릅니다. Redirect는 url을 교통정리 하는것이라고 하면, 이번엔 이벤트 리스너에 가까운 거니깐요.
우리는 여기서 두가지 방법이 있다고 배웁니다(하나는 검색해서 알아봤어요!). 바로 useHistory 와 useNavigate인데요.
useHistory는 유저가 봤던 페이지의 히스토리에대한 리스트를 가져오는것 같습니다. 따라서 이 리스트 마지막에 새로 이동할 페이지를 push()나 replace()해준다면,
자연스럽게 이동할 수 있는 거겠죠. useNavigate는 useHistory를 더 찾아보려다 우연히 찾게 되었는데요, 아마 v6에서 지원하는 훅 같습니다.
이건 함수를 호출하는 훅 같네요. 간단히

```
    const navgate = useNavigate();
    ...
    ...
    ...
    navigate('/main')
```

이런 식으로 사용하면 되는것 같습니다. 강의에서 나온다면 더 보충할게요! 중요한것은, 우리가 event handler안에
다른 페이지로 이동시킬수 있는 방법이 있다는 것입니다.

## 296.Prompt

이번엔 프롬프트 입니다. 만약 유저가 어떤 폼을 작성하고 있는데, 실수로 뒤로가기를 눌러서 나가게된다면, 정보가 다 날아가게 됩니다(따로 저장해 놓은게 아니라면 말이죠). 이럴때 프롬트를 띄워서 1차적으로 정말
나갈건지 물어보는게 좋을때도 있습니다.
그럴때 사용할 수 있는 컴포넌트가 바로 <Prompt>입니다. 이건 when이라는 props를 통해 작동하는데, when에 있는 state가 true가 될때, 프롬프트가 작동하게 됩니다.
조금더 설명하자면, 만약 어떤 폼을 작성하고 있다고 해봅시다. 그럼 focus를 통해서 우리는 폼이 작성되고 있는지 아직 건드리지도 않았는지 체크 할 수 있는 boolean state를 가질 수 있겠죠.
여기서 <Prompt>에 boolean state를 넣어 줌으로서, 프롬트를 띄울수도 내릴수도 있게 되는 겁니다.

## 297. URL Query

url에는 query를 이용해서 정보를 실어 나를수 있습니다. 가령, 'www.main.com/?who=taesoo' 같은 형식으로 말이죠.(이렇게 개인정보를 넘기진 않아요!)
이런경우 리액트는 어떻게 처리할까요?

프로젝트에는 이 쿼리로 리스트의 순서를 바꾸는 기능을 구현하고 있습니다. 오름차순인지, 내림차순인지 쿼리에 담아서 처리를 해주는 겁니다.
이를 위해서 처음으로 해야할건 useLocation을 이용해 현재 페이지의 쿼리를 가져오는 겁니다.

```
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const isSortingAscending = queryParams.get('sort') === 'asc';
```

여기서 URLSearchParams는 js에서 제공하는 params을 가져오는 constructor입니다. get()을 이용해 특정 param의 값을 가져올수 있습니다.
그다음은, 이 기능을 담은 버튼을 만들건데, 그건 이렇게 만들면 됩니다.
```<button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>```

정렬을 다시 해줬으면 url도 바꾸어 주어야 하겠죠? 그 기능을 onClick에 붙혀서 구현하였습니다.

```
const changeSortingHandler = () => {
            history.push('/quotes?sort=' + (isSortingAscending ? 'desc' : 'asc'));
    }
```

전 강의에서 활용한 history를 이용하여 새로운 url을 히스토리에 집어넣어 주는 겁니다.

## 298.Interesting Feature of React-Router
거창한 제목에 비해 내용은 별거 아닙니다. 우리는 지금 quotedetail 페이지에 와있습니다. 여기서 이제 add comment 버튼을 추가할건데,
버튼을 누르면 버튼은 사라지고, 코멘트 창을 띄우고 싶습니다. 어떻게 하는게 가장 좋을까요?
여러 방법이 있겠지만, 여기서는 간단한 테크닉 하나를 소개하고 있습니다. 먼저 코드부터 볼까요.
```
<Route path={`/quotes/${params.quoteId}`} exact>
            <div className='centered'>
                <Link to={`/quotes/${params.quoteId}/comments`} className='btn--flat'>Load Comment</Link>
            </div>
        </Route>
```
이해가 가시나요? 먼저 버튼이 코멘트 url을 기리키게 합니다. 그러면 눌렀을때 코멘트 창이 같이 뜨겠죠. 그러면서 url도 같이 바뀌게 됩니다.
이때 밖에 감싼 Route에서는 정확한 url로 /quotes/${params.quoteId} 만을 원하게 되니까, 버튼이 사라지는 원리입니다. 간단하지만, 리액트 라우터를 제대로 이해하고 있어야지만 구현 가능한 컴포넌트 같습니다. 
이번 강의에는 이런 여러가지 기능의 활용을 저희 스스로 탐구하고 가지고 놀아볼것을 추천하고 있습니다.

## 299.Refactoring URL
지금까지 Link나 history.push()에 들어갈 url을 스트링 형태로 다 적어주었습니다. 하지만 만약 우리가 한 루트 url을 바꿔야 한다면, 그리고 아래의 모든 url이 하드코드 되어 있다면, 정말 다 바꾸긴 너무 싫겠죠.
이런 경우를 막기위해 세가지 정도의 방법으로 리팩토링이 가능합니다.
1. **useRouterMatch()**
   
    이걸 const에 묶어서 .path를 찾으면 현재 path를 반환해줍니다.

2. **useLocation()**

    여기에도 .pathname에 경로가 들어가 있습니다.
3. **new url object**

    맞는 말인지는 모르겠지만, history안에 푸시할 객체를 만들어서 패스해도 됩니다.<br> 이게좀 잘 몰라서 얘기하기 어려운데, useHistory()는 location 리스트를 반환합니다. 그러면 당연히 스트링 형식이 아닌, location object 형태로 푸시해도 상관이 없다는 겁니다. 그래서 객체안에, pathname(경로) 와 search(query params)를 넣어서 푸시 해도 잘 돌아갑니다.
    이 방법이 다시 읽을때는 조금 편해 보이긴 하네요.

## 300. Data fetching and sending





