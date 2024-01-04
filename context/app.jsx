"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextWrapper({ children }) {
  const [showDrawerCmp, setShowDrawerCmp] = useState(false);
  // const [selectedProductId, setSelectedProductId] = useState(false);

  const sharedState = {
    showDrawerCmp,
    setShowDrawerCmp,
    // selectedProductId,
    // setSelectedProductId,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
