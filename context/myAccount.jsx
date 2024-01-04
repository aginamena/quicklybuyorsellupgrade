"use client";
import { createContext, useContext, useState } from "react";

const MyAccountContext = createContext();

export function MyAccountContextWrapper({ parentState, children }) {
  const [selectedProductId, setSelectedProductId] = useState(false);

  const sharedState = {
    selectedProductId,
    setSelectedProductId,
    ...parentState,
  };

  return (
    <MyAccountContext.Provider value={sharedState}>
      {children}
    </MyAccountContext.Provider>
  );
}

export function useMyAccountContext() {
  return useContext(MyAccountContext);
}
