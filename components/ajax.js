import axios from 'axios'

export function getXyByAddress(address) {
  return   axios.get('http://dapi.kakao.com/v2/local/search/address.json?query='+address, { 
            headers: { // 요청 헤더
                         Authorization : 'KakaoAK 84b050274e5e1c6da8d55c7ad12c0feb' // api key
                     }
                    }).then(res=>res.data.documents[0].address);
}

export function getMedicalByXy(lat,lng){
    return axios.get('https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat='+lat+'&lng='+lng+'&m=300')
    .then(res => res.data)
}