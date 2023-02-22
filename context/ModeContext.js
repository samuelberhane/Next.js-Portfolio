import { createContext, useContext, useReducer } from "react";

const ModeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, darkTheme: !state.darkTheme };
    default:
      return state;
  }
};

const initialState = {
  darkTheme: true,
};

const ModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ModeContext.Provider>
  );
};

const useModeContext = () => {
  return useContext(ModeContext);
};

export { ModeContextProvider, useModeContext };
