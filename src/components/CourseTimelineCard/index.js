import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseItem} = props
  const {title, courseTitle, description, duration, tagsList} = courseItem

  return (
    <div className="course-card-container">
      <div className="top-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="ul-container">
        {tagsList.map(eachTag => (
          <p className="list-item">{eachTag.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
