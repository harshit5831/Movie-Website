import { useEffect, useState } from "react";
import instance from "../axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    instance
      .get(url)
      .then((res) => {
        setData(res?.data);
      })
      .catch((error) => {
        setError(error.response.data.status_message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error };
}
