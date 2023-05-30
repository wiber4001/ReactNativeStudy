import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default class MainComponent extends Component {
    render(): React.JSX.Element {

        return (
            //1. 나만의 Component 만들어서 사용해보기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* MyComponent사용 */}
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            //이런 식으로 Header, Body, Nav등을 영역별로 나누어 작성할 수 있음.

            //2. 글씨가 매번 반복됨-> 변경해보기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* MyComponent2 사용 */}
            //     <MyComponent2 name="sam"></MyComponent2>
            //     <MyComponent2 name="robin"></MyComponent2>
            // </View>
            //3. 별도의 .tsx 파일에 나만의 컴포넌트를 만들고 사용해보기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* MyComponent3 사용 */}
            //     <MyComponent3 aaa={this.clickBtn} title='click other component'></MyComponent3>
            //     <MyComponent3 aaa={this.clickBtn2} title='press other component'></MyComponent3>
            // </View>
            //4. 커스텀 컴포넌트 사용시 props 중 일부를전달하지 않으면?
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* MyComponent4 사용 */}
            //     <MyComponent4></MyComponent4>
            //     <MyComponent4 aaa={this.clickBtn} title='click other component'></MyComponent4>
            //     <MyComponent4 aaa={this.clickBtn2} title='press' color='pink'></MyComponent4>
            // </View>
            //5. 여러 속성을 한방에 적용하기
            // <View style={style.root}>
            //     <Text>Hello RN</Text>
            //     {/* MyComponent5 사용 */}
            //     <MyComponent5 title='press' color='indigo' onPress={()=>Alert.alert('clicked indigo')}></MyComponent5>

            // </View>

            //6. 컴포넌트 간의 데이터 제어
            <View style={style.root}>
                <ComponentA msg={this.state.message}></ComponentA>
                <ComponentB onPress={this.changeMessage}></ComponentB>
            </View>
        
        )
        
    }
    // 6번 실습에서 사용할 변수- 아주 특별한 변수 state
    state= {
        message:"Hello world"
    }

    changeMessage= ()=> {
        this.setState({message:"Nice to meet you"})
    }

    clickBtn= ():void => {
        Alert.alert('clicked')
    }
    clickBtn2= ():void => {
        Alert.alert('pressed')
    }

}//MainComponent class



//2. Custom Component에 속성(property)값을 전달
//  MyComponent2의 속성(property) 값들의 타입을 지정
type AAA= {
    name:string,
}
class MyComponent2 extends Component<AAA>{
    render():React.JSX.Element{
        return (
            <View style={{margin:16}}>
                {/* 컴포넌트늘 사용할때 속성(property)으로 전달된 값은 컴포넌트의 아주 특별한 멤버변수()에 자동으로 추가됨 */}
                <Text style={{marginBottom:8, color:'margenta'}}>Hello {this.props.name}</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}

//1. Custom Component 만들기, Component를 상속받음
class MyComponent extends Component{
    render():React.JSX.Element{
        return (
            <View style={{margin:16}}>
                <Text style={{marginBottom:8, color:'margenta'}}>Hello Sam</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}

const style =StyleSheet.create({
    root: {flex:1}
})