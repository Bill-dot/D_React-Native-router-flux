import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Router, Scene, ActionConst} from 'react-native-router-flux'
import Login from './Login'
import Emp from './Emp'
import EmpDetails from './EmpDetails'

export default class Index extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Router>
                <Scene title='root'>
                    <Scene
                        title='login'
                        initial
                        component={Login}
                        key='login'
                        // type={ActionConst.RESET}
                        // hideBackImage
                    />
                    <Scene
                        title='List of all the Employees'
                        component={Emp}
                        key='emp'
                        type={ActionConst.RESET}
                    />
                    <Scene 
                        title='empdet'
                        component={EmpDetails}
                        key='empdet'
                    />
                </Scene>
            </Router>
        )
    }
}