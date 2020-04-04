import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

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
export default class ItemTodo extends React.Component{
    state = {
        isCheck :false
    }

    handleCheck = () => {
        this.setState({isCheck : true})
    }

    render(){
        
        const {isCheck} = this.state;
        const {text, search} = this.props

        if(!isCheck){
        return(
            <View style= {style.itemContainer}>
                <TouchableOpacity
                onPress = {this.handleCheck} 
                style={style.checkButton}>
                <Text>check</Text>
            </TouchableOpacity> 
                <Text style= {style.itemText}>   
                {text}</Text>
                <Text style= {style.itemText}>   
                {search}</Text>
            </View>
        )}
        return null
    }
}