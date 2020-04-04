import React from 'react'
import {Marker} from 'react-native-maps'
import {StyleSheet, Text,Image, View, Dimensions, ColorPropType} from 'react-native'
import {connect} from 'react-redux'

class Medical extends React.Component {
    render(){
        const {medicals} = this.props.medicals
        const medicallist = medicals.map(
            
            ({lat,lng,name}) => (
                {
                    name:''+name,
                    LatLng : {
                    longitude: ''+lng,
                    latitude: ''+lat
                }
               }
            )
        )
        const LntLnglist = medicallist.map(
            
            ({LatLng,name}) => (
            <Marker coordinate ={LatLng} title={name}><Text style={styles.name}>{name}</Text><Image style={styles.image} source={require('../assets/약국.png')}></Image></Marker>
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
      backgroundColor: '#fff',
      padding: 5,
      marginBottom: 10,
      borderRadius: 15
    },
    image: {
        left:10,
        borderRadius: 15
    }

});

export default connect(mstp2)(Medical)