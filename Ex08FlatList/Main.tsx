import React,{Component} from "react";
import {View, Text, StyleSheet, FlatList, ListRenderItemInfo, TouchableOpacity, Alert, Image} from 'react-native'

export default class Main extends Component {

    //RN에서 ListView의 역할을 하는 컴포넌트는 2가지 종류가 있음
    //1. FlatList:일반적인 리스트뷰
    //2. SectionList: 섹션에 따라 구분지어서 리스트할 때 사용

    //FlatList에서 사용할 대량의 데이터 배열: 데이터변경에 실시간대응을 위해 state 변수 사용
    state: React.ComponentState={
        //1. 간단한 string 문자 배열
        datas:["aaa","bbb","ccc","ddd","bbb","ccc","ddd","bbb","ccc","ddd","bbb","ccc","ddd","bbb","ccc","ddd","bbb","ccc","ddd"],
        //2. 텍스트 2개, 이미지 1개 아이템 뷰 데이터들
        items:[
            {name:"sam",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80'}},
            {name:"sam1",message:"Hello world",img:{uri:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1'}},
            {name:"sam2",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'}},
            {name:"sam3",message:"Hello world",img:{uri:'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif'}},
            {name:"sam4",message:"Hello world",img:{uri:'https://media1.giphy.com/media/gKIyqq4JESg4p3RW8V/giphy.gif'}},
            {name:"sam5",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}},
            {name:"sam6",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80'}},
            {name:"sam7",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1496090987259-18326d349b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}},
            {name:"sam",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80'}},
            {name:"sam1",message:"Hello world",img:{uri:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1'}},
            {name:"sam2",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'}},
            {name:"sam3",message:"Hello world",img:{uri:'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif'}},
            {name:"sam4",message:"Hello world",img:{uri:'https://media1.giphy.com/media/gKIyqq4JESg4p3RW8V/giphy.gif'}},
            {name:"sam",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=326&q=80'}},
            {name:"sam1",message:"Hello world",img:{uri:'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1'}},
            {name:"sam2",message:"Hello world",img:{uri:'https://images.unsplash.com/photo-1586902197503-e71026292412?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'}},
            {name:"sam3",message:"Hello world",img:{uri:'https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif'}},
            {name:"sam4",message:"Hello world",img:{uri:'https://media1.giphy.com/media/gKIyqq4JESg4p3RW8V/giphy.gif'}}
        ]

    }   

    render():JSX.Element{
        return(
            <View style={style.root}>
                <Text style={style.title}>FlatList</Text>
                {/* FlatList: RN의 기본 리스트뷰 컴포넌트 */}
                {/* 필수 2개의 속성(props) - data, renderItem */}
                {/* 1)data-FlatList가 보여줄 대량의 데이터들 지정 */}
                {/* 2)renderItem-아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정 */}
                {/* <FlatList 
                data={this.state.datas}
                renderItem={(obj:ListRenderItemInfo<any>)=>{ //파라미터가 1개:렌더링할 아이템정보 객체(map은 파라미터가 3개였음)
                    return <Text> {obj.index} : {obj.item} </Text>
                }}>
                </FlatList> */}
                {/* 위 renderItem의 obj파라미터 객체를 구조 분해 할당 */}
                {/* <FlatList 
                data={this.state.datas}
                renderItem={({item, index})=>{ //구조분해할당:obj객체의 index, item멤버를 뽑아옴
                    return <Text> {index} : {item} </Text>
                }}>
                </FlatList> */}
                {/* 아이템뷰의 이벤트 처리 */}
                {/* {}를 생략하면, return도 생략해야함, 단 return타입을 쓰면 알아볼수있음(자동추론가능하긴함) */}
                {/* <FlatList 
                data={this.state.datas}
                renderItem={({item, index})=><TouchableOpacity style={style.itemView} onPress={()=>Alert.alert(item)}>
                                                <Text>index:{index}</Text>
                                                <Text>data: {item}</Text>
                                             </TouchableOpacity>}>
                </FlatList> */}
                {/* 2. 텍스트2개, 이미지 1개짜리 아이템 뷰 모양 */}
                <FlatList
                    data={this.state.items}
                    renderItem={({item,index})=>
                        <TouchableOpacity style={style.item} onPress={()=>this.showAlert(item,index)}>
                            <Image source={item.img} style={style.itemImg}></Image>
                                <View>
                                    <Text style={style.itemName}>{item.name}</Text>
                                    <Text style={style.itemMessage}>{item.message}</Text>
                                </View>
                        </TouchableOpacity>
                    }>
                </FlatList>
            </View>
        )
    }
    showAlert=(item:any, index:number)=>{
        Alert.alert(item.name+" : "+index)
    }
}

const style=StyleSheet.create(
    {
        root:{flex:1,padding:16},
        title:{
            fontSize:24,
            fontWeight:'bold',
            textAlign:'center',
            paddingTop:8,
            paddingBottom:16,
            color:'black'
        },
        itemView:{
            borderWidth:1,
            borderRadius:8,
            margin:8,
            padding:16
        },
        item:{
            flexDirection:'row',
            borderWidth:1,
            borderRadius:4,
            padding:8,
            marginBottom:12
        },
        itemImg:{
            width:120,
            height:100,
            resizeMode:'cover',
            marginRight:8
        },
        itemName:{
            fontSize:24,
            fontWeight:'bold',
            color:'magenta'
        },
        itemMessage:{
            fontSize:16,
            fontStyle:'italic',
            color:'pink'
        }

    }
)