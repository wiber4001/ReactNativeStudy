import React,{Component, useEffect, useState} from "react";
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
                <AAA onPress={this.changeText}></AAA>
                <BBB msg={this.state.msg}></BBB>
                {/* 결론적으로 functional Component는 class Component에 비해 코딩이 간결함 */}
                {/* state키워드를 쓸수없는 단점이 있어서-> 화면자동갱신이안됨 */}
                {/* 그래서 단순한 화면 컴포넌트(안드로이드의 프래그먼트처럼)로 적합하였음 */}
                {/* 하지만, 현재는 functional Component의 간결한 코딩이 선호되어 state가 없다는 단점을 보완하는 Hook개념이 생김  */}
                {/* 5) functional Component Hook 실습 */}
                <MyComponent7></MyComponent7>


            </View>
        )
    }//render()

    state:React.ComponentState={msg:"초기값"}
    changeText= ()=> this.setState({msg:"안녕하십니까 바뀌었네요"})

}//Main class..

//5) functional Component Hook..
function MyComponent7():JSX.Element{
    // 함수형 컴포넌트는 state, setState()가 없음
    // 함수형 컴포넌트에서 state를 사용할 수 있도록 만드는 문법: useState()
    // msg라는 특별한 변수 (state능력을 받은)와 값을 변경하는 setMsg()메소드를 선언
    let [msg,setMsg] = useState<string>("초기값")
    const [age,setAge]= useState(0) //number type도 가능

    //함수형 컴포넌트는 라이프사이클 메소드도 없음
    //화면을 갱신할때 자동 호출되던 componentDidUpdate, componentDidMount 메소드를 대체하는 함수
    //화면이 처음시작할때와 state변경으로 인해 화면이 갱신될 때 마다 호출되는 기능을 만들고 싶을때 사용
    //ex) 서버에서 데이터를 읽어오거나 DB작업등을 할때
    useEffect(()=>{
        console.log("useEffect called.")
    })

    // 지역변수
    // let msg="Hello"
    return(
        <View style={{padding:4}}>
            <Text style={style.text}>{msg}</Text>
            <Button title="button" onPress={()=> setMsg('안녕합니까')}></Button>
            <Text style={style.text}>{age}</Text>
            <Button title="add age" onPress={()=>setAge(age+1)}></Button>
        </View>
    )
}


//4) Component간의 데이터 제어- 직접 참조는 불가능
//4.1) 버튼을 가진 함수형 컴포넌트
type AaaProps={onPress:()=>void}
const AAA= (props:AaaProps)=>{
    return(
        <View style={{padding:4}}>
            <Button title="change" onPress={props.onPress}></Button>
        </View>
    )

}
//4.2) 버튼에 의해 변경될 글씨를 보여주는 함수형 컴포넌트
type BbbProps={msg:string}
const BBB= (props:BbbProps)=>{
    return (
        <View style={{padding:8}}>
            <Text style={style.text}>message: {props.msg}</Text>
        </View>
    )
}

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
        flex:1, padding:4
    },
    text:{
        margin:4,
        padding:4,
        color:'navy',
        fontSize:16
    }
})