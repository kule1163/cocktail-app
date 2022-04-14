import React, { ContextType, useReducer } from 'react'
import { createContext } from 'react';

type AppState = typeof initialState;

type Action = 
{type: "SET_VALUE"; payload: string;}
| {type: "SET_INDIGATOR"; payload: string;}
| {type: "SET_SEARCH"; payload: string;}

interface InputProviderProps {
    children: React.ReactNode;
}

const initialState = {
    value: "",
    ingredient: "",
    search: "name"
};

const reducer = (state: AppState, action: Action) => {
    switch(action.type) {
      case "SET_VALUE":
        return {...state, value: action.payload}
      case "SET_INDIGATOR":
        return {...state, value: action.payload}
        case "SET_SEARCH":
          return {...state, search: action.payload}  
      default: 
            return state
    }
}

const InputValueContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<Action>;
  }>({ state: initialState, dispatch: () => {} });

  function InputValueProvider({ children }: InputProviderProps) {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <InputValueContext.Provider value={{ state, dispatch }}>
        {children}
      </InputValueContext.Provider>
    );
  }
  
  export { InputValueContext, InputValueProvider };

