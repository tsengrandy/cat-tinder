import React, { Component } from 'react'
import { Col, Container, Row, ListGroup } from 'react-bootstrap'

export default class Friends extends Component {
  render() {
    return (
      <div>
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
            {this.props.friends.map((friend, index) =>{
              return (
                <ListGroup.Item key={index}>
                  <h4>
                    <span className='friend-name'>{friend.name}</span> - <small className='friend-age'>{friend.age} years old</small>
                  </h4>
                    <span className='friend-enjoys'>{friend.enjoys}</span>
                </ListGroup.Item>
                )
            })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
