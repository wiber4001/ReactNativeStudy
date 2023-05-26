import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native'

export default class MainComponent extends Component {

    //화면갱신에 영향을 주는 아주 특별한 멤버 변수
    state: React.ComponentState={
        message:"",
        msg:"",
        textDone:"done"
    }

    //화면에 영향이 없는 일반 변수
    inputValue="" //자동추론

    //화면구성
    render():JSX.Element {
        return (
            <View style={style.root}>
                {/* //사용자로부터 글씨를 입력받음 */}
                {/* TextInput은 스타일이 없으면 존재가 안보임  */}
                <TextInput onChangeText={this.changeText} style={style.textInput}> </TextInput>
                {/* 1. TextInput에 글씨를 작성할때마다 그 글씨를 보여주는 텍스트뷰 */}
                <Text style={style.text}>{this.state.message}</Text>
                {/* 2. TextInput의 입력에 사용한 소프트키보드의 완료버튼을 눌렀을때 글씨보여주기*/}
                <TextInput onSubmitEditing={this.submitText} style={style.textInput}></TextInput>
                <Text style={style.text}>{this.state.msg}</Text>
                {/* 3. Button클릭시 써있는 글씨를 텍스트 뷰에 보여주기 */}
                {/* 기존 GUI와 방법이 전혀 다름 */}
                <TextInput multiline={true} numberOfLines={4} onChangeText={this.doneText} style={style.textInput}></TextInput>
                <Button onPress={this.clickBtn} title="작성 완료"></Button>
                <Text style={style.text}>{this.state.textDone}</Text>
            </View>
        )
    }

    //멤버변수/함수
    //버튼 클릭이벤트
    clickBtn= ()=>{
        this.setState({textDone:this.inputValue})
    }

    //TextInput 컴포넌트에 글씨가 변경될때마다 반응하는 메소드
    doneText=(value:string)=>{
        //일반변수에 저장
        this.inputValue=value
    }

    //소프트 키보드의 완료버튼을 클릭했을때 반응하기
    submitText=(event:any)=>{ //파라미터로 스트링이아닌 이벤트 객체가 전달됨, type모르므로 any
        let value=event.nativeEvent.text
        this.setState({msg:value})
    }

    //글씨변경때마다 반응하는 콜백메소드 -파라미터로 써있는 글씨가 전달됨
    changeText=(value:string)=>{ //typescrip는 변수에 자료형 무조건 명시
        //텍스트컴포넌트가 보여주는 state변수값을 변겅
        this.setState({message:value})
    }

}//MainComponent

//style객체
const style=StyleSheet.create({
    root:{flex:1, padding:16},
    textInput:{borderWidth:2, borderColor:'green', borderRadius:8, paddingLeft:16, paddingRight:16},
    text:{marginTop:8,fontWeight:'bold',color:'navy',paddingLeft:10,paddingRight:10,fontSize:20}
})