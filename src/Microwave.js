import React, { Component } from 'react'

class Microwave extends Component {
    constructor(props) {
        super(props)
        console.log('Microwave.constructor()', props)
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