# Section 16. Form and User Input Validation

사용자가 어떤 데이터를 보내려할때, 우리는 이게 알맞는 형식인지 확인하고 보낼 필요가 있다.
이때, 우리는 세가지 옵션이 있는데,
1. 형식을 제출했을때 (When form is submitted)
2. 유저가 포커스를 풀때 (When an input is losing focus)
3. 유저가 타이핑을 할때마다 (On every keystroke)

정도가 있을거 같다.

### 1. When form is submitted
간단히 말하자면, 폼을 다 끝내고 버튼을 눌렀을때, validation 진행한다는 얘기.
물론 한번에 싹 확인하고, 뭘 쳐도 다 용인해 주는 장점이 있지만, 피드백이 너무 느리다.

### 2.When an input is losing focus
형식을 치고나서 유저가 submit을 하기 전에 미리 뭐가 안되는것인지 알려준다. 
단점으로는, input을 다 입력할때까지 validation을 못한다는 것인데, 나는 이게 단점이라고 생각하지는 않는다.

### 3.On every keystroke
계속 validation check을 하고있기 때문에, 유저가 input을 잘못치는 순간 알람을 줄 수 있다.
물론, 트래픽은 책임 안진다.

----------------
이번 섹션에서는 아마도 위의 세가지 방법을 다 탐구하면서, 장단점을 파악하며 구현해 볼것같다.

