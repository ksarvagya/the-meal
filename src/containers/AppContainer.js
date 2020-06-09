import { connect } from 'react-redux'
import { fetchCourses } from '../store/courses/actions'
import App from '../components/App/App'

const mapStateToProps = state => ({
  courses: state.courses,
  courseDiff: state.courseDiff,
  bannerVisible: state.bannerVisible
})

const mapDispatchToProps = {
  fetchCourses
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
