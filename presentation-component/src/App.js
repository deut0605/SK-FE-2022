import { A11yHidden, HomeLink } from 'components';

export default function App() {
  return (
    <div className="container">
      <HomeLink />
      <A11yHidden as="h1" className="a b c d" focusable>
        Banner 컴포넌트가 이 곳에 위치해야 합니다.
      </A11yHidden>
      <A11yHidden as="a" href="https://google.com" external focusable>
        Banner 컴포넌트가 이 곳에 위치해야 합니다.
      </A11yHidden>
    </div>
  );
}
