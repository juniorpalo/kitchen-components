import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Fridge from '../Fridge'

it('should shallow render App correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Fridge />)
    const result = renderer.getRenderOutput()

    console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual('Fridge desu')
})