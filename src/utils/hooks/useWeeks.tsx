import { useEffect, useState } from "react";
import { WeekType } from "../../types/weekType";

export const useWeeks = () => {
    const [weeks, setWeeks] = useState<WeekType[]>([]);
    useEffect(() => {
      fetch('https://api.github.com/repos/facebook/react/stats/commit_activity').then(response => response.json()).then(data => {
        setWeeks(data);
        console.log(data)
      }).catch(error => { console.error('Error:', error); });
    }, [])
    return { weeks };
  }

