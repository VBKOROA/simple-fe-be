1.  **`'use client';`**: Next.js 지시문으로, 이 컴포넌트가 클라이언트 측에서 렌더링되고 실행되어야 함을 나타냅니다. 브라우저 API(예: `useState`, `useEffect`, `fetch`) 사용을 가능하게 합니다.
2.  **모듈 가져오기/내보내기 (`import`/`export default`)**:
    *   `import React, { useState, useEffect, useCallback } from 'react';`: React 라이브러리와 필요한 Hook들을 가져옵니다.
    *   `import './example.css';`: CSS 파일을 가져와 컴포넌트에 스타일을 적용합니다.
    *   `export default function Example() { ... }`: `Example` 함수 컴포넌트를 모듈의 기본 내보내기로 지정합니다.
3.  **함수 컴포넌트**: `function Example() { ... }` 구문은 React 함수 컴포넌트를 정의합니다.
4.  **React Hooks**:
    *   **`useState`**: 컴포넌트의 상태(state)를 관리합니다. `[value, setValue] = useState(initialValue)` 형태로 사용하며, 상태 값과 해당 상태를 업데이트하는 함수를 반환합니다. (예: `entries`, `name`, `message`, `isLoading`, `error`)
    *   **`useEffect`**: 컴포넌트 렌더링 이후에 부수 효과(side effect, 예: 데이터 가져오기, 구독 설정)를 수행합니다. 두 번째 인자인 의존성 배열(`[]` 또는 `[dependency]`)에 따라 실행 시점이 결정됩니다. 여기서는 컴포넌트 마운트 시 `fetchEntries`를 호출하는 데 사용됩니다.
    *   **`useCallback`**: 함수를 메모이제이션(memoization)하여, 의존성이 변경되지 않는 한 함수가 재생성되는 것을 방지합니다. 주로 `useEffect`의 의존성 배열에 함수를 전달하거나 자식 컴포넌트에 콜백 함수를 전달할 때 성능 최적화를 위해 사용됩니다. (예: `fetchEntries`)
5.  **`async`/`await`**: 비동기 작업을 동기 코드처럼 작성할 수 있게 해주는 문법입니다. `fetch`와 같은 Promise 기반 API를 사용할 때 코드 가독성을 높여줍니다. `async` 함수 내에서 `await` 키워드를 사용하여 Promise가 완료될 때까지 기다립니다. (예: `fetchEntries`, `handleSubmit`)
6.  **`fetch` API**: 네트워크 요청을 보내고 응답을 받는 데 사용되는 브라우저 내장 API입니다. Promise를 반환합니다.
    *   `fetch(API_URL)`: GET 요청으로 데이터를 가져옵니다.
    *   `fetch(API_URL, { method: 'POST', ... })`: POST 요청으로 데이터를 서버에 전송합니다. `headers`로 요청 형식을 지정하고, `body`에 전송할 데이터를 담습니다.
7.  **`try...catch...finally`**: 비동기 작업을 포함한 코드 블록에서 발생할 수 있는 오류를 처리하는 구문입니다.
    *   `try`: 오류가 발생할 가능성이 있는 코드를 실행합니다.
    *   `catch (err)`: `try` 블록에서 오류가 발생하면 실행됩니다. 오류 객체(`err`)를 받아 처리합니다.
    *   `finally`: `try` 또는 `catch` 블록 실행 후 항상 실행됩니다. 주로 로딩 상태 해제 등 마무리 작업에 사용됩니다.
8.  **Arrow Functions (`=>`)**: 함수를 간결하게 정의하는 문법입니다. (예: `fetchEntries`, `handleSubmit`, `onChange` 핸들러)
9.  **JSX (JavaScript XML)**: JavaScript 코드 내에서 HTML과 유사한 마크업을 작성할 수 있게 해주는 문법 확장입니다. React 요소를 생성하는 데 사용됩니다.
    *   HTML 태그 사용 (`div`, `h1`, `form`, `input`, `button` 등)
    *   JavaScript 표현식 포함 (`{isLoading}`, `{error}`, `{entry.name}`)
    *   조건부 렌더링 (`error && <p>...`, `isLoading ? '...' : '...'`)
    *   이벤트 핸들러 연결 (`onSubmit={handleSubmit}`, `onChange={(e) => setName(e.target.value)}`)
    *   배열 렌더링 (`entries.map(...)`) 및 `key` prop 사용
10. **`Array.prototype.map()`**: 배열의 각 요소를 변환하여 새로운 배열을 생성하는 메서드입니다. JSX에서 목록을 렌더링할 때 자주 사용됩니다.
11. **`JSON.stringify()`**: JavaScript 객체를 JSON 문자열로 변환합니다. 서버로 데이터를 보낼 때 사용됩니다.
12. **`event.preventDefault()`**: 이벤트의 기본 동작(예: 폼 제출 시 페이지 새로고침)을 막습니다.
13. **`new Date().toLocaleString()`**: 날짜 객체를 생성하고, 사용자의 지역 설정에 맞는 문자열 형식으로 변환합니다.