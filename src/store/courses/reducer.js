import { COURSES_FETCH_COMPLETE } from '../types'

const courses = (
  state = [],
  action
) => {
  switch (action.type) {
    case COURSES_FETCH_COMPLETE:
      return action.payload
    default:
      return state
  }
}

export default courses
