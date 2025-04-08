'use client';

import React, { useState, useEffect, useCallback } from 'react';
import './example.css'; // 간단한 스타일링을 위해 필요

const API_URL = 'http://localhost:3001/guestbook'; // 백엔드 API 주소

export default function Example() {
    const [entries, setEntries] = useState([]); // 방명록 글 목록 상태
    const [name, setName] = useState('');       // 이름 입력 상태
    const [message, setMessage] = useState(''); // 메시지 입력 상태
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태
    const [error, setError] = useState(null);      // 에러 상태
  
    // 백엔드에서 방명록 글 목록을 가져오는 함수
    const fetchEntries = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('데이터를 불러오는데 실패했습니다.');
        }
        const data = await response.json();
        setEntries(data); // 상태 업데이트
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, []); // useCallback으로 감싸 불필요한 재생성 방지
  
    // 컴포넌트가 처음 마운트될 때 방명록 글 로드
    useEffect(() => {
      fetchEntries();
    }, [fetchEntries]); // fetchEntries가 변경될 때만 실행 (사실상 한번만 실행됨)
  
    // 폼 제출 처리 함수
    const handleSubmit = async (event) => {
      event.preventDefault(); // 기본 폼 제출 동작 방지
      if (!name || !message) {
        alert('이름과 메시지를 모두 입력해주세요!');
        return;
      }
  
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // 보내는 데이터가 JSON임을 명시
          },
          body: JSON.stringify({ name, message }), // JavaScript 객체를 JSON 문자열로 변환
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || '글 등록에 실패했습니다.');
        }
  
        // 성공 시: 입력 필드 초기화 및 목록 새로고침
        setName('');
        setMessage('');
        fetchEntries(); // 목록을 다시 불러와 업데이트
  
      } catch (err) {
        setError(err.message);
        alert(`오류 발생: ${err.message}`); // 사용자에게 오류 알림
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="App">
        <h1>간단 방명록</h1>
  
        {/* 글 작성 폼 */}
        <form onSubmit={handleSubmit} className="guestbook-form">
          <div>
            <label htmlFor="name">이름:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // 입력값 변경 시 상태 업데이트
              disabled={isLoading} // 로딩 중일 때 비활성화
            />
          </div>
          <div>
            <label htmlFor="message">메시지:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? '등록 중...' : '글 남기기'}
          </button>
        </form>
  
        {/* 오류 메시지 표시 */}
        {error && <p style={{ color: 'red' }}>오류: {error}</p>}
  
        {/* 방명록 목록 */}
        <div className="guestbook-entries">
          <h2>방명록 목록</h2>
          {isLoading && entries.length === 0 && <p>글 목록을 불러오는 중...</p>}
          {!isLoading && entries.length === 0 && !error && <p>아직 등록된 글이 없습니다.</p>}
          <ul>
            {entries.map((entry) => (
              <li key={entry.id}>
                <strong>{entry.name}:</strong> {entry.message}
                <span className="entry-date">
                  ({new Date(entry.createdAt).toLocaleString()}) {/* 날짜 표시 */}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}