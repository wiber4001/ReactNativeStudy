import React, {Component} from "react";
import {View, Text, Button} from 'react-native'

type Props={
    title:string,
    color:string,
    onPress: ()=>void //함수의 자료형: 파라미터 없고, 리턴도 없음
}

class MyComponent5 extends Component<Props> {
    render(): React.JSX.Element{
        return (
            <View style={{margin:16}}>
                {/* <Button color={this.props.color} onPress={this.props.onPress} title={this.props.title}></Button> */}
                {/* props 속성들을 한방에 적용 */}
                <Button {...this.props}></Button>
            </View>
        )
    }
}

export default MyComponent5