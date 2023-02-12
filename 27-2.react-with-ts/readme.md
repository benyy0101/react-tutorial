# React Project with Typescript
이제 타입스크립트의 기본은 다 배웠고, 어떻게 리액트와 융합이 되는지, 프로젝트를 통해 알아보겠습니다.
리액트와 타입스크립트를 동시에 사용하는 방법은 구글에 자세하게 나와있어서 따로 설명하지 않겠습니다.

## 419. Typescript Configuration
일단 타입스크립트와 리액트를 설치했다면, package.json에 평소 보지못한 library가 들어있을겁니다.
"@types/jest": "^26.0.22",
"@types/node": "^12.20.7",
"@types/react": "^17.0.3",
같은 것들인데요, 이것이 타입스크립트와 리액트의 교두보 역할을 해준다고 생각하면 됩니다.
ts는 작동하기 전에 js 로 다시 컴파일이 된 후, 실행이 된다는 것을 기억하시나요? 그렇기 때문에,
위의 library가 ts와 리액트를 연결하는 것입니다. 

## 420. Components in TSX
별거 없습니다. 평소 하던데로 하면 됩니다~

## 421. Props in TSX

