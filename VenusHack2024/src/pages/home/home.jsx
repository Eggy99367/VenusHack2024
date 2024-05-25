import React from "react";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/card/card";

export const Home = () =>{
  return (
    <div className="HomePage">
      <Navbar />
      <div className='App'>
        <Card 
          imgSrc={"https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"}
          title={"Card Title"}
          description={"Description Here"}
          link={"https://image.shutterstock.com/image-photo/all-fast-food-collection-set-260nw-2353214487.jpg"}
        />
      </div>
    </div>
  );
};

export default Home

