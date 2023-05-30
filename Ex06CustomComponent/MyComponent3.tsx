import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

type Props={
    title:string,
    aaa: ()=>void //함수의 자료형: 파라미터 없고, 리턴도 없음
}

class MyComponent3 extends Component<Props> {
    render(): React.JSX.Element{
        return (
            <View style={{margin:16}}>
                <Button onPress={this.props.aaa} title={this.props.title}></Button>
            </View>
        )
    }
}

export default MyComponent3