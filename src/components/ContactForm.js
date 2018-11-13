import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      inquiry: '',
      emailError: false,
      inquiryError: false,
      formSubmitted: false,
    };
  }

  handleSubmit(event) {
    this.setState({formSubmitted: true});
  }

  handleEmailChange(event) {
    const email = event.target.value
    if (email === '') {
      this.setState({
        email: email,
        emailError: true,
      })
    } else {
      this.setState({
        email: email,
        emailError: false,
      })
    }
  }

  handleInquiryChange(event) {
    const inquiry = event.target.value;
    if (inquiry === '') {
      this.setState({
        inquiry: inquiry,
        inquiryError: true,
      })
    } else {
      this.setState({
        inquiry: inquiry,
        inquiryError: false,
      })
    }
  }

  // メソッドisFormInvalidを定義
  isFormInvalid() {
    return this.state.emailError || this.state.inquiryError || this.state.email === '' || this.state.inquiry === ''
  }

  render() {
    let emailErrorText;
    if (this.state.emailError) {
      emailErrorText = <div className='error-message'>入力必須項目です</div>;
    }
  　let inquiryErrorText;
    if (this.state.inquiryError) {
      inquiryErrorText = <div className='error-message'>入力必須項目です</div>;
    }
    // ここをconst isFormInvalid = this.state.emailError || this.state.inquiryError || this.state.email === '' || this.state.inquiry === '';から以下に変える
    const isFormInvalid = this.isFormInvalid();
    let submitButtonClassNames = '';
    if (isFormInvalid) {
      submitButtonClassNames = 'contact-submit contact-submit-disabled';
    } else {
      submitButtonClassNames = 'contact-submit';
    }
    let contactForm;
    if (this.state.formSubmitted) {
      contactForm = <div>お問い合わせありがとうございました。</div>;
    } else {
      contactForm = (
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>メールアドレス（必須）</p>
          {emailErrorText}
          <input
            value={this.state.email}
            onChange={event => this.handleEmailChange(event)}
          />
          <p>お問い合わせ内容（必須）</p>
          {inquiryErrorText}
          <textarea
            type='text'
            value={this.state.inquiry}
            onChange={(event) => this.handleInquiryChange(event)}
          />
          <p>※必須項目は必ずご入力ください</p>
          <input
            className={submitButtonClassNames}
            type='submit'
            value='送信'
            disabled={isFormInvalid}
          />
        </form>
      );
    }

    return (
      <div>{contactForm}</div>
    );
  }
}

export default ContactForm;
