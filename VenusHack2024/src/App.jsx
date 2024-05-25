import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from "./pages/login_page/login_page"
import { CafePage } from './pages/cafe_page/cafe_page'
import './App.css'

const BrandyData = [
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 1, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 1, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 2", rate: 3.8, comment_num: 89, link: "/link2" },
];

function App() {
  return(
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/brandywine" element={<CafePage cafe_name={"Brandywine"} imgSrc={"assets/brandywine.jpg"} cardData={BrandyData} />} />
      <Route path="/anteatery" element={<CafePage cafe_name={"The Anteatery"} imgSrc={"assets/anteatery.jpg"} cardData={BrandyData} />} />
    </Routes>
  )
}

export default App