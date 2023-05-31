import React,{Component} from "react";
import {View, Text, StyleSheet, SectionList, TouchableOpacity, Alert} from 'react-native'

export default class Main extends Component{

    //리스트뷰의 섹션별 헤더뷰를 가지르 수 있는 SectionList컴포넌트
    //대량의 데이터
    state:React.ComponentState={
        //SectionList의 섹션하나 객체에는 title, data 2개의 프로퍼티가 필수
        sectionDatas:[
            {title:'한식',data:['백반', '비빔밥','김치찌개']},
            {title:'중식',data:['짜장면', '탕수육', '짬뽕']},
            {title:'일식',data:['초밥', '우동', '돈까스']}
        ]
    }
    render():JSX.Element{
        return (
            <View style={style.root}>
                <Text style={style.title}>SectionList Food Menu</Text>
                {/* SectionList에 필요한 필수 속성 3개 */}
                {/* 1. sections - 섹션 title과 섹션별 data를 가진 배열*/}
                {/* 2. renderSectionHeader - 섹션별 title 영역이 그려질 render 뷰를 리턴하는 콜백함수 지정*/}
                {/* 3. renderItem - 섹션별 item들(string)이 그려질 render뷰를 리턴하는 콜백함수 지정[FlatList와 동일] */}
                <SectionList
                sections={this.state.sectionDatas}
                // 헤더의 모양 - 위 sections속성에 지정한 배열의 요소개수만큼 반복하여 헤더영역 컴포넌트 생성 및 리턴
                //구조분해 할당
                renderSectionHeader={ ({section})=> {
                    return (
                        <View style={style.sectionHeader}>
                            <Text style={style.sectionTitle}>{section.title}</Text>
                        </View>
                    )
                }}
                renderItem={({item,index,section})=>{
                    return(
                        <TouchableOpacity style={style.sectionItem} onPress={()=>Alert.alert(index+":"+item+"~"+section.title)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )
                }}>

                </SectionList>

            </View>
        )
    }
}

const style=StyleSheet.create({
    root:{
        padding:16,
        flex:1
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:24
    },
    sectionHeader:{
        padding:8,
        backgroundColor:'grey',
        fontSize:24
    },
    sectionTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'pink'
    },
    sectionItem:{
        backgroundColor:'tomato'
    }

})