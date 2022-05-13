import React from 'react';

const common = {
  colors: {
    white: '#fff',
    black: '#000',
  },
};

const theme = {
  common,
  light: {
    forgound: common.colors.black,
    background: common.colors.white,
  },
  dark: {
    forgound: common.colors.white,
    background: common.colors.black,
  },
  curerntTheme: 'light',
};

const ThemeContext = React.createContext(theme);

// custom hook
// reusable

export const useTheme = () => {
  // 테마 객체를 공급하는 컴포넌트의 하위 컴포넌트에 일괄적으로 테마 값을 제공하는 커스텀 훅
  const theme = React.useContext(ThemeContext);
  return React.useMemo(() => theme, []);
};
