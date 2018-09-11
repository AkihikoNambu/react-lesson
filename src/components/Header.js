import React from 'react'

export default class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="header-logo">Progate</div>
        <div className="header-lesson-count">{`現在のレッスン数: ${this.props.count}`}</div>
      </div>
    )
  }
}
