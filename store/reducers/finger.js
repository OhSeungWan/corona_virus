import {SET_FINGER ,CHANGE_MARKER_POSITION,SET_MEDICALS} from '../constants'
import { combineReducers} from 'redux';
const initialState = {
    number: 1,
}

const finger =(state = initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case SET_FINGER:
           
            return{...state, number: action.number};
        default:
            return state;
    }
}

const initialMarkerPosition = {
    LatLng : {
        latitude: '37.501440',
        longitude: '127.039653',
      }
}

const maper = (state = initialMarkerPosition, action) => {
    switch(action.type){
        case CHANGE_MARKER_POSITION:

        return{...state, LatLng: action.LatLng};
        default:
            return state;
    }
}


const initialmedicalPosition = {
    
    medicals : [
        {  lat:'0',
           lng:'0'}
    ]

}

const medicals = (state = initialmedicalPosition, action) => {
    switch(action.type){
        case SET_MEDICALS:

        return{...state, medicals: action.medicals};
        default:
            return state;
    }
}

const reducer = combineReducers({medicals,maper,finger});

export default reducer