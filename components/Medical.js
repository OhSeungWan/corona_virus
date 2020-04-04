import React from 'react'
import {Marker} from 'react-native-maps'
import {StyleSheet, Text,Image, View, Dimensions, ColorPropType} from 'react-native'
import {connect} from 'react-redux'
import Medical_stat from './Medical_stat'

class Medical extends React.Component {
    render(){
        const {medicals} = this.props.medicals
        const medicallist = medicals.map(
            
            ({lat,lng,name,remain_stat}) => (
                {   
                    remain_stat: ''+remain_stat,
                    name:''+name,
                    LatLng : {
                    longitude: ''+lng,
                    latitude: ''+lat
                }
               }
            )
        )
        const LntLnglist = medicallist.map(
            ({LatLng,name,remain_stat}) => (
              
            <Marker coordinate ={LatLng} title={name}>
                <View style={styles.name}>
                 <Text>{name} </Text>
                 <Medical_stat remain_stat={remain_stat}></Medical_stat>    
                </View>   
                {/* <Image style={styles.image} source={require('../assets/약국.png')}></Image> */}
                
            </Marker>
            )
        )
        return(
            LntLnglist
        )
    }
}

const mstp2 = (state) => {
    return {
      medicals:  state.medicals
    };
  };

  
const styles = StyleSheet.create({
    name: {
      width: 60,
      backfaceVisibility : "hidden",
      alignItems: "center",
      backgroundColor: '#fff',
      padding: 3,
      marginBottom: 10,
      borderRadius: 10,
      borderWidth : 1,
      borderColor : '#dbf51b'
    },
    image: {
        left:10,
        borderRadius: 15,
   
    }

});

export default connect(mstp2)(Medical)