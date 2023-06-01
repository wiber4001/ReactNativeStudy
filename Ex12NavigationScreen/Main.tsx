//### React Native는 기본적으로 Screen(화면) 전환 기능을 제공하지 않기에 Library를 사용해야함

//가장 유명한 화면전환 라이브러리 : react navigation

//가장 유명한 화면전환 라이브러리: react navigation [https://reactnavigation.org/]
//라이브러리 설치는 node를 끄고 터미널에서 해야함
//터미널에서 설치되고 package.json에서 확인한 뒤(dependencies에 추가됨)
//run-android 로 node를 다시 실행해줌
//1. 기본 필수 라이브러리 추가
//@react-navigation/native
//1.1 추가 라이브러리
// react-native-screens, react-native-safe-area-context

//Main 컴포넌트 만들기
import React from "react";
import {Button, Image} from 'react-native'
//1)가장 먼저 Navigator들을 감싸는 최상위 Container 컴포넌트가 있어야 함
import { NavigationContainer } from "@react-navigation/native";

//2)화면 전환 방법을 결정하는 Navigator의 종류가 여러개..
//Stack, Drawer, BottomTab, MaterialBottomTab, MaterialTopTab
//각 네비게이터를 사용할 때마다 전용 라이브러리를 추가로 설치해야 함.

//이 중에서 가장 기본인 StackNavigator 사용해보기
import { createStackNavigator } from "@react-navigation/stack";
//Stack Navigator에 의해 전환될 화면 스크린 컴포넌트들 import
import HomeComponent from "./screen/HomeComponent";
import SecondComponent from "./screen/SecondComponent";
//typescript 에서는 스크린 리스트를 타입을 지정해줄 것을 권장함

export type StackScreenList = {
    Home:undefined, //화면명(route명): 전환할때 전달할 파라미터의 자료형 
    Second: undefined|{name:string, age:number} //or 연산자(|)로 타입여러개 지정가능
}

const Stack=createStackNavigator()

export default function Main():JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{backgroundColor:'green'},
                    headerTintColor:'white',
                    headerTitleAlign:'center'
                }}>
                <Stack.Screen 
                options={{
                    title:"홈", 
                    headerTintColor:'pink',
                    headerRight:()=>{return <Button title='menu'></Button>},
                    headerLeft: ()=> <Image source={require("./image/a_ele.png")} style={{width:32,height:32, marginLeft:16}}></Image>,
                    headerTitle:()=> <Image source={require("./image/a_ele.png")} style={{width:32,height:32, marginLeft:16}}></Image>,
                    headerShown: true
                }} 
                name='Home' 
                component={HomeComponent}></Stack.Screen>
                <Stack.Screen name='Second' component={SecondComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}


