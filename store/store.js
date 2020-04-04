import {createStore, combineReducers} from 'redux';
import  reducer from './reducers/finger'

// const reducer = combineReducers({...reducers});

export default createStore(reducer)