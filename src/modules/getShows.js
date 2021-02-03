import axios from 'axios'

const getShows = {
  async index(dispatch) {
    let result = await axios.get('https://content.viaplay.se/pc-se/serier/samtliga'
    )

    store.dispatch({
      type: 'SHOW_SHOWS_FEED',
      payload: response.data._embedded['viaplay:blocks'][0]
      ._embedded['viaplay:products']
    })
  }}

export {getShows}