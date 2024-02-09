import { useState, useEffect } from "react";
import { FetchProps } from "../../interfaces/interfaces";

const useFetch = <T,>(url: string): FetchProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("There is something wrong with the connection");
        }
        const responseData: T = await response.json();
        setData(responseData);
      } catch (err) {
        const errorObj = err as Error;
        setError(errorObj);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
