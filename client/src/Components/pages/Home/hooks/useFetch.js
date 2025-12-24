import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // We use the 'path' passed into the hook
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${path}`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]); // Re-run if the path changes

  return { data, loading, error };
};

export default useFetch;
