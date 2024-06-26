import Navbar from "../../components/navbar/navbar";
import React, { useState } from 'react';
import Card from "../../components/card/card";
import CafeInfo from "../../components/cafe_info/cafe_info";

import './compare_page.css';

export const ComparePage = ({
  BrandyData,
  AntData
}) => {

  var flattenedBrandy = Object.values(BrandyData).flat();
  var rate_sum = 0;
  for (var i = 0; i < flattenedBrandy.length; i++) {
    rate_sum += flattenedBrandy[i].rate;
  }
  var brandy_rate = Math.round((rate_sum / flattenedBrandy.length) * 10) / 10;

  var flattenedAnt = Object.values(AntData).flat();
  rate_sum = 0;
  for (var i = 0; i < flattenedAnt.length; i++) {
    rate_sum += flattenedAnt[i].rate;
  }
  var ant_rate = Math.round((rate_sum / flattenedAnt.length) * 10) / 10;

  flattenedBrandy.sort((a, b) => b.rate - a.rate);
  flattenedAnt.sort((a, b) => b.rate - a.rate);

  return (
    <div className='main-container'>
      <Navbar />
      <div className="content-container">
        <div className='brandy-container'>
          <CafeInfo imgSrc={"assets/brandywine.jpg"} cafe_name={"Brandywine"} overall_rating={brandy_rate} className="b-info-cont"/>
          <div className = "brandy-elements">
          {flattenedBrandy.map((data, index) => (
            <Card
              fav={data.fav}
              id={data.id}
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
        <div className='ant-container'>
          <CafeInfo imgSrc={"assets/anteatery.jpg"} cafe_name={"The Anteatery"} overall_rating={ant_rate} />
          <div className="ant-elements">
          {flattenedAnt.map((data, index) => (
            <Card
              fav={data.fav}
              id={data.id}
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
      </div>
    </div>

    
  )
};

export default ComparePage;
