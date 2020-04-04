import {SET_FINGER, CHANGE_MARKER_POSITION,SET_MEDICALS} from '../constants'


export function setFinger(no){
    return {
        type :'SET_FINGER',
        number:no
    }
}

export function ChageMarkerPositon(LatLng){
    return {
        type :'CHANGE_MARKER_POSITION',
        LatLng : LatLng
    }
}

export function SetMedicals(medicals){
    return {
        type :'SET_MEDICALS',
        medicals : medicals
    }
}