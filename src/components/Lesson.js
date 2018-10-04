import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickImage() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    const {isModalOpen} = this.state;
    const {lesson} = this.props;

    return(
      <div>
        <div className='contents-item'>
          <img
            src={lesson.image}
            onClick={() => this.handleClickImage()}
          />
          <p>{lesson.name}</p>
        </div>
        {isModalOpen && (
          <div className='modal-wrapper'>
            <div className='modal'>
              <i
                className='modal-close fas fa-times'
                onClick={() => this.handleClickClose()}
              />
              <div className='modal-description'>
                <h2>{lesson.name}</h2>
                <div>{lesson.description}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Lesson
