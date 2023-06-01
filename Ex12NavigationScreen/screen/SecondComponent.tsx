import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

import {StackScreenProps} from '@react-navigation/stack'
import { StackScreenList } from '../Main'

type SecondProps=StackScreenProps<StackScreenList,"Second">

export default function SecondComponent(props:SecondProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>SECOND HOME</Text>
            {/* 이전 화면(screen)으로 돌아가는 버튼 */}
            <Button title="back to HOME screen" onPress={()=>props.navigation.navigate('Home')}></Button>
            {/* 이전 화면으로 돌아가는 버튼 */}
            <Button title='go back' color="tomato" onPress={()=>props.navigation.goBack()}></Button>
            
            {/* navigate()로 데이터를 전달받았다면.. */}
            {/* props의 route라는 객체에게 파라미터 값으로 전달 받을 수 있음 */}
            <Text style={{padding:8, color:'navy', fontWeight:'bold', fontSize:16}}>{props.route.params?.name} , {props.route.params?.age}</Text>
            {/* 버튼 클릭시 제목줄 제목 변경  */}
            <Button title="제목줄 변경" onPress={()=>props.navigation.setOptions({title:'!!!!!!!second!!!!!!!'})}></Button>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1, padding:8},
    text:{color:'tomato', padding:8}
})