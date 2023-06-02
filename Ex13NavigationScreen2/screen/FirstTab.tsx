import React from "react";
import {View,Text,StyleSheet} from 'react-native'

//Navigator의 screen은 props 객체를 전달받음- 그 타입 지정
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import { BottomTabScreenList } from "../Main";
type FirstProps=BottomTabScreenProps<BottomTabScreenList,"First">

export default function FirstTab(props:FirstProps){ //props객체:{navigation, route}
    return (
        <View style={style.root}>
            <Text style={style.text}>First Tab</Text>
        </View>
    )
}

const style =StyleSheet.create({
    root:{flex:1, justifyContent:'center', alignItems:'center'},
    text:{padding:4, color:'tomato', fontSize:16}
})