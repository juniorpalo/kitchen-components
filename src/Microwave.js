import React, { Component } from 'react'

class Microwave extends Component {
    constructor() {
        super()
        console.log('Microwave.constructor()')
    }

    componentWillMount() {
        console.log('Microwave.componentWillMount()')
    }
    componentDidMount() {
        console.log('Microwave.componentDidMount()')
    }
    render() {
        console.log('Microwave.render')
        return (
            <div>
                I be a microwave
            </div>
        )
    }
}

export default Microwave