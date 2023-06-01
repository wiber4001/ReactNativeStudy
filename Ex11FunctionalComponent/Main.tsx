import React,{Component} from "react";
import {View, Text, Button, StyleSheet} from 'react-native'

export default class Main extends Component {

    render(): JSX.Element {

        return (
            <View style={style.root}>
                {/* 새로운 Custom Component 제작 방법  */}
                {/* 1. class Component: Component class를 상속해서 만드는 일반적인 Component */}
                {/* 2. functional Component : 마치 함수를 만드는 방식처럼 만들어진 Component [함수형 Component]*/}
                {/* 1) 컴포넌트의 차이를 알기 위한 기존 class Component만들기 */}
                    <MyComponent></MyComponent>
                {/* 2) 함수형 컴포넌트 */}
                {/* JS에서는 함수를 가지고 class를 만들고 new대신 태그문으로 객체생성->이와 유사하게 사용 */}
                {/* { MyComponent2() } */}
                <MyComponent2></MyComponent2>
                {/* 즉, 간단한 콘텐츠를 화면에 보여주고자 할때 간결하게 작성가능한 컴포넌트임 */}
                {/* 단, Component를 상속받지않아서 없는것들이 있음 */}
                {/* :생성자, state, props 없음 */}
                {/* 3) 대신에 props(속성)은 전달 받는 것이 가능함 */}
                {/* 3.1) 기존 props를 받는 일반적인 class Component */}
                <MyComponent3 data='안뇽'></MyComponent3>
                {/* 3.2) props를 받는 functional component */}
                <MyComponent4 text="누구"></MyComponent4>
                {/* 3.3) 여러개의 속성을 받아보기 */}
                <MyComponent5 data='ccc' title="car car car"></MyComponent5>
                {/* 3.4) 구조분해 할당으로 받기 */}
                <MyComponent6 data='안뇽하세요' title="아니요 안녕못함"></MyComponent6>
                {/* 4)컴포넌트들 간의 데이터 제어 */}
                {/* RN은 컴포넌트 끼리 직접 교류를 할 수 있는 방법 자체가 없음:안드로이드와의 차이점 */}
                {/* 그래서 함수를 통해야되는데 함수를 props에 넣어서 전달함 */}


            </View>
        )
        
    }
}//Main class..

//3.4) 구조분해 할당으로 받기
type Props4= {
    data:string,
    title:string,
}

function MyComponent6({data, title}:Props4){ //구조분해할당
    return (
        <View>
            <Text style={style.text}>MyComponent6 data : {data}</Text>
            <Text style={style.text}>MyComponent6 title : {title}</Text>
        </View>
    )
}

//3.3) 여러개 프로퍼티 받기
type Props3={
    data:string,
    title:string
}
function MyComponent5(props:Props3){//태그문의 속성으로 지정한 
    return(
        <View>
            <Text style={style.text}>MyComponent5:{props.data}</Text>
            <Text style={style.text}>MyComponent5:{props.title}</Text>
        </View>
    )
}
//3.2)props를 받는 functional Component
type Props2={
    text:string
}
function MyComponent4(props:Props2){//태그문의 속성으로 지정한 
    return(
        <View>
            <Text style={style.text}>MyComponent4:{props.text}</Text>
        </View>
    )
}

//3.1) props를 받는 class형 컴포넌트 
type Props={data:string}//프로퍼티 자료형
class MyComponent3 extends Component<Props>{
    render(): JSX.Element {
        return(
            <View>
                <Text style={style.text}>MyComponent3:{this.props.data}</Text>
            </View>
        )

    }
}

//2) functional Component
// function MyComponent2():JSX.Element{
//     return (
//         <View>
//             <Text style={style.text}>Hello MyComponent 2</Text>
//         </View>
//     )
// }
//Component를 상속받지 않아서 없는 것들
function MyComponent2():JSX.Element{

    //생성자는 존재하지 않음
    //constructor(){}

    //화면갱신에 영향을 주는 특별한 변수 state도 없음
    //컴포넌트  사용하는 태그문에서 전달한 프로퍼티(속성)들 
    return (
        <View>
            <Text style={style.text}>Hello MyComponent 2</Text>
        </View>
    )
}
//2.1) 함수형 컴포넌트를 익명함수형태로 만들수도 있음
// const MyComponent2 = ():JSX.Element=>{
//     return (
//         <View>
//             <Text style={style.text}>Hello MyComponent 2</Text>
//         </View>
//     )
// }
//축약형:1줄가능
// const MyComponent2 = ():JSX.Element=> <View><Text style={style.text}>Hello MyComponent 2</Text></View>

//1)일반적인 컴포넌트
class MyComponent extends Component{
    render(): JSX.Element {
        return(
            <View>
                <Text style={style.text}>Hello MyComponent</Text>
            </View>
        )
    }
}
const style=StyleSheet.create({
    root:{
        flex:1, padding:16
    },
    text:{
        margin:8,
        padding:8,
        color:'navy',
        fontSize:16
    }
})