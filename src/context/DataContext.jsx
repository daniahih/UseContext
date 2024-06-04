import { createContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState("Hello from App");

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
