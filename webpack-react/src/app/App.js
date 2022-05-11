import './App.css';
import React, { useState, useEffect } from 'react';
import { getRandom } from '../utils';

export default function App({ min = 0, max = 100, step = 1, fps = 60 / 1000 }) {
  // `상태` target_count: 한 번 마운트 된 이후, 값이 변하지 않는 값
  const [targetCount] = useState(() => getRandom(min, max));

  useEffect(() => {
    document.title = `(${targetCount}) ${document.title}`;
  }, [targetCount]);

  // `상태` count: 변하는 값
  let [count, setCount] = useState(0);

  useEffect(() => {}, [count]);

  // `상태` isComplete 애니메이션 완료 여부 값
  let [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // [문제 원인]
    // state 업데이트 방식을 이전 상태를 기억해야 하는데
    // useEffect 콜백 함수가 단 1회 마운트 될 때 실행되므로
    // count 상태는 단 1회만 변경되기 때문입니다.
    //
    // 이 문제를 해결하려면 업데이트 함수에 콜백을 설정해 이전 상태 값을
    // 기억한 형태에서 업데이트를 해야 UI에 반영됩니다.
    const intervalId = setInterval(() => {
      setCount(count + step);
      // console.log('continuesly call?');
    }, fps);
  }, []);

  return (
    <div className="randomCountUp">
      <output style={isComplete ? { animationName: 'none' } : null}>
        {count}
      </output>
    </div>
  );
}
