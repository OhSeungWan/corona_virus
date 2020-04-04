# [공적 마스크 위치 정보 제공 어플]

## Table of Contents

- [공적 마스크 위치 정보 제공 어플](#%ec%8b%9d%eb%8b%b9-%eb%a6%ac%eb%b7%b0-sns)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [사용기술](#%ec%82%ac%ec%9a%a9%ea%b8%b0%ec%88%a0)
  - [Team](#team)
  - [Demo](#demo)
  - [Stack](#stack)
  - [license](#license)

## **about**

## 공적마스크 위치 정보 어플

위치 기준 반경 300M 내의 공적마스크 판매 약국 정보 제공

![공적마스크](C:\Users\USER\Desktop\공적마스크.jpg)

검색한 주소 위치 및 터치한 맵 위치를 기준으로 반경 300M 내의 공적마스크 판매처 정보를 제공 합니다

GitHub repo: [Wan’s GitHub repo][jekyll-ghhh] If you have questions, you can ask them on 
[face4717@gmail.com].

## **MyRole**



1. #### State 구현

- redux를 이용하여 action, reducer 구현

- Medical = 약국의 이름, 위치정보를 갖고 있는 배열
- maper = 검색 위치 및 터치한 위치 정보



2. #### 컴포넌트 구현

   ###### **Map.js**

   - 자신의 위치를 표시할 마커 와 약국들의 마커를 표시하는 자식 컴포넌트를 가지는 컴포넌트

   - 검색 위치나 터치 한 위치가 변경 될때마다 렌더링

   - Expo에서 제공하는 react-native-maps 라이브러리를 이용.

   - <MapView> 태크로 구성.

   - 맵 터치시 해당 위치의 경도, 위도 위치를 받아 해당 위치에 마커 표시, 해당 위치 반경 300m내 약국 정보 ajax 요청

   - 해당 정보들을 state에 반영

     

   **Medicals.js**

   - Medical state가 변경 될때 마다 렌더링
   - Medical 에 들어있는 약국 리스트를 지도상에 마커로 표시함

   **Input.js**

   - 지역 검색시 해당 검색어(주소) 를 통해 카카오 API에 AJax통신을 통해 위도,경도 위치를 받아 maper state에 반영.

   - 검색된 위치 기준 반경 약국 정보 ajsx 요청 후 medicas state에 반영

     

3. #### ajax 통신 구현

   - 카카오 Rest api 를 통해 검색어 따른 위도 경도 위치 요청
   - 공공데이터 포털에서 Rest Api를 통해 제공하는 공적 마스크 판매처 데이터 요청



## 사용기술

React-Native

Expo

ajax

javaScript



## Team

- 오승완

  

## Stack

![기술스택](C:\Users\USER\Desktop\기술스택.png)

## license

MIT License


[jekyll-ghhh]:   https://github.com/OhSeungWan/corona_virus

