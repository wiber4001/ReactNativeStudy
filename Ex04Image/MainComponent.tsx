import React, {Component} from "react"
import {View, Image, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, TouchableNativeFeedback, Text, ScrollView, ImageBackground} from 'react-native'

export default class MainComponent extends Component{

    // 화면 갱신에 영향을 주는 아주 특별한 멤버변수
    state:React.ComponentState = {
        img: require('./Images/moana02.jpg'),
        img2: require('./Images/moana01.jpg'),
        imgArr:[
            require('./Images/moana01.jpg'),
            require('./Images/moana02.jpg'),
            require('./Images/moana03.jpg'),
            require('./Images/moana04.jpg'),
            require('./Images/moana05.jpg'),
            {uri:'https://cdn.pixabay.com/photo/2018/01/31/16/12/beach-3121393_1280.png'},
            {uri:'https://cdn.pixabay.com/photo/2019/04/27/23/09/beach-4161593_1280.jpg'}

        ],
        imgNum: 0
    }

    render(): JSX.Element {
        return (
        
        //1.그림 이미지 source는 require()함수 이용- 별도의 스타일이 없으면 원본사이즈
        // <View style={style.root}>
        //     <Image source={require('./Images/moana01.jpg')}></Image>
        // </View>

        //2. 그림 이미지를 네트워크 URL을 통해 가져오기
        // - uri  속성을 가진 객체를 지정해야만 함
        // - 네트워크 이미지는 사이즈를 지정하지않으면 보여줄수없음: 스타일이 필수
        // <View style={style.root}>
        //     <Image style={{width:200, height:200}} source={{uri:'https://cdn.pixabay.com/photo/2015/05/14/16/02/sandcastle-766949_1280.jpg'}}></Image>
        // </View>

        //3. 이미지를 클릭했을때 이미지 변경
        // - 이미지는 클릭했을때 반응하는 속성이 없음 
        // - RN은 클릭이 될 수 있는 뷰가 정해져 있음.[Button, Text, TouchableXXX...]
        // - 특정 컴포넌트를 클릭하고 싶으면, TouchableXXX로 감싸서 만들어야함
        // <View style={style.root}>
        //     <TouchableHighlight onPress={this.clickImage} style={{padding:4, width:308}}>
        //         <Image style={{width:300,height:250}} source={this.state.img}></Image>
        //     </TouchableHighlight>
        //     <TouchableOpacity onPress={this.clickImage2} style={{padding:4, width:308}}>
        //         <Image style={{width:300,height:250}} source={this.state.img2}></Image>
        //     </TouchableOpacity>
        //     {/* android에서만 적용되는 TouchableXXX */}
        //     <TouchableNativeFeedback onPress={this.clickImage3}>
        //         {/* 단, 뷰그룹을 가지고 있어야 효과가 보여짐 */}
        //         <View style={{width:310, height:200, backgroundColor:'lightblue', alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:8}}>
        //             <Text style={{color:'white',fontWeight:'bold',marginBottom:16}}>Moana</Text>
        //             <Image style={{width:300, height:150}} source={this.state.imgArr[this.state.imgNum]}></Image>
        //         </View>
        //     </TouchableNativeFeedback>
        // </View>
        //4. 이미지가 많으면 스크롤이 필요함 스크롤 뷰 필요
        // <ScrollView style={style.root}>
        //     <Image source={this.state.imgArr[0]} style={style.img}></Image>
        //     <Image source={this.state.imgArr[1]} style={style.img}></Image>
        //     <Image source={this.state.imgArr[2]} style={style.img}></Image>
        //     <Image source={this.state.imgArr[3]} style={style.img}></Image>
        //     <Image source={this.state.imgArr[4]} style={style.img}></Image>
        // </ScrollView>
        //5. 배경이미지 CSS의 Background-image는 없음
        <View style={{flex:1}}>
            <ImageBackground source={this.state.imgArr[6]} style={{width:'100%', height:'100%'}}>
                <Text style={{color:'white', fontWeight:'bold', fontSize:40, margin:16 }}>Image Background</Text>
            </ImageBackground>
        </View>

        ) //return
    }//render method..

    clickImage= ()=> {
        // Alert.alert("clicked image")
        // ImageComponent가 보여주는 아주 특별한 변수 state값을 변경하면 화면 자동갱신
        this.setState({img:require('./Images/moana04.jpg')})

    }
    clickImage2= ()=> this.setState({img2:require('./Images/moana03.jpg')})
    clickImage3= ()=> {
        let num:number = this.state.imgNum
        num++
        if(num>6) num=0
        this.setState({imgNum:num})
    }
    
}

const style=StyleSheet.create({
    root:{flex:1},
    img:{width:360, height:240, resizeMode:'cover'}
})
