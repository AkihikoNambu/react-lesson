import React from 'react'

export default class LessonModal extends React.Component {
  render() {
    const {lesson, handleClickClose} = this.props

    return(
      <div className='modal-wrapper'>
        <div className='modal'>
          <i
            className='modal-close fas fa-times'
            onClick={handleClickClose.bind(this)}
          />
          <div className='modal-description'>
            <h2>{lesson.name}</h2>
            <div>{lesson.description}</div>
          </div>
        </div>
      </div>
    )
  }
}
