import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {Image} from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

export type TopTabScreenList={ //실제 컴포넌트명과 전혀다른 name으로 화면이름 지정 가능
    one:undefined,
    two:undefined,
    three:undefined

}

const TopTab=createMaterialTopTabNavigator<TopTabScreenList>()

//탭에 의해 전환될 화면들 제작 및 import
import FirstTab from './screen_materialtoptab/FirstTab'
import SecondTab from './screen_materialtoptab/SecondTab'
import ThirdTab from './screen_materialtoptab/ThirdTab'

export default function MainMaterialTopTab():JSX.Element{
    return (
        <NavigationContainer>
            <TopTab.Navigator
                initialRouteName='two'
                tabBarPosition='top'
                screenOptions={{
                    swipeEnabled:true,
                    tabBarActiveTintColor:'blue',
                    tabBarInactiveTintColor:'skyblue',
                    tabBarIndicatorStyle:{
                        backgroundColor:'green',
                        height:8
                    },
                    tabBarShowIcon:true
                }}>
                <TopTab.Screen name="one" component={FirstTab}></TopTab.Screen>
                <TopTab.Screen name="two" component={SecondTab}
                options={{
                    tabBarLabel:'두번째',
                    tabBarIcon:()=><Image source={require('./image/a_monkey.png')} style={{height:24,width:24}}></Image>
                }}></TopTab.Screen>
                <TopTab.Screen name="three" component={ThirdTab}></TopTab.Screen>
            </TopTab.Navigator>
        </NavigationContainer>
    )
}