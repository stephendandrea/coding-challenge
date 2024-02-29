import { useEffect, useState } from "react";
import { WeekType } from "../../types/weekType";

export const useCommitHistory = () => {
  const [commitHistory, setCommitHistory] = useState<WeekType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/stats/commit_activity")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCommitHistory(data);
      })
      .catch((error: Error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, []);

  return { commitHistory, error };
};
