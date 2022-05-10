/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const show = function () {
  return `${this.name} 보다.`;
};

// 함수 선언
function look() {
  return `${this.name} 지켜보다.`;
}

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = function () {
  // 브라우저 전역 환경 window {}
  // Node.js 모듈 환경 undefined
  console.log(this);
  return `${this.name} 관찰하다.`;
};

const euid = {
  name: '이듬',
  show,
  look,
  // 객체의 메서드로 화살표 함수를 사용하면
  // this 참조가 기대와 달라지므로 오류를 유발
  watch,
};

console.dir(euid);
