import React from 'react';

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

class App extends React.Component {
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
      this.setState({inquiryError: '記入必須項目です'})
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
      isModalOpen,
      openLesson,
      formSubmitted,
      emailError,
      email,
      inquiryError,
      inquiry,
    } = this.state

    const isFormValid = this.isFormValid()

    return (
      <div>
        <div className='header'>
          <div className='header-logo'>Progate</div>
        </div>
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
          <div className='contact-form'>
            <h3 className='section-title'>お問い合わせ</h3>
            {formSubmitted ? (
              <div>ご回答ありがとうございました</div>
            ) : (
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
            )}
          </div>
        </div>
        <div className='footer'>
          <div className='footer-logo'>Progate</div>
          <div className='footer-list'>
            <ul>
              <li>会社概要</li>
              <li>採用</li>
              <li>お問い合わせ</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
