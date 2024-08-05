import React, { Component } from 'react'

export default class HandlerEx extends Component {
    state = {
        text : 'Hello World'
    }

    chgMsg = () =>{ 
        this.setState({text : 'GoodBye World!'})
        console.log(this.state.text);
    }
    render() {
      const {text} = this.state
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this.chgMsg}>클릭</button>
      </div>
    )
  }
}
