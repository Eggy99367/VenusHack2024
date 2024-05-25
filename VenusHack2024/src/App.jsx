import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from "./pages/login_page/login_page"
import { CafePage } from './pages/cafe_page/cafe_page'
import { ComparePage } from './pages/compare_page/compare_page'
import './App.css'

const BrandyData = {
  //Grubb/ Mainline
  Mainline:
  [
  { imgSrc: "https://www.spendwithpennies.com/wp-content/uploads/2021/10/Crispy-Chicken-Drumsticks-SpendWithPennies-5.jpg", title: "Crispy Chicken Drumstick", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.apinchofhealthy.com/wp-content/uploads/2021/07/Close-up-of-mashed-potatoes-2.jpg", title: "Hearty Mashed Potatoes", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.allrecipes.com/thmb/rrplCGJkonMYNIkhRtw1NrXKEww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/165649roasted-vegetable-medley-DDMFS-001-4x3-f9c51738278e4c92aa53d51250f4ed10.jpg", title: "Vegetable Medley", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  //Promotions
  Promotions:
  [
  { imgSrc: "https://gimmedelicious.com/wp-content/uploads/2021/09/Grilled-Chili-Cilantro-Lime-Chicken-9.jpg", title: "Grilled Ancho-Lime Chicken", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.simplyrecipes.com/thmb/cnd8eAUkhnxJWSoAjBDtmB2JzKE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__09__cilantro-lime-rice-horiz-a2-2000-86dcc93372164caa862e1c131f15dafb.jpg", title: "Cilantro Lime Rice", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  // Ember/Grill
  Grill:
  [
  { imgSrc: "https://www.simplyrecipes.com/thmb/mZq-tAKO98F0KUZOsohbXlo37s8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Vertical-3c66b6ae87184189920ad84f3f1db6bb.jpg", title: "Grilled Chicken Breast", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg", title: "Crispy Homestyle French Fries", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-500x500.jpg", title: "Cheeseburger", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/1994_4k.jpg", title: "Classic Hot Dog", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://bakingamoment.com/wp-content/uploads/2022/09/IMG_1083-chicken-sandwich.jpg", title: "Crispy Chicken Sandwich", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://cdn.loveandlemons.com/wp-content/uploads/2020/07/black-bean-burger-1.jpg", title: "Grilled Black Bean Burger", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  //Hearth/Pizza
  Pizza:
  [
  { imgSrc: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg", title: "Classic Cheese Pizza", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg", title: "Pepperoni Pizza", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  //Vegan
  Vegan:
  [
  { imgSrc: "https://images.squarespace-cdn.com/content/v1/593337689de4bb5dfbae22ac/6158e8b2-4870-4557-8bde-1543336f4716/IMG_02591-1024x768.jpeg", title: "Mediterranean Saute with Orzo", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  //Honeycakes/Bakery
  Bakery:
  [
  { imgSrc: "https://joyfoodsunshine.com/wp-content/uploads/2016/01/best-chocolate-chip-cookies-recipe-ever-no-chilling-1.jpg", title: "Chocolate Chip Cookie", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.allrecipes.com/thmb/JbnVNNMYuKZIgDvy1gDQcrTkorQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/10264-oatmeal-raisin-cookies-i-DDMFS-4x3-0fe02131a6354b08a175d315210adb50.jpg", title: "Oatmeal Raisin Cookie", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://chocolatecoveredkatie.com/wp-content/uploads/2020/03/Vegan-Carrot-Cake-480x270.jpg", title: "Vegan Carrot Spice Cake", rate: 4.5, comment_num: 34, link: "/link1" },
  ]
  // Add more card objects as needed
};

const AnteateryData = {
  //Home
  Home:
  [
  { imgSrc: "https://uglyducklingbakery.com/wp-content/uploads/2022/04/cavatappi-alfredo-with-pumpkin-puree-e1649616534221.jpg", title: "Cavatappi Alfredo", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://thisitaliankitchen.com/wp-content/uploads/2022/11/Italian-Roasted-Vegetables-4.jpg", title: "Italian Vegetable Blend", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.allrecipes.com/thmb/xNb_l8rpNkFB0i7MqcRjxgbmGoo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241890-grilled-chicken-marinade-DDMFS-4x3-93bf452481e645808c72f13349340582.jpg", title: "Grilled Chicken", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  //Oven
  Oven: 
  [
  { imgSrc: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg", title: "Classic Cheese Pizza", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg", title: "Pepperoni Pizza", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  // Sizzle Grill
  Grill:
  [
  { imgSrc: "https://www.simplyrecipes.com/thmb/mZq-tAKO98F0KUZOsohbXlo37s8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-Chicken-LEAD-SEO-Vertical-3c66b6ae87184189920ad84f3f1db6bb.jpg", title: "Grilled Chicken Breast", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg", title: "Crispy Shoestring French Fries", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267-500x500.jpg", title: "Cheeseburger", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://recipe-graphics.grocerywebsite.com/0_GraphicsRecipes/1994_4k.jpg", title: "Classic Hot Dog", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://bakingamoment.com/wp-content/uploads/2022/09/IMG_1083-chicken-sandwich.jpg", title: "Crispy Chicken Sandwich", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://cdn.loveandlemons.com/wp-content/uploads/2020/07/black-bean-burger-1.jpg", title: "Grilled Black Bean Burger", rate: 4.5, comment_num: 34, link: "/link1" },
  ],
  //Vegan
  Vegan: 
  [
  { imgSrc: "https://www.simplyrecipes.com/thmb/w4_QB4AOJ6a58M6g8FL7oJp3h7c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spicy-Tofu-Stirfry-METHOD-10-50c90297cbc840ba9927452d47c7e775.jpg", title: "Spicy Tofu Vegetable Stir-Fry", rate: 4.5, comment_num: 34, link: "/link1" },
  ]
  


  // Add more card objects as needed
};

function App() {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/brandywine" element={<CafePage cafe_name={"Brandywine"} imgSrc={"assets/brandywine.jpg"} cardData={BrandyData} />} />
      <Route path="/anteatery" element={<CafePage cafe_name={"The Anteatery"} imgSrc={"assets/anteatery.jpg"} cardData={AnteateryData} />} />
      <Route path="/compare" element={<ComparePage BrandyData={BrandyData} AntData={AnteateryData}/>} />
    </Routes>
  )
}

export default App