import React, { useEffect } from "react";
import getShows from '../modules/getShows'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from "semantic-ui-react";


const DisplayShows = () => {
  const dispatch = useDispatch()
  const shows = useSelector((state) => state.showsDisplay)

  useEffect(() => {
    getShows.index(dispatch)
  }, [])

  let showsDisplay = shows.map((shows) => {
    return (
      <Card.Group>
        {showsDisplay}
      </Card.Group>
    )
  }
}



export default DisplayShows