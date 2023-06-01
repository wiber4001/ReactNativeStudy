import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

//StackNavigator에서 사용할 props의 타입을 import
import { StackScreenProps } from '@react-navigation/stack'

//Main.tsx에서 만든 StackNavigator의 스크린리스트 타입이 필요함
import { StackScreenList } from '../Main'

//StackNavigator에서 사용할 props타입을 지정 - <>제네릭으로 스크린리스트 타입지정, 현재 스크린의 name을 지
type HomeProps=StackScreenProps<StackScreenList,"Home">

//StackNavigator 의 Screen으로 등록된 컴포넌트는 props를 받음
export default function HomeComponent(props:HomeProps):JSX.Element{
    return(
        <View style={style.root}>
            <Text style={style.text}>HOME</Text>
            {/* Second Component로 이동하기 위한 버튼(참고: 버튼은 스타일링안됨) */}
            <Button title='go Second' onPress={()=>props.navigation.navigate('Second')}></Button>
            {/* Second화면으로 이동하면서 Home 화면을 종료-finish */}
            <Button title="go Second and finish" color="lightgreen" onPress={()=>props.navigation.replace('Second')}></Button>
            {/* Second화면으로 이동하면서 데이터를 전달해보기 [android의 Intent에서 사용하는 Extra data에 해당] */}
            <Button title='go second with data' color="pink" onPress={()=>props.navigation.navigate('Second',{name:"ghost", age:45})}></Button>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1, padding:8},
    text:{color:'tomato', padding:8, fontSize:16}
})