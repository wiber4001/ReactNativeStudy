 import React,{Component} from "react";
 import {View, Text, Button, StyleSheet} from 'react-native'

 type Props={}
 
 export default class Main extends Component<Props>{

    //컴포넌트의 기본 Lifecycle method 6
     //1.생성자
     constructor(props:Props){
        super(props) //JS 는 부모생성자의 호출을 반드시 명시적으로 해야 함

        //아직 화면이 render 되기 전이기에 화면에 무엇인가를 출력할 수 없음
        //그래서 Log 기록 남기기
        console.log('constructor....')
     }
     
     //2. 화면에 보여지기 전에 이 컴포넌트가 화면에 연결되기 직전에 호출
     //componentWillMount():void {} //deprecated
     //2.1 화면에 보이기전에 무언가 하고싶다면.
     UNSAFE_componentWillMount(): void { //deprecated
         console.log('component will mount.....')
     }

     //3. 화면에 그려내는 메소드
     render():JSX.Element{
        console.log('render......')
        return (
            <View style={style.root}>
                <Text style={style.title}>Component Lifecycle method</Text>
                <Button title="button" onPress={ ()=>this.setState({data:"hello"})}></Button>
            </View>
        )
     }
     //4.화면이 그려진 후 딱 1번 호출되는 메소드
     componentDidMount(): void {
         console.log('component did mounted.....')
         //보통은 이곳에서 서버 로딩 작업등을 수행함
     }

     //5. render()메소드가 호출된 후 항상 호출되는 메소드 (즉, 화면이 갱신될때 마다 실행됨)
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('component did update~~~~')
    }

    //6. 컴포넌트가 종료될때..호출
    componentWillUnmount(): void {
        console.log('conponent will unmount....')                
    }

 }

 const style=StyleSheet.create({
    root:{flex:1,padding:16},
    title:{padding:16, color:'black',}
 })