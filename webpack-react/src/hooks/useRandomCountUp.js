import { useState, useEffect } from 'react';
import { getRandomMinMax } from '../utils';

export function useRandomCountUp({
  min = 0,
  max = 100,
  step = 1,
  fps = 60,
} = {}) {
  const [targetCount] = useState(() => getRandomMinMax(min, max));
  let [isComplete, setIsComplete] = useState(false);
  let [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (count >= targetCount) {
        setIsComplete(true);
        setCount(targetCount);
      } else {
        setCount(count + step);
      }
    }, 1000 / fps);

    return () => clearTimeout(timeoutID);
  }, [count]);

  return { count, targetCount, isComplete };
}
