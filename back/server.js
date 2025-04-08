// server.js
const express = require('express');
const cors = require('cors'); // 다른 포트의 FE 요청을 허용하기 위해 필요

const app = express();
const port = 3001; // React 기본 포트 3000과 다른 포트 사용

// 가상의 데이터베이스 역할 (서버 메모리에 저장)
let guestbookEntries = [
  { id: 1, name: "첫 방문자", message: "안녕하세요!", createdAt: new Date() },
  { id: 2, name: "테스터", message: "방명록 테스트 중", createdAt: new Date() },
];
let nextId = 3; // 다음 글 ID

// 미들웨어 설정
app.use(cors()); // 모든 출처의 요청 허용 (개발용)
app.use(express.json()); // 요청 본문(body)을 JSON으로 파싱

// --- API 엔드포인트 ---

// GET /guestbook : 모든 방명록 글 가져오기
app.get('/guestbook', (req, res) => {
  console.log('GET /guestbook 요청 받음');
  // 최신 글이 위로 오도록 정렬 (선택 사항)
  const sortedEntries = [...guestbookEntries].sort((a, b) => b.createdAt - a.createdAt);
  res.json(sortedEntries);
});

// POST /guestbook : 새 방명록 글 추가하기
app.post('/guestbook', (req, res) => {
  console.log('POST /guestbook 요청 받음:', req.body);
  const { name, message } = req.body;

  // 간단한 유효성 검사
  if (!name || !message) {
    return res.status(400).json({ error: '이름과 메시지를 모두 입력해주세요.' });
  }

  const newEntry = {
    id: nextId++,
    name: name,
    message: message,
    createdAt: new Date(),
  };

  guestbookEntries.push(newEntry);
  console.log('새 글 추가됨:', newEntry);

  // 성공 응답 (새로 추가된 글 포함)
  res.status(201).json(newEntry);
});

// --- 서버 실행 ---
app.listen(port, () => {
  console.log(`방명록 백엔드 서버가 http://localhost:${port}에서 실행 중입니다.`);
});