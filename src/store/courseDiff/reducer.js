import { UPDATE_DIFF } from '../types'

const courseDiff = (
  state = 0,
  action
) => {
  switch (action.type) {
    case UPDATE_DIFF:
      return action.payload
    default:
      return state
  }
}

export default courseDiff
