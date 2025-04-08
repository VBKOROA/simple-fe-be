1.  **`'use client';`**: Next.js 지시문으로, 이 컴포넌트가 클라이언트 측에서 렌더링되고 실행되어야 함을 나타냅니다. 브라우저 API나 React Hook (`useState`, `useEffect` 등)을 사용하는 컴포넌트에 필요합니다.
2.  **`import`**: ES6 모듈 시스템의 일부로, 다른 파일에서 내보낸(export) 변수, 함수, 클래스, 컴포넌트 등을 가져옵니다.
    ```javascript
    import React, { useState, useEffect, useCallback } from 'react';
    import './example.css';
    ```
3.  **`export default`**: ES6 모듈 시스템에서 해당 파일의 기본 내보내기(export)를 지정합니다. 다른 파일에서 `import` 할 때 중괄호 없이 이름을 지정하여 가져올 수 있습니다.
    ```javascript
    export default function Example() { /* ... */ }
    ```
4.  **함수 컴포넌트**: React 컴포넌트를 JavaScript 함수 형태로 정의합니다. JSX를 반환하여 UI를 구성합니다.
    ```javascript
    export default function Example() { /* ... */ }
    ```
5.  **React Hooks**: 함수 컴포넌트 내에서 상태 관리, 생명주기 관리 등의 React 기능을 사용하게 해주는 함수들입니다.
    *   **`useState`**: 컴포넌트의 상태(state)를 관리합니다. 상태 변수와 해당 상태를 업데이트하는 함수를 배열로 반환합니다.
        ```javascript
        const [entries, setEntries] = useState([]);
        const [name, setName] = useState('');
        ```
    *   **`useEffect`**: 컴포넌트 렌더링 이후에 특정 작업(Side Effect, 예: 데이터 가져오기, 구독 설정)을 수행합니다. 두 번째 인자인 의존성 배열(`[]`)에 따라 실행 시점이 결정됩니다.
        ```javascript
        useEffect(() => {
          fetchEntries();
        }, [fetchEntries]);
        ```
    *   **`useCallback`**: 함수를 메모이제이션(memoization)하여, 의존성이 변경되지 않는 한 함수가 재생성되는 것을 방지합니다. 주로 자식 컴포넌트에 함수를 props로 전달하거나 `useEffect`의 의존성 배열에 함수를 포함할 때 사용됩니다.
        ```javascript
        const fetchEntries = useCallback(async () => { /* ... */ }, []);
        ```
6.  **`const`**: 재할당할 수 없는 상수를 선언합니다. 주로 변경되지 않을 값이나 함수, 컴포넌트 선언에 사용됩니다.
    ```javascript
    const API_URL = 'http://localhost:3001/guestbook';
    const [entries, setEntries] = useState([]); // setEntries는 함수지만, 변수 자체는 재할당되지 않음
    ```
7.  **화살표 함수 (`=>`)**: 함수를 간결하게 정의하는 문법입니다. `function` 키워드 대신 사용되며, `this` 바인딩 방식이 다릅니다. 콜백 함수나 간단한 함수 정의에 많이 사용됩니다.
    ```javascript
    const fetchEntries = useCallback(async () => { /* ... */ }, []);
    const handleSubmit = async (event) => { /* ... */ };
    onChange={(e) => setName(e.target.value)}
    ```
8.  **`async`/`await`**: 비동기 작업을 동기 코드처럼 작성할 수 있게 해주는 문법입니다. `async` 함수 내에서 `await` 키워드를 사용하여 Promise가 완료될 때까지 기다립니다. 주로 API 호출과 같은 비동기 로직 처리에 사용됩니다.
    ```javascript
    const fetchEntries = useCallback(async () => { /* ... */ }, []);
    const handleSubmit = async (event) => { /* ... */ };
    const response = await fetch(API_URL);
    const data = await response.json();
    ```
9.  **`fetch` API**: 네트워크 요청(HTTP 요청)을 보내고 응답을 받기 위한 브라우저 내장 API입니다. Promise를 반환합니다.
    ```javascript
    const response = await fetch(API_URL); // GET 요청
    const response = await fetch(API_URL, { method: 'POST', /* ... */ }); // POST 요청
    ```
10. **Promise**: 비동기 작업의 최종 완료 또는 실패를 나타내는 객체입니다. `fetch`와 같은 비동기 API는 Promise를 반환하며, `.then()`, `.catch()` 또는 `async/await`와 함께 사용됩니다.
11. **`try...catch...finally`**: 코드 실행 중 발생할 수 있는 오류를 처리하는 구문입니다. `try` 블록 안의 코드를 실행하고, 오류 발생 시 `catch` 블록이 실행됩니다. `finally` 블록은 오류 발생 여부와 관계없이 항상 실행됩니다.
    ```javascript
    try {
      // 비동기 작업 시도
    } catch (err) {
      // 오류 처리
    } finally {
      // 항상 실행되는 코드 (예: 로딩 상태 해제)
    }
    ```
12. **JSON (JavaScript Object Notation)**: 데이터를 교환하기 위한 경량의 텍스트 기반 형식입니다.
    *   **`response.json()`**: `fetch` 응답(Response) 객체의 메서드로, 응답 본문을 JSON으로 파싱하여 JavaScript 객체로 변환하는 Promise를 반환합니다.
    *   **`JSON.stringify()`**: JavaScript 값이나 객체를 JSON 문자열로 변환합니다. API 요청 시 body에 데이터를 담아 보낼 때 사용됩니다.
        ```javascript
        body: JSON.stringify({ name, message }),
        ```
13. **객체 리터럴 (`{}`)**: 키-값 쌍으로 데이터를 구조화합니다. `fetch` 요청의 옵션 객체, `headers` 객체, `body` 데이터 등에 사용됩니다.
    ```javascript
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message })
    }
    ```
14. **객체 속성 축약 (`{ name, message }`)**: 객체 리터럴을 정의할 때 변수 이름과 속성 이름이 같다면, `: value` 부분을 생략할 수 있습니다. `JSON.stringify({ name: name, message: message })` 대신 `JSON.stringify({ name, message })`로 사용됩니다.
15. **이벤트 처리**: 사용자 인터페이스와의 상호작용(클릭, 입력 등)에 반응하는 방식입니다. React에서는 JSX 요소에 `onEventName` 형태의 prop으로 이벤트 핸들러 함수를 전달합니다.
    *   **`onSubmit`**: `<form>` 요소에서 폼이 제출될 때 발생합니다.
    *   **`onChange`**: `<input>`, `<textarea>`, `<select>` 요소의 값이 변경될 때 발생합니다.
    *   **이벤트 객체 (`event`, `e`)**: 이벤트 핸들러 함수는 이벤트 객체를 인자로 받습니다. 이 객체를 통해 이벤트 관련 정보(예: `e.target.value`로 입력값 접근)에 접근하거나 기본 동작을 제어(`event.preventDefault()`)할 수 있습니다.
        ```javascript
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setName(e.target.value)} />
        </form>
        ```
16. **조건부 렌더링**: 특정 조건에 따라 다른 UI를 보여주는 기법입니다.
    *   **논리적 AND 연산자 (`&&`)**: 조건이 참일 때만 뒤따르는 JSX를 렌더링합니다.
        ```javascript
        {error && <p>오류: {error}</p>}
        {isLoading && entries.length === 0 && <p>...</p>}
        ```
    *   **삼항 연산자 (`조건 ? 값1 : 값2`)**: 조건에 따라 다른 값을 반환합니다. 버튼 텍스트 변경 등에 사용됩니다.
        ```javascript
        <button>{isLoading ? '등록 중...' : '글 남기기'}</button>
        ```
17. **JSX (JavaScript XML)**: JavaScript 코드 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법 확장입니다. React에서 UI 구조를 정의하는 데 사용됩니다.
    *   HTML 태그와 유사한 요소 (`div`, `h1`, `form`, `input`, `button`, `ul`, `li` 등)
    *   속성(props) 전달 (`className`, `value`, `onChange`, `onSubmit`, `disabled`, `key`, `style` 등)
    *   중괄호 `{}`를 사용하여 JavaScript 표현식 삽입 (`{name}`, `{message}`, `{isLoading ? '...' : '...'}`, `{entries.map(...) }`)
18. **배열 메서드**:
    *   **`map()`**: 배열의 각 요소에 대해 주어진 함수를 호출하고, 그 결과로 새로운 배열을 생성합니다. React 목록 렌더링에 필수적으로 사용됩니다. 각 항목에는 고유한 `key` prop을 제공해야 합니다.
        ```javascript
        {entries.map((entry) => (
          <li key={entry.id}>...</li>
        ))}
        ```
    *   **`length`**: 배열의 요소 개수를 반환합니다. 조건부 렌더링에서 배열이 비어있는지 확인할 때 사용됩니다.
        ```javascript
        {entries.length === 0 && <p>...</p>}
        ```
19. **`new Date()`**: 주어진 값(여기서는 `entry.createdAt`)을 기반으로 `Date` 객체를 생성합니다.
20. **`Date.prototype.toLocaleString()`**: `Date` 객체를 지역 설정에 맞는 문자열 형식으로 변환합니다. (예: "2025. 4. 9. 오후 3:14:15")
    ```javascript
    {new Date(entry.createdAt).toLocaleString()}
    ```
21. **논리 연산자 (`!`, `||`, `&&`)**: 조건문이나 조건부 렌더링에서 불리언(Boolean) 로직을 구성하는 데 사용됩니다.
    *   `!`: NOT (참을 거짓으로, 거짓을 참으로)
    *   `||`: OR (피연산자 중 하나라도 참이면 참)
    *   `&&`: AND (모든 피연산자가 참이어야 참)
        ```javascript
        if (!name || !message) { /* ... */ } // 이름 또는 메시지가 없는 경우
        {isLoading && entries.length === 0 && <p>...</p>} // 로딩 중이고 글이 없는 경우
        ```
22. **`Error` 객체**: 오류를 나타내는 내장 객체입니다. `throw new Error('메시지')` 형태로 사용자 정의 오류를 생성하고 발생시키는 데 사용됩니다. `catch` 블록에서 이 객체를 받아 오류 메시지(`err.message`) 등에 접근할 수 있습니다.
23. **`alert()`**: 브라우저에서 간단한 경고 대화상자를 표시하는 함수입니다. 주로 간단한 알림이나 디버깅 목적으로 사용됩니다.