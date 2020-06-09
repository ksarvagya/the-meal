import { TOGGLE_BANNER } from '../types'

const bannerVisible = (
  state = false,
  action
) => {
  switch (action.type) {
    case TOGGLE_BANNER:
      return action.payload
    default:
      return state
  }
}

export default bannerVisible
