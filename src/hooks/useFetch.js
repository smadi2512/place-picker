import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsFetching(true);
      try {
        const data = await fetchFn({ signal: controller.signal });
        setFetchedData(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError({ message: error.message || "Failed to fetch data, please try again later." });
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();

    return () => {
      controller.abort(); // Cleanup
    };
  }, [fetchFn]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
