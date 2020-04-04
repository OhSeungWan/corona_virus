import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    Header: {
      marginTop:50,
      fontSize:50,
      borderColor: '#121314',
      borderWidth: 1,
    }
  });
  

export class Header extends React.Component {
    render(){
        return(
            <View>
               <Text style={styles.Header}>공적 마스크 판매처</Text> 
            </View>
        )
    }
}

export default Header