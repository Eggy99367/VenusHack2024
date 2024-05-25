import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";
import CafeInfo from "../../components/cafe_info/cafe_info"
import './cafe_page.css'

const cardData = [
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 1", rate: 4.5, comment_num: 34, link: "/link1" },
  { imgSrc: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg", title: "Card 2", rate: 3.8, comment_num: 89, link: "/link2" },
  // Add more card objects as needed
];

export const CafePage = () =>{
  return (
    <div className="HomePage">
      <Navbar />
      <CafeInfo
        imgSrc={"assets/brandywine.jpg"}
        cafe_name={"Brandywine"}
        overall_rating={3.1}
      />
      <div className="cards-grid">
        {cardData.map((data, index) => (
          <Card
            key={index}
            imgSrc={data.imgSrc}
            title={data.title}
            rate={data.rate}
            comment_num={data.comment_num}
            link={data.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CafePage

