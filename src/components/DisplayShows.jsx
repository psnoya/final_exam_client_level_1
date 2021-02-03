import React, { useEffect } from "react";
import showsList from '../modules/getShows';
import { useSelector} from 'react-redux';
import { Card } from "semantic-ui-react";


const DisplayShows = () => {
  const getShows = useSelector((state) => state.getShows)

  useEffect(() => {
    showsList.index()
  }, [])

  let showsDisplay 
  if (getShows) {
  showsDisplay = getShows.map((shows) => {
    return (
      <Card.Group>
        {showsDisplay}
      </Card.Group>
    )
  }
}


export default DisplayShows