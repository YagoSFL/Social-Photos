const INITIAL_STATE = { gallery: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'POST_CHANGED':
      return  ({ ...state, gallery: action.payload})
    default:
      return state
  }
}