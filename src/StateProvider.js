import React, { createContext, useReducer, useContext } from "react";

// Need of Context API
// 1. To track basket

// Prepares the Data layer
export const StateContext = createContext();

// wrap our app and provide data layer to every components in the application
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from data layer
export const useStateValue = () => useContext(StateContext);
