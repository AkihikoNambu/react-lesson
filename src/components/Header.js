import React from 'react'

export default class Header extends React.Component {
  render() {
    const {user} = this.props
    const {handleLogout} = this.props

    return(
      <div className='header'>
        <div className='header-logo'>Progate</div>
        <div className='header-right'>
          {user ? (
            <div>
              <div className='header-user-info'>
                <img
                  className='user-image'
                  src={user.image}
                />
                <div className='user-name'>{`${user.name} (Lv. ${user.level})`}</div>
              </div>
              <div
                className='header-login-logout'
                onClick={(event) => handleLogout(event)}
              >
                ログアウト
              </div>
            </div>
          ) : (
            <div className='header-login-logout'>ログイン</div>
          )}
        </div>
      </div>
    )
  }
}
