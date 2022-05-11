import { useState, useEffect } from 'react';
import { autoPlaySound } from '../utils';

export function useAutoPlaySound(id, src) {
  let [audioNode, setAudioNode] = useState(null);

  useEffect(() => {
    if (audioNode) audioNode.loop = true;
  }, [audioNode]);

  useEffect(() => {
    autoPlaySound({
      id,
      src,
      callback() {
        setAudioNode(document.getElementById(id));
      },
    });
  }, []);

  return { audioNode };
}
