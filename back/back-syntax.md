1.  **모듈 가져오기 (`require`)**: Node.js 환경에서 다른 파일(모듈)의 기능을 가져올 때 사용합니다.
    ```javascript
    const express = require('express');
    const cors = require('cors');
    ```
2.  **상수 및 변수 선언 (`const`, `let`)**:
    *   `const`: 재할당할 수 없는 상수를 선언합니다. 객체나 배열의 내용은 변경될 수 있습니다.
    *   `let`: 재할당 가능한 변수를 선언합니다.
    ```javascript
    const app = express();
    const port = 3001;
    let guestbookEntries = [ /* ... */ ];
    let nextId = 3;
    ```
3.  **함수 호출**: `express()`를 호출하여 Express 애플리케이션 인스턴스를 생성합니다.
    ```javascript
    const app = express();
    ```
4.  **배열 리터럴 (`[]`)**: 여러 개의 값을 순서대로 저장하는 배열을 만듭니다.
    ```javascript
    let guestbookEntries = [ /* ... */ ];
    ```
5.  **객체 리터럴 (`{}`)**: 키(key)와 값(value) 쌍으로 이루어진 데이터를 저장하는 객체를 만듭니다.
    ```javascript
    { id: 1, name: "첫 방문자", message: "안녕하세요!", createdAt: new Date() }
    ```
6.  **화살표 함수 (`=>`)**: 함수를 간결하게 정의하는 방법입니다. 주로 콜백 함수로 많이 사용됩니다.
    ```javascript
    app.get('/guestbook', (req, res) => { /* ... */ });
    app.listen(port, () => { /* ... */ });
    const sortedEntries = [...guestbookEntries].sort((a, b) => b.createdAt - a.createdAt);
    ```
7.  **미들웨어 사용 (`app.use`)**: Express 애플리케이션에 미들웨어 함수를 적용합니다. 요청 처리 파이프라인에 함수를 추가하는 역할을 합니다.
    ```javascript
    app.use(cors());
    app.use(express.json());
    ```
8.  **라우팅 메서드 (`app.get`, `app.post`)**: 특정 HTTP 메서드(GET, POST 등)와 경로(path)에 대한 요청을 처리하는 핸들러 함수를 등록합니다.
    ```javascript
    app.get('/guestbook', (req, res) => { /* ... */ });
    app.post('/guestbook', (req, res) => { /* ... */ });
    ```
9.  **요청 및 응답 객체 (`req`, `res`)**: 라우트 핸들러 함수의 매개변수로, 각각 들어오는 요청과 나가는 응답에 대한 정보를 담고 제어하는 객체입니다.
    *   `req.body`: 요청 본문(body)에 접근합니다 (`express.json()` 미들웨어가 필요).
    *   `res.json()`: JSON 형식으로 응답을 보냅니다.
    *   `res.status()`: HTTP 응답 상태 코드를 설정합니다.
10. **콘솔 출력 (`console.log`)**: 디버깅이나 정보 확인을 위해 콘솔에 메시지를 출력합니다.
    ```javascript
    console.log('GET /guestbook 요청 받음');
    ```
11. **배열 메서드**:
    *   `sort()`: 배열의 요소를 정렬합니다. 정렬 기준을 제공하는 비교 함수를 인자로 받습니다.
    *   `push()`: 배열의 끝에 새 요소를 추가합니다.
    ```javascript
    const sortedEntries = [...guestbookEntries].sort((a, b) => b.createdAt - a.createdAt);
    guestbookEntries.push(newEntry);
    ```
12. **전개 구문 (`...`)**: 배열이나 객체의 요소를 개별 요소로 펼칩니다. 여기서는 `guestbookEntries` 배열을 복사하기 위해 사용되었습니다. 원본 배열을 변경하지 않고 정렬하기 위함입니다.
    ```javascript
    const sortedEntries = [...guestbookEntries].sort(/* ... */);
    ```
13. **구조 분해 할당 (`{}`)**: 객체나 배열의 속성을 추출하여 개별 변수에 할당합니다.
    ```javascript
    const { name, message } = req.body;
    ```
14. **조건문 (`if`)**: 특정 조건이 참(true)일 경우 코드 블록을 실행합니다. 여기서는 간단한 유효성 검사에 사용되었습니다.
    ```javascript
    if (!name || !message) { /* ... */ }
    ```
15. **논리 연산자 (`!`, `||`)**:
    *   `!`: NOT 연산자. 불리언 값을 반전시킵니다.
    *   `||`: OR 연산자. 두 피연산자 중 하나라도 true이면 true를 반환합니다.
16. **후위 증가 연산자 (`++`)**: 변수의 현재 값을 사용한 후, 그 값을 1 증가시킵니다.
    ```javascript
    id: nextId++
    ```
17. **`new Date()`**: 현재 날짜와 시간을 나타내는 `Date` 객체를 생성합니다.
    ```javascript
    createdAt: new Date()
    ```
18. **템플릿 리터럴 (``` ` ```)**: 백틱(`` ` ``)으로 문자열을 감싸며, 문자열 내부에 변수나 표현식을 `${...}` 형태로 쉽게 삽입할 수 있습니다.
    ```javascript
    console.log(`방명록 백엔드 서버가 http://localhost:${port}에서 실행 중입니다.`);
    ```