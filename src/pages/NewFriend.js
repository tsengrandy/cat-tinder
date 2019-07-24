import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class NewFriend extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange = (event) => {
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.handleNewFriend(this.state.form)
  }

  render() {
    return (
        <Form>
          <label id='name'>Name</label>
          <Form.Control type='text' name='name' onChange={this.handleChange} value={this.state.form.name} />
          <label id='age'>Age</label>
          <Form.Control type='text' name='age' onChange={this.handleChange} value={this.state.form.age} />
          <label id='enjoys'>Enjoys</label>
          <Form.Control type='text' name='enjoys' onChange={this.handleChange} value={this.state.form.enjoys} />
          <button id='submit' onClick={this.onSubmit}>Create Profile</button>
        </Form>
    )
  }
}
