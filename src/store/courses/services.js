import { API_BASE } from '../../constants'

export const getCourses = (prevState) => (
  fetch(`${API_BASE}/meals`)
    .then(blob => blob.json())
    .then(json => json[0])
    .then(meal => meal.acf.courses)
    .then(courses => courses.length ? Promise.all(courses.map(getCourse)) : prevState)
)

const getCourse = (id) => (
  fetch(`${API_BASE}/course/${id}`)
    .then(blob => blob.json())
)
