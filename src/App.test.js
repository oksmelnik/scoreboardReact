import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Title from './components/Title'

describe('<App />', () => {
  const app = shallow(<App />)
  const title =
<div>
  <Title content="All Recipes" />
  <Title content="All Players" />
  <Title content="High Scores" />
  </div>

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
  })

  it('contains a Title', () => {
    expect(app).toContainReact(title)
  })
})