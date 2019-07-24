import React, { Component } from 'react'

export default class NewCat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      age: 0,
      enjoys: ''
    }
  }

  render() {
    return (
        <div>
        NewCat
        </div>
    )
  }
}
