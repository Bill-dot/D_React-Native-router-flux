import React, { Component } from 'react'
import Index from './components'

export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
          <Index>
              <App/>
          </Index>
           
        )
    }
}