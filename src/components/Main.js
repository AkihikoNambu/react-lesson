import React from 'react'
import LessonItem from './LessonItem'
import LessonModal from './LessonModal'

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
      email: '',
      inquiry: '',
      emailError: '',
      inquiryError: '',
      formSubmitted: false,
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

  handleEmailFocus(event) {
    const {email} = this.state
    if (email === '') {
      this.setState({emailError: '記入必須項目です'})
    }
  }

  handleEmailChange(event) {
    const email = event.target.value
    if (email === '') {
      this.setState({
        email: email,
        emailError: '記入必須項目です',
      })
    } else {
      this.setState({
        email: email,
        emailError: '',
      })
    }
  }

  handleInquiryChange(event) {
    const inquiry = event.target.value
    if (inquiry === '') {
      this.setState({
        inquiry: inquiry,
        inquiryError: '記入必須項目です',
      })
    } else {
      this.setState({
        inquiry: inquiry,
        inquiryError: '',
      })
    }
  }

  handleInquiryFocus(event) {
    const {inquiry} = this.state
    if (inquiry === '') {
      this.setState({emailError: '記入必須項目です'})
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({formSubmitted: true})
  }

  isFormValid() {
    const {
      email,
      inquiry,
      emailError,
      inquiryError,
    } = this.state
    return email !== '' && inquiry !== '' && emailError === '' && inquiryError === ''
  }

  render() {
    const {
      formSubmitted,
      emailError,
      email,
      inquiryError,
      inquiry,
      isModalOpen,
      openLesson,
    } = this.state

    const isFormValid = this.isFormValid()

    let formJSX = null
    if (formSubmitted) {
      formJSX = (
        <div>ご回答ありがとうございました</div>
      )
    } else {
      formJSX = (
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>メールアドレス（必須）</p>
          <div className='error-message'>{emailError}</div>
          <input
            value={email}
            onFocus={event => this.handleEmailFocus(event)}
            onChange={event => this.handleEmailChange(event)}
          />
          <p>お問い合わせ内容（必須）</p>
          <div className='error-message'>{inquiryError}</div>
          <textarea
            type='text'
            value={inquiry}
            onFocus={event => this.handleInquiryFocus(event)}
            onChange={event => this.handleInquiryChange(event)}
          />
          <p>※必須項目は必ずご入力ください</p>
          <input
            className={`contact-submit ${!isFormValid ? 'contact-submit-disabled' : ''}`}
            type='submit'
            disabled={!isFormValid}
            value='送信'
          />
        </form>
      )
    }

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
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                handleClickImage={event => this.handleClickImage(event, lesson)}
              />
            )
          })}
        </div>
        {isModalOpen && (
          <LessonModal
            lesson={openLesson}
            handleClickClose={event => this.handleClickClose(event)}
          />
        )}
        <div className='contact-form'>
          <h3 className='section-title'>お問い合わせ</h3>
          {formJSX}
        </div>
      </div>
    )
  }
}
