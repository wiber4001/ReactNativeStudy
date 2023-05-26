//리액트 라이브러리 사용
import React, {Component} from 'react'
import {Text,View,Button, StyleSheet} from 'react-native'

//리액트 네이티브는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    //리액트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    //멤버변수, 함수에 let, function 키워드는 쓰면 에러
    // 이 메소드 안에서 JSX(JavaScript+XML) 언어로 뷰를 설계하고 이를 return해줌
    render(){ //render()를 override
        let name="SAM"//지역변수 {}안에서만 사용가능
        let btnTitle="click me"

        return (
        // <Text>Hello World</Text>
        // <Text>Nice to meet You</Text>
        //error -컴포넌트는 1개의 컴포넌트만 리턴가능
        //뷰그룹을 사용
        //JSX는 xml안에서도 JS 의 변수, 함수 사용이 가능
        //XML안에서 {}는 JS문법을 쓰는 영역
        //스타일 속성(property) 적용 -

        <View style={style.root}>
            <Text style={style.titleText}>안녕하세요, {name}님 </Text> 
            <Text style={style.text}>Nice to meet You</Text>
            {/* JSX주석  */}
            {/* Button컴포넌트는 style 속성이 존재하지 않음 */}
            {/* <Button style={btnStyle} title={btnTitle}></Button> */}
            <View style={{marginTop:16}}>
                <Button title={btnTitle}></Button>
            </View>
            
        </View>
        )
    }//render()...
}//MyApp class...

//스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet객체 생성
const style= StyleSheet.create({
    root:{
        flex:1,
        padding:16,
        backgroundColor: '#cccc00'
    },
    titleText:{
        color:'Navy',
        fontSize:24,
        fontWeight:'bold',
        margin:16
    },
    text:{
        margin:8,
        color:'blue'
    }
})


//스타일객체- 스타일 속성값은 CSS를 기반으로 제작되었음
const textStyle={
    color: 'purple',
    fontSize: 20, //기본 단위 dp
    fontWeight:'bold',
    margin:8
}

//RN은 기본적으로 display : flex가 적용된 상태
//기본 배치 방향[flex-direction]이 column[세로] 방향임
//기본적으로 컴포넌트의 height은 wrap임
const rootStyle= {
    padding:16,
    backgroundColor: '#ffdd00',
    // height:'100%'
    //flex-grow속성[android의 layout-weight과 비슷한 속성]
    //RN에서는 flex-grow속성을 그냥 flex로 사용함
    flex:1, //root이므로 나와 비교할대상없으므로->0만아니면 전체를 먹음
    // flexDirection:'row'
}

const plainTextStyle= {
    margin:8,
    color: 'green',
    fontSize: 16
}

//버튼 스타일객체는 무의미: 버튼컴포넌트는 스타일링이 불가능함, style속성자체가 없음
const btnStyle= {
    margin:80,
    backgroundColor:'skyblue'
}

//MyApp클래스를 다른.js에서 사용할 수 있도록 내보내기
export default MyApp 