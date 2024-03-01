import React from "react";
import { Card } from "../components/Card";
import { DUMMY_CARDS_DATA as cardsData } from '../data/dummy_data';


export const Two = () => {
  return (
      <div className="bg-black">
        <h1 className="text-2xl lg:text-5xl text-white text-center">ALL THE LATEST FROM AEG</h1>
        <div className="bg-black grid grid-rows-2 grid-cols-3 gap-6 p-6 md:p-10 lg:40">
          <Card cardsData={cardsData}/>
        </div>
      </div>
    );
  };
