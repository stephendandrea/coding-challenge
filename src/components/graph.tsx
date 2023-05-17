import { useEffect, useState } from 'react'
import { fetchApiData } from '../utils/fetchApiData';
import { formatDistance, subDays } from 'date-fns'

interface Square {
  total: number,
  week: number,
  days: number[]
}

const squareColor = {
  darkest: "#305F2D",  // Darkest: 63-84 commits
  darker: "#4A9746",   // Darker: 42 - 62 commits
  base: "#8DC578",     // Base: 21 - 41 commits
  lighter: "#CCE194",  // Lighter: 1 - 21 commits
  lightest: "#EAEDF0", // Lightest (empty): 0 commits
}

const getColor = (day: number) => {
  if(day > 0 && day < 21) {
    return squareColor.lightest
  } else if(day > 20 && day < 41) {
    return squareColor.lighter
  } else if(day > 41 && day < 62) {
    return squareColor.base
  } else if(day > 62 && day < 84) {
    return squareColor.darker
  } else {
    return squareColor.darkest
  }
}

const Graph = () => {
  const [graphData, setGraphData] = useState<Square[]>([])
  const orderedGraphData = graphData?.sort((a, b) => b.week - a.week)
  
  /**
   * fetchData - a function that fetches data from an API and sets the state for graph data
   *
   * @returns {Promise<void>}
   */
  const fetchData = async () => {
    const data = await fetchApiData();
    setGraphData(data);
  }

  orderedGraphData.map(element => {
    element.days.forEach(day => {
      getColor(day)
    });
    
  });


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="grid">
      <ul className="months">
        
      </ul>
      <ul className="days">
        
      </ul>
      <ul className="squares">

      </ul>
    </div>
  )
}

export default Graph