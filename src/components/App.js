import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const user = {
  name: 'にんじゃわんこ',
  image: 'https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/wanko_caption_image-07994566e25eb1422d33f9ac7b93d4dd.svg',
  level: 18,
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginUser: user,
    }
  }

  handleLogout(event) {
    this.setState({loginUser: null})
  }

  render() {
    const {loginUser} = this.state
    return (
      <div>
        <Header
          user={loginUser}
          handleLogout={(event) => this.handleLogout(event)}
        />
        <Main user={loginUser} />
        <Footer />
      </div>
    )
  }
}

export default App;
