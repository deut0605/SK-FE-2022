import React from 'react';
import $ from 'jquery';

export default function App() {
  const [list] = React.useState([
    { id: 1, text: 'item1', link: '#hook-1' },
    { id: 2, text: 'item2', link: '#hook-2' },
    { id: 3, text: 'item3', link: '#hook-3' },
    { id: 4, text: 'item4', link: '#hook-4' },
  ]);

  // 문서(DOM)에 접근, 조작해야 한다면??
  // 사이드 이펙트 (명령형 프로그래밍 컨트롤)
  React.useEffect(() => {
    const item3 = $('.demo li:nth-of-type(3) a');
    item3.css('color', 'maroon');
  }, []);

  // useState, useReducer 훅은 컴포넌트 리-랜더링 영향
  // useRef 참조 객체의 current 값은 뮤테이션(mutation) 가능 : 컴포넌트 리-랜더링 영상 안 줌
  // 1. DOM 노드 참조용
  // 2. 렌더링에 영향을 주지 않는 데이터 값 기억하고자 할 때

  // CASE 1
  const firstListItemRef = React.useRef(null); // { current }
  // console.log('in functional component: ', firstListItemRef);

  React.useEffect(() => {
    // console.log('in effect function: ', firstListItemRef);
    $(firstListItemRef.current).attr('title', '첫번째 리스트 아이템');
  }, []);

  // CASE 2
  const [count, setCount] = useState(100);
  useEffect(() => {
    setCount(1000); // 상태 업데이트 , 리-랜더링 1회 수행
  }, []);

  const numberRef = useRef(100);
  useEffect(() => {
    numberRef.current++;
    console.log(numberRef.current); // 101
  }, []);

  return (
    <div className="demo">
      <output>{count}</output>
      <output>{numberRef.current}</output>
      <ul>
        <li ref={firstListItemRef}>first list item element</li>
        {list.map(({ id, text, link }) => (
          <li key={id}>
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
