//###react native는 사진앱 또는 카메라앱을 실행하는 기능이 없음###
//###그래서 image-picker 라이브러리 사용: react-native-image-picker
//### 라이브러리가 외부저장소 사용에 대한 퍼미션을 알아서 처리하기에 별도의 추가작업 필요없음

import React, { useState } from "react";
import {View, Text, Image, Button, Alert, StyleSheet, ImageURISource} from 'react-native'

//이미지 피커 라이브러리 기능 메소드 import
import { launchCamera, launchImageLibrary, CameraOptions } from "react-native-image-picker";


export default function Main():JSX.Element{
    
    //화면 갱신에 영향을 주는 특별한 변수 state 를 만들 수 있는 함수 useState()
    //img 이미지는 객체이며, ImageURISource 타입의 react-native 것이다
    const [img, setImg] = useState<ImageURISource>({uri:'https://cdn.pixabay.com/photo/2016/09/07/11/37/tropical-1651423_1280.jpg'})

    //onPress에 등록할 함수 - 호출하는게 아님
    const showCamera=function(){

        //1. 옵션객체 - launchCamera를 할때 쓰는 옵션
        const options:CameraOptions={
            mediaType:'photo',
            cameraType:'back',
            saveToPhotos:true,
            quality:1,
            videoQuality:'high',
        }
        //촬영결과를 callback메소드로 처리함
        launchCamera(options, ()=>{})
    }

    const showPhoto=()=>{

    }

    return (
        <View style={style.root}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button title="show camera app" onPress={showCamera}></Button>
                <Button title="show photo app" color='green' onPress={showPhoto}></Button>

            </View>
            <Text style={style.text}>{img?.uri}</Text>
            <Image source={img} style={style.img}></Image>
        </View>
    )
}

const style=StyleSheet.create({
    root:{flex:1, padding:8},
    text:{color:'tomato',fontSize:16},
    img:{marginTop:8, flex:1}
})
