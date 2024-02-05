import {Component} from 'react'

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div className="main-container">
      <h1 className="main-heading1">MY JOURNEY OF CCBP 4.0</h1>

      <div className="chrono-container">
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: '#ffffff',
          }}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'PROJECT') {
              return (
                <ProjectTimelineCard projectItem={eachItem} key={eachItem.id} />
              )
            }
            return (
              <CourseTimelineCard courseItem={eachItem} key={eachItem.id} />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
