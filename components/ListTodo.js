import React from 'react'
import {Text, View} from 'react-native'
import ItemTodo from './ItemTodo'


export default class LinstTodo extends React.Component{
    shouldComponentUpdate(nextProps, nextState) {
      return this.props.todos !== nextProps.todos;
    }
    render(){

        const {todos,search} = this.props
        console.log(search)
        const todolist = todos.map(
            ({text}) => (
            <View>
                <ItemTodo  key={todos.index} text ={text} search= {search}></ItemTodo>
            </View>
            )
        )
        return(
        <View>{todolist}</View>
        )
    }
}