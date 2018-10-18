import React from 'react';

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

  handleEmailChange(event) {
    const email = event.target.value;
    if (email === '') {
      this.setState({
        email: email,
        emailError: true,
      });
    } else {
      this.setState({
        email: email,
        emailError: false,
      });
    }
  }

  handleInquiryChange(event) {
    const inquiry = event.target.value;
    if (inquiry === '') {
      this.setState({
        inquiry: inquiry,
        inquiryError: true,
      });
    } else {
      this.setState({
        inquiry: inquiry,
        inquiryError: false,
      });
    }
  }

  handleSubmit() {
    this.setState({formSubmitted: true});
  }

  isFormValid() {
    return (
      this.state.email !== '' && !this.state.emailError && this.state.inquiry !== '' && !this.state.inquiryError
    );
  }

  render() {
    const {
      email,
      inquiry,
      emailError,
      inquiryError,
      formSubmitted,
    } = this.state;
    const isFormValid = this.isFormValid();

    let emailErrorText;
    if (emailError) {
      emailErrorText = <div className='error-message'>入力必須項目です</div>;
    }

    let inquiryErrorText;
    if (inquiryError) {
      inquiryErrorText = <div className='error-message'>入力必須項目です</div>;
    }

    let submitButtonClassNames = '';
    if (isFormValid) {
      submitButtonClassNames = 'contact-submit';
    } else {
      submitButtonClassNames = 'contact-submit contact-submit-disabled';
    }

    let contactForm;
    if (formSubmitted) {
      contactForm = <div>お問い合わせありがとうございました。</div>;
    } else {
      contactForm = (
        <form onSubmit={() => this.handleSubmit()}>
          <p>メールアドレス（必須）</p>
          {emailErrorText}
          <input
            value={email}
            onChange={(event) => this.handleEmailChange(event)}
          />
          <p>お問い合わせ内容（必須）</p>
          {inquiryErrorText}
          <textarea
            value={inquiry}
            onChange={(event) => this.handleInquiryChange(event)}
          />
          <input
            className={submitButtonClassNames}
            type='submit'
            value='送信'
            disabled={!isFormValid}
          />
        </form>
      );
    }

    return(
      <div>{contactForm}</div>
    );
  }
}

export default ContactForm;
