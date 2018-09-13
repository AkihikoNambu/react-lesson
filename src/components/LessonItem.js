import React from 'react'

export default class LessonItem extends React.Component {
  render() {
    const {
      lesson,
      handleClickImage,
    } = this.props

    return(
      <div className='contents-item'>
        <img
          src={lesson.imageUrl}
          onClick={event => handleClickImage(event, lesson)}
        />
        <p>{lesson.name}</p>
      </div>
    )
  }
}
