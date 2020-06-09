import { combineReducers } from 'redux'

// reducers
import courses from './courses/reducer'
import courseDiff from './courseDiff/reducer'
import bannerVisible from './bannerVisible/reducer'

export default combineReducers({
  courses,
  courseDiff,
  bannerVisible
})
