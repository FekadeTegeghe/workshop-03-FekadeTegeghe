import React from "react";
export const ACTIONS = {
  SET_USER: "SET_USER",
  SET_REPOS: "SET_REPOS",
  INIT_DATA: "INIT_DATA",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return { ...state, user: action.user };
    case ACTIONS.SET_REPOS:
      return { ...state, repos: action.repos };
    case ACTIONS.INIT_DATA:
      return { user: action.user, repos: action.repos };
    default:
      return state;
  }
};

const GlobalContext = React.createContext({
  user: {},
  repos: [],
});

export default GlobalContext;
