import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
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
    );
  }
}
