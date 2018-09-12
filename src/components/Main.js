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
    this.setState({email: email})
  }

  handleInquiryChange(inquiry) {
    this.setState({inquiry: inquiry})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({formSubmitted: true})
  }

  render() {
    const {lessons} = this.props
    const {
      formSubmitted,
      email,
      inquiry,
      isModalOpen,
      openLesson,
    } = this.state

    const formInvalid = email == '' || !email.match(/@/) || inquiry === ''

    let formJSX = null
    if (formSubmitted) {
      formJSX = (
        <div>ご回答ありがとうございました</div>
      )
    } else {
      formJSX = (
        <form onSubmit={e => this.handleSubmit(e)}>
          <p>メールアドレス</p>
          {email === '' && (
            <div className='error-message'>入力必須項目です</div>
          )}
          {email !== '' && !email.match(/@/) && (
            <div className='error-message'>＠がありません</div>
          )}
          <input
            value={email}
            onChange={e => this.handleEmailChange(e.target.value)}
          />
          <p>お問い合わせ内容</p>
          {inquiry === '' && (
            <div className='error-message'>入力必須項目です</div>
          )}
          <textarea
            type="text" value={inquiry}
            onChange={e => this.handleInquiryChange(e.target.value)}
          />
          <input
            className={`contact-submit ${formInvalid ? 'contact-submit-disabled' : ''}`}
            type="submit"
            disabled={formInvalid}
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
