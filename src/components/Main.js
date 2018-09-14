import React from 'react'
import ContactForm from './ContactForm'

const lessons = [
  {
    id: 1,
    name: 'HTML & CSS',
    imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg',
    description: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
  },
  {
    id: 2,
    name: 'PHP',
    imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg',
    description: 'PHPを学べば、ユーザーからデータを受け取りそれを表示するなど、 実際のWEBサービスで必要な機能を作ることが出来ます。',
  },
  {
    id: 3,
    name: 'Ruby',
    imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg',
    description: 'RubyはWEBアプリケーションの「システム」をつくるためのプログラミング言語です。',
  },
  {
    id: 4,
    name: 'Swift',
    imageUrl: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg',
    description: 'SwiftはiPhoneアプリを作るための言語です。 Swiftを学んでiPhoneアプリを作る力を身につけましょう！',
  },
]

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      openLesson: null,
    }
  }

  handleClickImage(event, lesson) {
    this.setState({
      isModalOpen: true,
      openLesson: lesson,
    })
  }

  handleClickClose(event) {
    this.setState({isModalOpen: false})
  }

  render() {
    const {
      isModalOpen,
      openLesson,
    } = this.state

    return(
      <div className='main'>
        <div className='copy-container'>
          <h1>HELLO WORLD<span>.</span></h1>
          <h2>プログラミングの世界へようこそ</h2>
        </div>
        <div className='contents'>
          <h3 className='section-title'>学べるレッスン</h3>
          {lessons.map(lesson => {
            return (
              <div
                className='contents-item'
                key={lesson.id}
              >
                <img
                  src={lesson.imageUrl}
                  onClick={event => this.handleClickImage(event, lesson)}
                />
                <p>{lesson.name}</p>
              </div>
            )
          })}
        </div>
        {isModalOpen && (
          <div className='modal-wrapper'>
            <div className='modal'>
              <i
                className='modal-close fas fa-times'
                onClick={event => this.handleClickClose(event)}
              />
              <div className='modal-description'>
                <h2>{openLesson.name}</h2>
                <div>{openLesson.description}</div>
              </div>
            </div>
          </div>
        )}
        <ContactForm />
      </div>
    )
  }
}
