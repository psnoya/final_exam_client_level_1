import axios from 'axios'

const getShows = {
  async shows() {
    let result = await axios.get("/shows")
  }
}


export {getShows}