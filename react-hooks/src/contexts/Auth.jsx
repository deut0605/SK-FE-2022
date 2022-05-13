import React, { createContext, useContext, useReducer, useMemo } from 'react';

const initialAuth = {
  currentUser: null,
  isAuth: false,
  permission: null,
};

const AuthContext = createContext(initialAuth);

// action types
const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
const UPDATE_PERMISSION = 'UPDATE_PERMISSION';

// action creators
export const updateCurrentUser = (payload) => ({
  type: UPDATE_CURRENT_USER,
  payload,
});

export const updatePermisson = (payload) => ({
  type: UPDATE_PERMISSION,
  payload,
});

const authReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case UPDATE_PERMISSION:
      return {
        ...state,
        permission: action.payload,
      };
  }
  return state;
};

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialAuth);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AuthContext.Provider value={value} {...props} />;
};

export const useAuth = () => useContext(AuthContext);
