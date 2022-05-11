import './RandomCountUp.css';
import React, { useState, useEffect } from 'react';
import { getRandomMinMax as getRandom, autoPlaySound } from '../../utils';
import { useAutoPlaySound, useRandomCountUp } from '../../hooks';

const initialDocumentTitle = document.title;

export function RandomCountUp({ min = 0, max = 100, step = 1, fps = 60 }) {
  const { count, targetCount, isComplete } = useRandomCountUp({
    min,
    max,
    step,
    fps,
  });
  
  useEffect(() => {
    document.title = `(${targetCount}) ${initialDocumentTitle}`;
  }, [targetCount]);

  const { audioNode } = useAutoPlaySound(
    'count-up',
    '/assets/audio/count-up.mp3'
  );

  useEffect(() => {
    if (isComplete) {
      audioNode?.pause?.();
    } else {
      audioNode?.play?.();
    }
  }, [audioNode, isComplete]);

  return (
    <div className="randomCountUp">
      <output style={isComplete ? { animationName: 'none' } : null}>
        {count}
      </output>
    </div>
  );
}
