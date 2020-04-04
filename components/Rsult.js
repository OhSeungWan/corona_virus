import React from 'react'
import {Text, View,StyleSheet} from 'react-native'
import {connect} from 'react-redux'

import {ChageMarkerPositon ,setFinger,SetMedicals} from '../store/actions/finger'

const style = StyleSheet.create({
  itemContainer: {
      flexDirection : "row",
      borderBottomWidth : 1,
      alignContent: "center"
      },
  itemText: {
      marginLeft: 5,
      fontSize : 25
      },
  checkButton: {
      justifyContent: "center",
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop:2.5,
      backgroundColor:'#db1a91',
      borderRadius: 3
  }
}
)

class Result extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            receivedData : '',
        }
    }
    render(){
     
        return(
            <View style={style.itemContainer}>
              <Text style={style.itemText}>{this.props.maper.LatLng.longitude}</Text>
              <Text style={style.itemText}>{this.props.maper.LatLng.latitude}</Text>
            </View>
        )
    } 
}

const mstp2 = (state) => {
  return {
    maper :  state.maper,
  };

};
export default connect (mstp2)(Result)
