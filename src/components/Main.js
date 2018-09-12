import React from 'react'
import LessonItem from './LessonItem'
import LessonModal from './LessonModal'

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

  handleClickImage(lesson) {
    this.setState({
      isModalOpen: true,
      openLesson: lesson,
    })
  }

  handleClickClose() {
    this.setState({isModalOpen: false})
  }

  handleEmailChange(email) {
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

  handleInquiryChange(inquiry) {
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

  handleSubmit(e) {
    e.preventDefault();
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
    const {lessons} = this.props
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
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>メールアドレス（必須）</p>
          <div className='error-message'>
            {emailError}
          </div>
          <input
            value={email}
            onChange={e => this.handleEmailChange(e.target.value)}
          />
          <p>お問い合わせ内容（必須）</p>
          <div className='error-message'>
            {inquiryError}
          </div>
          <textarea
            type="text" value={inquiry}
            onChange={e => this.handleInquiryChange(e.target.value)}
          />
          <p>※必須項目は必ずご入力ください</p>
          <input
            className={`contact-submit ${!isFormValid ? 'contact-submit-disabled' : ''}`}
            type="submit"
            disabled={!isFormValid}
            value="送信"
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
                handleClickImage={this.handleClickImage.bind(this)}
              />
            )
          })}
        </div>
        {/* NOTE: 条件分岐なにでやるか */}
        {isModalOpen && openLesson &&
          <LessonModal
            lesson={openLesson}
            handleClickClose={this.handleClickClose.bind(this)}
          />
        }
        <div className="contact-form">
          <h3 className="section-title">お問い合わせ</h3>
          {formJSX}
        </div>
      </div>
    )
  }
}
