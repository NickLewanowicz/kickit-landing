import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react'
import Header from './HomeHeader'
import Github from './HomeGithub'

import '../index.css';
import 'semantic-ui-css/semantic.min.css';

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (
      <div className="home">
        <Header/>
        <Github/>
      </div>
    )
  }

}
export default Home;