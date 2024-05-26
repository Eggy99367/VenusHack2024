import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from "./pages/login_page/login_page"
import { CafePage } from './pages/cafe_page/cafe_page'
import { ComparePage } from './pages/compare_page/compare_page'
import {LikePage} from './pages/like_page/like_page'
import './App.css'

async function httpGet(url) {
  try {
      const response = await fetch(url);
      console.log(response)
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // console.log(data);
      return data;
  } catch (error) {
      console.error('GET request failed:', error);
  }
}



var FoodData = await httpGet("http://localhost/db/foods");
console.log(FoodData)


var anteatery = {}
var brandy = {}
for(var i = 0; i < FoodData.length; i++){
  const food = FoodData[i]
  if(food.cafe == "Brandywine"){
    if(!brandy.hasOwnProperty(food.station)){
      console.log(food.station)
      brandy[food.station] = []
    }
    brandy[food.station].push({fav: food.fav, id: food.id, imgSrc: food.imgSrc, title: food.name, rate: food.rate / 100, comment_num: food.reviews})
  }else{
    if(!anteatery.hasOwnProperty(food.station)){
      anteatery[food.station] = []
    }
    anteatery[food.station].push({fav: food.fav, id: food.id, imgSrc: food.imgSrc, title: food.name, rate: food.rate / 100, comment_num: food.reviews})
  }
}
console.log(anteatery)
console.log(brandy)

function App() {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/brandywine" element={<CafePage cafe_name={"Brandywine"} imgSrc={"assets/brandywine.jpg"} cardData={brandy} />} />
      <Route path="/anteatery" element={<CafePage cafe_name={"The Anteatery"} imgSrc={"assets/anteatery.jpg"} cardData={anteatery} />} />
      <Route path="/compare" element={<ComparePage BrandyData={brandy} AntData={anteatery}/>} />
      <Route path="/like" element={<LikePage BrandyData={brandy} AntData={anteatery}/>} />
    </Routes>
  )
}

export default App