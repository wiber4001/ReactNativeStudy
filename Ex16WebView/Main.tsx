// ## WebView library
//버젼충돌이 있으면 낮은 버젼으로 설치
//$ npm install react-native-webview@^12.1.0
//버젼은 '@^'뒤에 기재한다

import React from 'react'
import {View, Button} from 'react-native'
import WebView from 'react-native-webview'

export default function Main():JSX.Element{
    return (
        <View style={ {flex:1} }>

            {/* 웹뷰의 기본 height은 flex:1로 설정되어 있음(화면전체 차지) */}
            <WebView source={ {uri:'https://reactnative.dev'} } ></WebView>
            <Button title='button'></Button>
            {/* 여러개의 웹뷰 존재할 수 있음(1:1비율로 차지-flex:1기본이므로)*/}
            {/* 억지로 높이를 지정하고 싶다면 */}
            {/* <View style={{height:200}}>
                <WebView source={{uri:'https://www.google.com'}}></WebView>
            </View> */}
            <WebView source={{uri:'http://wny2023.dothome.co.kr/03_kakaoMapAPI.html'}}></WebView>
        </View>
    )
}