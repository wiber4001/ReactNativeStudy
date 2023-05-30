import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

type Props={
    title:string,
    color:string,
    aaa: ()=>void //함수의 자료형: 파라미터 없고, 리턴도 없음
}

class MyComponent4 extends Component<Props> {

    //정적 변수로 props가 전달되지 않을 때의 기본값 지정
    //정적타입들의 적용은 핫 리로드로 적용 x 앱을 다시 실행해야 올바르게 적용됨
    static defaultProps={
        title:'untitled',
        color: 'tomato',
        aaa: ()=>{}
    }
    render(): React.JSX.Element{
        return (
            <View style={{margin:16}}>
                <Button onPress={this.props.aaa} title={this.props.title} color={this.props.color}></Button>
            </View>
        )
    }
}

export default MyComponent4