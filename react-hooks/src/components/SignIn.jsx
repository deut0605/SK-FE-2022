import React, { useEffect, useRef, useContext } from 'react';
import {
  AppStateContext,
  updateCurrentUser,
  updatePermisson,
  useAuth,
} from '../contexts';

function SignIn() {
  const { state, dispatch } = useAuth();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(
          updateCurrentUser({
            uid: 'fjdkwijk1m',
            displayName: 'yamoo9',
          })
        );

        dispatch(updatePermisson('administrator'));
      }}
    >
      로그인 {state.currentUser?.displayName}
    </button>
  );
}

export default React.memo(SignIn);
