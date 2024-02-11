import { createContext } from "react";
import { useFetch } from "../hooks";
import { DataProviderProps, FetchProps } from "../interfaces/interfaces";
import { url } from "../utils/endpointsUrl";

export const DataContext = createContext<FetchProps<any>>({
  data: null,
  loading: false,
  error: null,
});

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const { data, loading, error } = useFetch(url);

  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>;
};
