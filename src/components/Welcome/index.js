// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {text: 'Subscribe'}

  onChangeText = () => {
    this.setState(preVal => {
      if (preVal.text === 'Subscribe') {
        return {text: 'Subscribed'}
      }
      return {text: 'Subscribe'}
    })
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank You Happy! Learning</p>
        <button onClick={this.onChangeText}>{text}</button>
      </div>
    )
  }
}

export default Welcome
