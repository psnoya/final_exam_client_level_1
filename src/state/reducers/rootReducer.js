import initialState from '../store/initialState'

const rootReducer = ( state = InitialState, action) => {
  switch (action.type) {
    case 'SHOW_SHOWS_FEED':
      return {
        ...state,
        showsDisplay: action.payload,
      }

      default:
        return state
  }
}

export default rootReducer