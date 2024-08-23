import { createContext, useContext } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

function useData() {
  const context = useContext(DataContext);
  if (context === undefined)
    throw new Error("DataContext was used outside the provider");
  return context;
}

export { useData, DataProvider };
