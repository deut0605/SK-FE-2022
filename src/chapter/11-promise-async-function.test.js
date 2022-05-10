/* eslint-disable jest/expect-expect */
/* utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요. -------------------------------- */

import { fetchBooks } from '../utils/index.js';

describe('promise & async function 테스트', () => {
  // 데이터 패치 성공 시뮬레이션 코드 예시
  // 프로미스
  test('fetchBooks Promise 테스트', () => {
    return fetchBooks(100)
      .then((books) => {
        expect(books).toHaveLength(7);
      })
      .catch((error) => {
        expect(() => error.message).toThrow();
      });
  });

  // 데이터 패치 실패 시뮬레이션 코드 예시
  // 비동기 함수
  test('fetchBooks Async 함수 테스트', async () => {
    try {
      const books = await fetchBooks(500);
      expect(books).toHaveLength(7);
    } catch (error) {
      expect(() => error.message).toThrow();
    }
  });
});
