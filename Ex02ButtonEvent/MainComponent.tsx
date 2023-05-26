// ### TypeScript : JavaScript + static typed ############

import React, {Component} from 'react'
import {View, Text, Button, StyleSheet, Alert} from 'react-native'

class MainComponent extends Component{

    render(): JSX.Element {
        return (
            <View style={style.root}>
                <Button title='button' onPress={clickBtnFunction3}></Button>
                {/* 버튼 콜백용 함수를 별도의 위치에 작성하지 않고 곧바로 지정가능 */}
                <Button title='버튼' color='orange' onPress={ ()=>Alert.alert('버튼 클릭') }></Button>

                {/* 버튼 콜백용 메소드는 전역보다는 이 컴포넌트클래스의 멤버로 존재하는 것을 권장 */}
                
            </View>
        )
    }//render method...

}//MainComponent class...

//전역의 위치
//1) 선언적 함수
function clickBtnFunction(){
    //경고창 보이기
    Alert.alert('PRESSED BUTTON')
}

//2) 익명 함수
let clickBtnFunction2= function(){
    Alert.alert('PRESSED BUTTON2')
}

//3) 화살표 함수
let clickBtnFunction3= ()=> Alert.alert('PRESSED BUTTON3')


const style= StyleSheet.create({
    root: {
        flex: 1,
        padding:16,
    }
})


export default MainComponent