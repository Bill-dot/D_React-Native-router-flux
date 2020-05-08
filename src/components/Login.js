import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import Button from '../commons/button'
import data from '../Credentials.json'
import {Actions} from 'react-native-router-flux'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: '',
            data: ''
        }
    }
    componentDidMount() {

        var responseData= data
        console.log(responseData["username"])
        this.setState({ username:responseData.username, password:responseData.password })
        

    }

    validate() {
        console.log('inside Button')
        if (this.state.username == '' || this.state.password == '') {
            console.log("inside if")
            return false
        }
        console.log('after IF')
        return true

    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.userID}>
                    <Text style={styles.text}>User Name : </Text>
                    <TextInput
                        style={{ flex: 2 }}
                        placeholder="UserName/emailAddress"
                        textContentType='emailAddress'
                        // onChangeText={(text) => this.setState({ ...this.state, username: text })}
                        value={this.state.username}
                    />
                </View>
                <View style={styles.password}>
                    <Text style={styles.text}>Password : </Text>
                    <TextInput
                        style={{ flex: 2 }}
                        placeholder="Password"
                        textContentType='password'
                        secureTextEntry={true}
                        value={this.state.password}
                    // onChangeText={(text) => this.setState({ ...this.state, password: text })}
                    />
                </View>
                <Text style={{ color: 'red' }}>{this.state.message}</Text>
                <Button onPress={() => {
                    if (this.state.message != '')
                        this.setState({ ...this.state, message: '' })
                    return this.validate() ? Actions.emp() : this.setState({ ...this.state, message: 'please enter username and password' })
                }}>Submit</Button>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a5fae6'
    },
    userID: {
        flexDirection: 'row',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 5,
        borderRadius: 10,
        borderColor: '#6a7573',
        backgroundColor: '#d0dbd9'
    },
    password: {
        flexDirection: 'row',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 5,
        borderRadius: 10,
        borderColor: '#6a7573',
        backgroundColor: '#d0dbd9'

    },
    text: {
        flex: 1, fontWeight: 'bold', fontSize: 20,
        marginHorizontal: 5,
        marginTop: 10

    }
})