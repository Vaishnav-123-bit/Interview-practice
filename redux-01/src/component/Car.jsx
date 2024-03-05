import React, { Component } from 'react'

export default class Car extends Component {
    constructor(props){
        super(props)
        this.state={color:"red"}
    }
  render() {
    return (
      <div>
            im a car{this.state.color} {this.props.name} {this.props.model}
      </div>
    )
  }
}
