import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  const {
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectItem

  return (
    <div className="project-card-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="second-container">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="duration-icon-container">
          <AiFillCalendar className="calender" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="anchor-El">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
