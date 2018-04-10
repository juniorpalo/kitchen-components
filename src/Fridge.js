import React, { Component } from 'react'

class Fridge extends Component {
    constructor() {
        super()
        console.log('Fridge.constructor()')
      }
    
      componentWillMount() {
        console.log('Fridge.componentWillMount()')
      }
      componentDidMount() {
        console.log('Fridge.componentDidMount()')
      }
    render(){
        console.log('Fridge.render')
        return (
            <div>
                Fridge desu
            </div>
        )
    }
}

export default Fridge