import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class Emp extends Component {
    constructor(Props) {
        super(Props)
        this.state = {
            data: " "

        }
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://employee-directory-services.herokuapp.com/employees')
            const responseJSON = await response.json()
            this.setState({
                data: responseJSON
            })
        } catch (e) {
            console.log(e)
        }
    }

    


    render() {
        return (
            <View style={styles.main}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={(data) => data.id}
                    renderItem={({ item }) => {
                        // console.log(item)
                        return <Text style={{fontSize: 30,
                             marginHorizontal:10,
                            borderBottomWidth:2,
                            paddingVertical:10,
                            borderColor:'#ababab',
                            borderRadius:8}} onPress={() => {
                            console.log('called')
                            return Actions.empdet( {
                                picture: item.picture,
                                id: item.id,
                                firstName: item.firstName,
                                lastName: item.lastName,
                                email: item.email,
                                phone: item.phone,
                                title: item.title
                            })
                        }}>{item.firstName}</Text>
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main:{
        marginTop:15,
        marginLeft:15,
        marginRight:60,
        marginBottom:10
    }
    
})