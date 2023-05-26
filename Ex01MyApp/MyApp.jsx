//리액트 라이브러리 사용
import React, {Component} from 'react'
import {Text,View} from 'react-native'

//리액트 네이티브는 Component를 상속받은 클래스들이 화면에 보여질 수 있음
class MyApp extends Component{
    //리액트의 Component클래스가 화면에 보여줄 뷰를 그려내는 작업 메소드
    //멤버변수, 함수에 let, function 키워드는 쓰면 에러
    // 이 메소드 안에서 JSX(JavaScript+XML) 언어로 뷰를 설계하고 이를 return해줌
    render(){ //render()를 override
        return (
        // <Text>Hello World</Text>
        // <Text>Nice to meet You</Text>
        //error -컴포넌트는 1개의 컴포넌트만 리턴가능
        //뷰그룹을 사용
        <View>
            <Text>Hello World</Text>
            <Text>Nice to meet You</Text>
        </View>
        )
    }//render()...
}//MyApp class...

//MyApp클래스를 다른.js에서 사용할 수 있도록 내보내기
export default MyApp 