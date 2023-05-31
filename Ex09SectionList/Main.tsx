import React,{Component} from "react";
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native'

export default class Main extends Component{
    render():JSX.Element{
        return (
            <View style={style.root}>
                <Text style={style.title}>SectionList Food Menu</Text>
            </View>
        )
    }
}

const style=StyleSheet.create({
    root:{
        padding:16,
        flex:1
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:24
    }
})