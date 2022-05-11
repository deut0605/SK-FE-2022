import './RandomCountUp.css';
import React, { useState, useEffect } from 'react';
import { getRandom, autoPlaySound } from '../../utils';

const initialDocumentTitle = document.title;

export function RandomCountUp({ min = 0, max = 100, step = 1, fps = 60 }) {
  // `상태` target_count: 한 번 마운트 된 이후, 값이 변하지 않는 값
  const [targetCount] = useState(() => getRandom(min, max));

  // `상태` isComplete: 애니메이션 완료 여부 값
  let [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    document.title = `(${targetCount}) ${initialDocumentTitle}`;
  }, [targetCount]);

  // `상태` count: 변하는 값
  let [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (count >= targetCount) {
        setIsComplete(true);
        setCount(targetCount);
        audioNode?.pause?.();
      } else {
        audioNode?.play?.();
        setCount(count + step);
      }
    }, 1000 / fps);

    return () => clearTimeout(timeoutID);
  }, [count]);

  let [audioNode, setAudioNode] = useState(null);

  useEffect(() => {
    if (audioNode) audioNode.loop = true;
  }, [audioNode]);

  useEffect(() => {
    let audioId = 'count-up';
    autoPlaySound({
      id: audioId,
      src: '/assets/audio/count-up.mp3',
      callback() {
        setAudioNode(document.getElementById(audioId));
      },
    });
  }, []);

  return (
    <div className="randomCountUp">
      <output style={isComplete ? { animationName: 'none' } : null}>
        {count}
      </output>
    </div>
  );
}
