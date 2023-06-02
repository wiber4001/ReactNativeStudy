import React from "react";
import {Image} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

//BottomTabNavigator를 만들어내는 기능함수 import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//BottomTabNavigator에 등록할 screen 컴포넌트 리스트 타입
export type BottomTabScreenList={
    First:undefined,
    Second:undefined,
    Third:undefined
}

//BottomTabNavigator 객체 생성
const BottomTab=createBottomTabNavigator<BottomTabScreenList>()

//Tab으로 보여줄 화면 screen 컴포넌트 3개 import
import FirstTab from "./screen/FirstTab";
import SecondTab from "./screen/SecondTab";
import ThirdTab from "./screen/ThirdTab";

export default function Main():JSX.Element{
    return(
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName='Second' screenOptions={{
            tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'pink',
            tabBarActiveBackgroundColor:'thistle',
            tabBarShowLabel:true
        }}>
                <BottomTab.Screen name="First" component={FirstTab}
                options={{
                    tabBarLabel:'첫번째',
                    tabBarIcon: ()=>{return <Image source={require('./image/a_frog.png')} style={{width:24,height:24}}></Image>},
                    tabBarBadge:'new',
                    tabBarActiveTintColor:'tomato'

                }}></BottomTab.Screen>
                <BottomTab.Screen name="Second" component={SecondTab}></BottomTab.Screen>
                <BottomTab.Screen name="Third" component={ThirdTab}></BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}