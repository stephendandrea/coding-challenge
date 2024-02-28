import { useEffect, useState } from "react";
import { WeekType } from "../../types/weekType";

export const useCommitHistory = () => {
  const [commitHistory, setCommitHistory] = useState<WeekType[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/stats/commit_activity")
      .then((response) => response.json())
      .then((data) => {
        setCommitHistory(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return { commitHistory };
};
