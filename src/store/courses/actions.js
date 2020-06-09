import { getCourses } from './services'
import { showBanner } from '../courseDiff/actions'
import { COURSES_FETCH_COMPLETE } from '../types'

export const fetchCourses = () => (
  dispatch,
  getState
) => {
  const prevState = getState()
  return getCourses(prevState.courses)
    .then(courses => {
      if (courses.length > prevState.courses.length) {
        const difference = courses.length - prevState.courses.length
        dispatch(showBanner(difference))
      }
      return courses
    })
    .then(courses => dispatch(coursesFetchComplete(courses)))
}

export const coursesFetchComplete = (courses) => ({
  type: COURSES_FETCH_COMPLETE,
  payload: courses
})
