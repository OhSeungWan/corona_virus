import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Input from './components/Input'
import Map from './components/Map'
import Result from './components/Rsult'
import { Provider } from 'react-redux'
import store from './store/store';
import * as service from './components/ajax'

export default class App extends React.Component {
 
  state = {
    medicals:[],
  }

  isMapPress= () => { //map 컴포넌트가 눌렸을경우 Result componnet 가 렌더링 되는 조건을 만족해주기위한 함수
    const {isclick} = this.state;
    this.setState({
      isclick : !isclick
    }
    )
  }

  handleSearch = (e) => {
    
  }

  handleChange = (e) => {
    this.setState({
      input: e.nativeEvent.text
    });
  } 



  render(){
    const {input, isclick,search} = this.state;
    const{
      handleChange,
      handleCreate,
      isMapPress
    } = this
    return (
      <Provider store={store}>
       <View style={styles.container}>
        <Header/>
        <Input value = {input} onCreate = {handleCreate} onChange={handleChange}/>
        {/* <Result isMapPress={isMapPress} store={store} search={search} isclick={isclick}/>   */}
        <Map  isMapPress={isMapPress} search={search} />  
       </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#327ba8',
  },
  titleText: {
    fontSize:50,
    borderColor: '#121314',
  }
});
