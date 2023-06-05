import React, { useState } from "react";
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native'


export default function Main():JSX.Element{

    const[message, setMessage]=useState<string>('message...가 올 곳')

    //영화정보 1개의 타입
    type MovieInfo={
        id:string,
        title:string,
        releaseYear:string
    }

    //RN개발자 사이트의 movies.json 파일 객체 정보
    type MoviesResponse ={
        title:string,
        description:string,
        movies: MovieInfo[]
    }
    const [moviesResponse, setMoviesResponse]= useState<MoviesResponse>({title:'', description:'',movies:[]})

    const fetchData= ()=>{
        console.log('fetch start...')

        //1. JavaScript의 네트워크 작업 객체: XMLHttpRequest
        // const xhr=new XMLHttpRequest()
        // xhr.open('GET','http://wny2023.dothome.co.kr/webproject/ex07.html',true)
        // xhr.send()
        // //true:비동기, false:동기-동기작업은 권장하지않으며, 받을때 변수로 받아야함

        // //서버의 응답결과를 받을때 반응하는 콜백함수 등록
        // xhr.onreadystatechange= ()=>{
        //     //서버의 응답이 여러개 올 수 있음
        //     if(xhr.readyState==4 && xhr.status==200) {//서버의 상태가 정상이고 결과가 정상이면
        //         Alert.alert('응답완료')
        //         setMessage(xhr.responseText)
        //     }
        // }
        
        //2. fetch()함수 -JS 에 기본 내장된 네트워크 통신 라이브러리
        //promiss .then() 메소드
        // fetch('http://wny2023.dothome.co.kr/webproject/ex07.html').then((response:Response)=>Alert.alert(response.status.toString())) //결과:200 이면 ok

        //응답결과를 글씨(text)로 받아보기
        // fetch('http://wny2023.dothome.co.kr/webproject/module.js')
        // .then((response:Response)=>{
        //     //응답객체에게 응답결과를 글씨로 바꿔달라고 요청- 비동기작업
        //     return response.text()
        // }).then((text:string)=>{
        //     setMessage(text)
        // }).catch((error)=>{
        //     Alert.alert(error)
        // })

        //위 then메소드의 파라미터 화살표함수의 축약표현
        // fetch('http://wny2023.dothome.co.kr/webproject/module.js').then(response=>response.text()).then(text=>setMessage(text))

        //3.OPEN API -JSON 파싱
        //3.1 우선 facebook에서 샘플로 제공하는 json파일 파싱실습
        // fetch('https://reactnative.dev/movies.json')
        // .then(res=>res.text())
        // .then(text=>setMessage(text))
        //JSON파싱
        fetch('http://reactnative.dev/movies.json')
        .then(res=>res.json())
        .then(obj=>setMoviesResponse(obj))    

        //HTTP REQUEST METHOD... fetch

        //1)GET method
        let title="same"
        let message="Hello"
        //` 백틱기호를 이용하여 문자열을 씀
        fetch(`http://wny2023.dothome.co.kr/webproject/getTest.php?title=${title}&msg=${message}`)
        .then(res=>res.text()).then(text=>setMessage(text))

        //2)POST method
        fetch('http://wny2023.dothome.co.kr/webproject/bbb.php', {
            method:'POST',
            headers:{'Content-type':'application:/x-www-form-urlencoded'},
            body:`title=${title}&msg=${message}`
        })
        .then(res=>res.text()).then(text=>setMessage(text))

        //3)POST로 보낼 데이터가 객체일때는 그냥 json문자열로 변환하여 서버로 보냄
        let person={name:'robin',age:20,address:'seoul'}
        fetch('http://wny2023.dothome.co.kr/webproject/ccc.php',{
            method:'POST',
            headers:{'Content-type':'application/json'},//보낼 데이터가 json
            body: JSON.stringify(person)//object==>json
        }).then (res=>res.json).then(obj=>Alert.alert('json파싱된 객체 받음'))

    } //fetchData()

    return(
        <View style={style.root}>
            <Button title='fetch data from network' onPress={fetchData}></Button>
            <ScrollView style={style.container}>
                <Text style={style.text}>{message}</Text>
            </ScrollView>
            {/* 영화정보 리스트 */}
            <View style={{flex:1, marginTop:16}}>
                <Text style={{color:'tomato', fontWeight:'bold',padding:8}}>{moviesResponse.title}</Text>
                <Text style={{color:'green', padding:8}}>{moviesResponse.description}</Text>
                {/* 영화 movies는 여러개... Flatlist컴포넌트 써야하지만 대체품으로씀 */}
                {
                    moviesResponse.movies.map((movie:MovieInfo) =>{
                        return (
                            <View style={style.item}>
                                <Text>{movie.id}</Text>
                                <Text>{movie.title}</Text>
                                <Text>{movie.releaseYear}</Text>
                            </View>
                        )
                    })
                }
            </View>

        </View>
    )
}
const style=StyleSheet.create({
    root:{flex:1, padding:16    },
    container:{marginTop:16},
    text:{padding:16, color:'purple'},
    item:{borderWidth:1, borderRadius:4, padding:4, margin:2}
})