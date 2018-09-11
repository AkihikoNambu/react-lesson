import React from 'react'

export default class LessonItem extends React.Component {
  render() {
    const {lesson} = this.props
    return(
      <div className='contents-item'>
        <img
          src={lesson.imageUrl}
          onClick={this.props.handleClickImage.bind(this, lesson)}
        />
        <p>{lesson.name}</p>
      </div>
    )
  }
}
