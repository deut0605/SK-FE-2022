// numberWithComma 함수를 "기본 내보내기"로 내보냅니다.

// 이름으로 내보내기 (named export)
// export const numberWithComma = (n) =>
const numberWithComma = (n) =>
  n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

// 기본 내보내기 (default export)
export default numberWithComma;
