import {StyleSheet, Text, View, Dimensions, ColorPropType ,Image} from 'react-native'
import React from 'react'

export default class Medical_state extends React.Component{
    

    render(){
        const {remain_stat} = this.props
        let stat_color = '#fff'
        if(remain_stat=='empty'){
            stat_color = '#f73636'
         }else if(remain_stat=='plenty'){stat_color = '#48ff00'}
         else if(remain_stat=='some'){stat_color = '#fffb00'}
         else if(remain_stat=='few'){stat_color = '#f58e2f'}
         else if(remain_stat=='break'){stat_color = '#826f70'}
         
        const style = StyleSheet.create({
            stat_container:{
                borderRadius:3,
                backgroundColor : stat_color
            }
          
        })
      
        const source = '../assets/약국.png'
        
        
        return(
            <View style={style.stat_container}>
                <Text >{remain_stat}</Text>
                {/* <Image source={require(source)} ></Image> */}
            </View>
           
        )
    }
}

