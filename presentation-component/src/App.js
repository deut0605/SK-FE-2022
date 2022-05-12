import { A11yHidden } from './components/A11yHidden/A11yHidden';

export default function App() {
  return (
    <div className="container">
      <A11yHidden
        as="a"
        href="https://google.com"
        focusable
        className="designerClass"
      >
        <h1>Banner 컴포넌트가 이 곳에 위치해야 합니다.</h1>
      </A11yHidden>

      <h2 className="a11yHidden">Banner 컴포넌트가 이 곳에 위치해야 합니다.</h2>
    </div>
  );
}
