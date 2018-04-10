import React from 'react'
import App from '../App.js'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Kitchen from "../Kitchen"
import Microwave from '../Microwave'
import Fridge from '../Fridge'

it('should shallow render App correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Kitchen />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual([
        'Kitchen is here',
        <Fridge/>,
        <Microwave />
    ])
})

// it('renders correctly', () => {
//     const tree = Renderer
//         .create(<App />)
//         .toJSON()
//     expect(tree).toMatchSnapshot()
// })
