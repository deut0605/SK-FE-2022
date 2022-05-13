// 커스텀 훅 안에서는 훅을 사용할 수 있다.
export function useMouse() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(0);

  window.addEventListener('mousemove', (e) => {
    setX(e.pageX);
    setY(e.pageY);
  });

  return { x, y };
}
