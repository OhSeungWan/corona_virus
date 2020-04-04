import React from 'react'
import {View , Text } from 'react-native'
import {connect} from 'react-redux'

import {ChageMarkerPositon ,setFinger} from '../store/actions/finger'


class Cunsult extends React.Component{


    render(){
        const {LatLng} = this.props

        return(
            <View>

            </View>
        )
    }
}

const mstp2 = (state) => {
    return {
      maper :  state.maper,
      
    };
  };
export default connect(mstp2)(Cunsult)