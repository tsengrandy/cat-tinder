import React from 'react'
import ReactDOM from 'react-dom'
import Friends from '../Friends'
import { mount } from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

  const friends = [
    {
      id: 1,
      name: 'Morris',
      age: 25,
      enjoys: 'Wearing monocles'
    },
    {
      id: 2,
      name: 'Sir ThinksaLot',
      age: 44,
      enjoys: 'Reading by the fire'
    },
    {
      id: 3,
      name: 'Fite Me IRL',
      age: 12,
      enjoys: 'Speech and Debate'
    }
  ]


it('Renders the profiles', ()=>{
  const component = mount(<Friends friends={friends} />)
  const headings = component.find('h4 > .friend-name')
  expect(headings.length).toBe(3)
})
