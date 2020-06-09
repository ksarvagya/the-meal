import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { timeout } from '../../utils'
import { COURSES_FETCH_TIMEOUT, colors, themeColors } from '../../constants'

class App extends Component {
  componentDidMount () {
    this.fetchNewCourses()
  }

  fetchNewCourses = () => {
    const { fetchCourses } = this.props
    fetchCourses()
      .then(() => timeout(COURSES_FETCH_TIMEOUT))
      .then(this.fetchNewCourses)
  }

  render () {
    const { courses, courseDiff, bannerVisible } = this.props

    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    }

    return (
      <Root>
        {bannerVisible && (<Banner>{`${courseDiff} new course${courseDiff === 1 ? '' : 's' } added.${courses.length > 1 ? ' swipe for more.' : ''}`}</Banner>)}
        <Slider {...settings}>
          {courses.length ? courses.map((course, i) => (
            <Course key={course.id} index={i}>
              <Type>{course.acf.course_type.name}</Type>
              <Title>{course.title.rendered}</Title>
              <Description dangerouslySetInnerHTML={{ __html: course.acf.blurb }}></Description>
            </Course>
          )) : (
            <Preloader>Food will be served shortly.</Preloader>
          )}
        </Slider>
      </Root>
    )
  }
}

export default App

const Root = styled.div`
width: 100%;
height: 100%;

.slick-slider,
.slick-list,
.slick-track {
  width: 100%;
  height: 100%;
}`

const Preloader = styled.li`
  padding: 32px 24px;
  color: #212121;
`

const Course = styled.li`
  padding: 32px 24px;
  background-color: ${({ index }) => themeColors[index % 3]};
  color: ${colors.white};
  position: relative;
  overflow: auto;
`
const Type = styled.h2`
  font-family: 'Sofia', sans-serif;
  font-size: 13px;
  text-transform: uppercase;
  margin-bottom: 40px;
  letter-spacing: 2px;
`

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.6;
  margin-bottom: 24px;
`

const Description = styled.div`
  font-size: 18px;
  line-height: 2;
`

const Banner = styled.div`
  padding: 32px 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  color: ${colors.white};
  font-family: 'Sofia', sans-serif;
  font-size: 13px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colors.white};
    margin-right: 8px;
  }
`