import React from 'react'
import { Text,TouchableOpacity ,StyleSheet, Button, View, TextInput,SectionList } from 'react-native';
import * as service from './ajax'
import {connect} from 'react-redux'
import {ChageMarkerPositon ,SetMedicals} from '../store/actions/finger'
const DATA = [
    {
      title: "검색 반경을 선택하세요 ",
      data: ["100", "200", "300"]
    }
  ];
  const onCheck = (e) => {
    
  }
  const Item = ({ title }) => (
    <View style={Style.item}>
      <TouchableOpacity 
          onPress={onCheck({title})}
          style={{backgroundColor:'#32a852',margin:3,borderRadius:3}} 
          value = {title}>
            <Text>check</Text>
      </TouchableOpacity>
      <Text style={Style.title}>{title}</Text>
    </View>
  );
const Style = StyleSheet.create({
    item:{
        alignSelf: "center", 
        flexDirection: "row"
    },
    title: {
        alignContent:"center",
        fontSize:20
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
      },
    input: {
    
    flexDirection : 'row',
    },
    input_text : {
        height:50,
        flex:5,
        borderWidth : 1,
        backgroundColor : '#fff'
    },
    button : {
        justifyContent: "center",
        flex:1,
        backgroundColor : '#daed6f',
        borderWidth : 1,
        alignItems: 'center',
    }
})



class Input extends React.Component{


    
    state = {
        input :'',
        lat : '',
        lng: '',
        search : ''
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.search !== nextProps.search;
    //   }

    handleChange =(e)=>{
        this.setState({
            input: e.nativeEvent.text
        })
    }

    handleSearch = (e) => {
       const {input} = this.state
        this.setState({
            input:'',
            search:input
        })
       this.getData(this.state.input)
    }
    
    getData(address) {
        const {dispatch} = this.props
        // new Promise() 추가
        return new Promise(function(resolve, reject) {
           const res = service.getXyByAddress(address)
           resolve(res);
        }).then(function (result) {
          
            const LatLng = {
                    latitude:result.y,
                    longitude:result.x
                  }
            dispatch(ChageMarkerPositon(LatLng))
            return LatLng
        })
        .then(this.getMedicalData)
        .then(function (result) {
            if(result.stores.length>5){
                let res =[]
               for(let index = 0 ; index <5 ; index++){
                 res.push(result.stores[index])
               } 
               dispatch(SetMedicals(res))
              }else{ dispatch(SetMedicals(result.stores))}
        })

      }


      getMedicalData(LatLng) {
          return new Promise(function (resolve,redux) {
              const res = service.getMedicalByXy(LatLng.latitude,LatLng.longitude)
              resolve(res);
          })
      }

    render() {
        const {input} = this.state
        const {handleChange,handleSearch} = this
        return(
            <View >
               <View style = {Style.input}>  
                <TextInput 
                    style={Style.input_text}
                    value ={input} 
                    onChange = {handleChange}
                    placeholder = "지역을 검색하세요"
                    >
                </TextInput>
                <TouchableOpacity 
                    style={Style.button}
                    onPress ={handleSearch}>
                <Text>Serch</Text> 
                </TouchableOpacity>
            </View> 
          
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={(
                    { section: { title } }) =>
                     (<Text style={Style.header}>{title}</Text>)
                    }
            />
        </View>
        )
    }
}

const mstp2 = (state) => {
    return {
      maper :  state.maper,
      medicals:  state.medicals
    };
  };

  export default connect(mstp2)(Input)