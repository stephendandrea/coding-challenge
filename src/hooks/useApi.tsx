import axios from "axios";
import { useEffect, useState } from "react";

type useApiProps = {
  url: string;
};

type useApiReturn = {
  data: any;
  loading: boolean;
  error: any;
  reFetch: () => void;
};

const useApi = ({ url }: useApiProps): useApiReturn => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const BACKEND_URL =
    "https://api.github.com/repos/facebook/react/stats/commit_activity";

  const getData = () => {
    setError(null);
    setLoading(true);
    axios
      .get(BACKEND_URL + url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const reFetch = () => {
    console.log(" refetching");
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    loading,
    error,
    reFetch,
  };
};

export default useApi;
