import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      inquiry: '',
      emailError: '',
      inquiryError: '',
      formSubmitted: false,
    };
  }

  handleEmailFocus(event) {
    const email = event.target.value;
    if (email === '') {
      this.setState({emailError: '記入必須項目です'});
    }
  }

  handleEmailChange(event) {
    const email = event.target.value;
    if (email === '') {
      this.setState({
        email: email,
        emailError: '記入必須項目です',
      });
    } else {
      this.setState({
        email: email,
        emailError: '',
      });
    }
  }

  handleInquiryFocus(event) {
    const inquiry = event.target.value;
    if (inquiry === '') {
      this.setState({inquiryError: '記入必須項目です'});
    }
  }

  handleInquiryChange(event) {
    const inquiry = event.target.value;
    if (inquiry === '') {
      this.setState({
        inquiry: inquiry,
        inquiryError: '記入必須項目です',
      });
    } else {
      this.setState({
        inquiry: inquiry,
        inquiryError: '',
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({formSubmitted: true});
  }

  isFormValid() {
    const {
      email,
      inquiry,
      emailError,
      inquiryError,
    } = this.state;

    return email !== '' && inquiry !== '' && emailError === '' && inquiryError === '';
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

    return(
      <div>
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
              value={inquiry}
              onFocus={event => this.handleInquiryFocus(event)}
              onChange={event => this.handleInquiryChange(event)}
            />
            <p>※必須項目は必ずご入力ください</p>
            <input
              className={!isFormValid ? 'contact-submit contact-submit-disabled' : 'contact-submit'}
              type='submit'
              disabled={!isFormValid}
              value='送信'
            />
          </form>
        )}
      </div>
    );
  }
}

export default ContactForm;
