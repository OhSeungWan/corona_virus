import React from 'react'
import MapView from 'react-native-maps'
import {PROVIDER_GOOGLE,Marker} from 'react-native-maps'
import {StyleSheet, Text, View, Dimensions, ColorPropType} from 'react-native'
import {connect} from 'react-redux'
import Medical from './Medical'
import * as service from './ajax'

import {ChageMarkerPositon ,SetMedicals} from '../store/actions/finger'

class Map extends React.Component{
  constructor(props) {
    super(props);
  }
  
  handleMapPress = (e) => {
    this.getData(e)
  }

  getData(e){
    const { dispatch } = this.props;
    return new Promise(function(resolve, reject){
      const res = {
        latitude:e.nativeEvent.coordinate.latitude,
        longitude:e.nativeEvent.coordinate.longitude
      }
      dispatch(ChageMarkerPositon(res))
      resolve(res)
    }).then(this.getMedicalData)
    .then(function (result) {
      dispatch(SetMedicals(result.stores))
    })
  }

  getMedicalData(LatLng) {
    return new Promise(function (resolve,redux) {
        const res = service.getMedicalByXy(LatLng.latitude,LatLng.longitude)
        resolve(res);
    })
}

    render(){
      // alert("map"+this.props.maper.LatLng.longitude)
      const latitude = this.props.maper.LatLng.latitude
      const longitude = this.props.maper.LatLng.longitude
      const  Region ={
            latitude: ''+latitude,
            longitude: ''+longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
       const {handleMapPress} = this
        

        return(

            <View style={styles.container}>
                <MapView onPress={handleMapPress} style={styles.mapStyle} region = {Region} provider={PROVIDER_GOOGLE}>
                 <Marker coordinate ={this.props.maper.LatLng} pinColor={'#000000'}></Marker>
                 <Medical></Medical>   
                 {/* <Text>{name}</Text> */}
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      flex:1
    },
});

const mstp2 = (state) => {
  return {
    maper :  state.maper,
    medicals: state.medicals
  };
};
export default connect(mstp2)(Map)