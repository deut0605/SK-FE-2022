import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// 훅을 사용할 수 없는 경우
// function callHooks() {
//   const [a] = useState(10);
// }

class CComp extends React.Component {
  state = {
    x: 0,
    y: 0,
    z: 0,
  };

  method = () => {
    this.setState(
      {
        z: 10,
      },
      () => {
        // React 상태 업데이트는 동기 처리가 아닙니다.
        console.log(this.state); // { x: 0, y: 0, z: 10 }
      }
    );

    console.log(z); // 10???
  };
}

// 함수형 컴포넌트에서는 훅을 호출할 수 있다.
// 클래스 컴포넌트는 훅을 사용할 수 없다.
function App() {
  // [state, setState]
  const [count, setCount] = useState(0);

  // useEffect를 state와 연관지어 사용하는 이유
  // 기존 class 컴포넌트의 setState() 콜백과 유사
  useEffect(() => {
    console.log(count); // 1
  }, [count]);

  // 라이프 사이클 메서드 흉내
  // componentDidMount() {}
  useEffect(() => {}, []);
  // componentDidMount() {}
  // componentDidUpdate() {}
  useEffect(() => {});
  // componentWillUnmount ????
  // update: cleanup → run
  // will unmount : cleanup
  useEffect(() => {
    // $, jQuery
    // subscription
    // const assignPluginInstance = $('.assign-plugin').assignPlugin({}); // .destory()
    const unsubscribe = subscribe(user);

    // cleanup (return function)
    // cancel subscription
    // return () => assignPluginInstance.destory();
    return () => unsubscribe();
  });

  // 하면 안되는 패턴 1
  // useEffect(() => checkCount(count), [count]);

  useEffect(() => {
    checkCount(count);
    // return undefined
  }, [count]);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // 하면 안되는 패턴 2
  // useEffect(async () => {
  //   try {
  //     const response = await axios.get(apiAddress);
  //     setData(response);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    async function dataFetch() {
      try {
        const response = await axios.get(apiAddress);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    dataFetch();
  }, []);

  // useEffect(() => {
  //   // 서버로부터 요청한 데이터를 패치(응답)
  //   // Promise 또는 Async 함수 활용
  //   axios.get(apiAddress)
  //     .then(response => console.log(responose))
  //     .catch(error => console.error(error.message));
  // }, []);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleClick}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
