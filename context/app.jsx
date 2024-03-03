"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppContextWrapper({ children }) {
  const [userProfile, setUserProfile] = useState({});

  const sharedState = {
    userProfile,
    setUserProfile,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
