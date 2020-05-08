import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default class EmpDetails extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        const {main, text}=styles
        return (
            <View style={main}>
                <Text style={text}> Emp details</Text>
                <Image source={{ uri: this.props.picture }} style={{ height: 200, width: 200 }} />
                <Text style={text}>ID : {this.props.id}</Text>
                <Text style={text}>firstname: {this.props.firstName}</Text>
                <Text style={text}>lastname: {this.props.lastName}</Text>
                <Text style={text}>email: {this.props.email}</Text>
                <Text style={text}>phone: {this.props.phone}</Text>
                <Text style={text}>title: {this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        // flex:1,
        // justifyContent: 'center',
        // marginLeft:'20'
    },
    text:{
        // fontSize:20,
        // fontWeight:'400'
    }
})