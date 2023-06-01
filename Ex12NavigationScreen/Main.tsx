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

//1)가장 먼저 Navigator들을 감싸는 최상위 Container 컴포넌트가 있어야 함
import { NavigationContainer } from "@react-navigation/native";

//2)화면 전환 방법을 결정하는 Navigator의 종류가 여러개..
//Stack, Drawer, BottomTab, MaterialBottomTab, MaterialTopTab
//각 네비게이터를 사용할 때마다 전용 라이브러리를 추가로 설치해야 함.

//이 중에서 가장 기본인 StackNavigator 사용해보기


export default function Main():JSX.Element {
    return (
        <NavigationContainer>

        </NavigationContainer>
    )

}


