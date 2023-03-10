# Introduction to Typescript

지금부터는 타입스크립트가 뭔지 살펴보겠습니다. 타입스크립트는 자바스크립트를 대신하여 쓰이고 있는 언어입니다.
당연하게도, 타입스크립트는 js보다 더 많은 기능을 제공하고, 웹개발에 더 적합하게 설계 되었습니다.

기본적으로 타입스크립트는 자바스크립트에 'static typing'을 더한 형태입니다. 기존의 js는 함수의 매개변수로 어떤것이 와도, 알아서 처리했습니다.
예를 들어, 만약 두 값을 더하는 함수가 있다고 해 봅시다. 이 함수에 두 숫자를 넣으면 자동적으로 더한 값을 반환합니다.
하지만 만약 이 함수에 두 문자열을 넣으면 어떻게 될까요? 두 문자열을 합친 문자열을 반환하게 됩니다. 당연히 이 방법이 유연하고, 편할때도 있습니다.
하지만 이런 유연성은, 우리가 실수를 했을때도, 아무 문제 없이 원래 컴퓨터가 처리하는 대로 처리하고 넘어간다는 겁니다. 
우리의 의도와는 반대되는 결과를 불러와도 말이죠. 이를 막기위해 Ts는 변수마다 타입을 지정하게 해놉니다.
그 타입에 맞지않는 값이 들어오면, 당연히 에러를 던지게 되어있습니다. 

물론 이것이 타입스크립트의 전부는 아닙니다. 지금부터 찬찬히 살펴보겠습니다.

## 410. Installing TS

타입스크립트는 자바스크립트의 확장형이기 때문에, 웹에서는 작동하지 않습니다. 
타입스크립트를 자바스크립트로 컴파일을 해주고, 그것을 다시 웹으로 보내는 형식입니다.
타입스크립트는 별도의 configuration file이 없으면, npx tsc + 실행 할 파일명 으로 실행 할 수 있습니다.

## 411. Types in TS: primitives

기본적으로 c++을 배울때 들어본, 여러가지 타입들이 살아나는 셈입니다.
기초적인 넘버, 문자열, boolean같은 타입과, 배열, 객체같은 좀 복잡한 타입, 그리고
마지막으로 함수와 매개변수까지 탐구해 보겠습니다.

기본적인 타입들은 아실겁니다. 변수 옆에 : 과 타입을 적어주면 ts가 타입에러를 잡아줄겁니다.

## 412. Types in TS: complex types

복잡한 타입으로는 배열과 객체가 있습니다.
일단 배열은 한 형태의 타입만으로 배열을 만들 수 있습니다.
예를들어, 문자열이라던가, 숫자열같이 하나의 타입으로 된 배열 말입니다.
만드는 방법은, 변수옆에 :string[]같이 만들고싶은 타입과 []를 추가해주면 됩니다.
만약 이러한 배열에 숫자를 입력하면 에러가 됩니다.

객체는 어떻게 만들까요? {}로 만들수 있는데, 이 안에 객체에 들어갈 속성과, 그 속성의 타입을 적어주면 됩니다.
예를 들어, person이라는 객체안에 name과 age를 넣고 싶다고 하면, person: {name: string; age: number;}; 이런식으로 말이죠.
만약 이외의 속성을 부여하려면 타입에러가 납니다.

더 나아가서, 객체의 배열은 어떻게 만들까요? 객체 생성자 뒤에 []를 붙여주면 됩니다.

## 413. Type Inference

하지만 매번 변수를 선언할때마다 타입을 지정해 주어야하면 조금은 불편하겠죠.
그렇기때문에, ts는 처음 변수를 선언하고 저장한 값의 타입을 기억하게 할 수 있습니다.
예를들어, name = 'HI' 이렇게 선언하면, 이 뒤에는 name에 string만 쓸수 있는 것이죠. 
이런 방법을 Type inference라고 합니다. 

## 414. Multiple Types in one variable (Union Type)
항상 우리가 한 변수에 한 타입만 저장할수는 없습니다. 가끔은 숫자가 와야 할 때도 있고,
다시 문자열이 와야 할 때도 있고 하죠. 그럴때 사용하는 방법이 Union Type 입니다. 논리 연산할때 처럼 |
을 가지고 타입을 연결해 주면 됩니다. 예를 들어, var course: string | number 이런식으로 말이죠.


## 415. Type Aliases 
많이쓰는 타입 청크를 따로 저장 할 수 있습니다. 커스텀 타입이 가능하다고도 볼 수 있습니다.
type Person = {...} 이런식으로 말이죠. 개발시간을 획기적으로 줄여줄겁니다.

## 416. Functions and Function types

함수의 params 와 return 값도 모두 타입을 지정 할 수 있습니다. 

function add(a: number,b: number): number | string {
return a+b;
}

이런식으로 말이죠. 사실 굳이 명시하지 않아도, param의 값으로 type inference가 일어나기도 합니다.
하지만 리턴 타입을 명시하고 싶은 경우에는, 충분히 활용이 된다는 사실은 알고 가면 되겠습니다. 

## 417. Generic Type




