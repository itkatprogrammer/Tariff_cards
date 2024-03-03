import React, { useState } from "react";
import TariffCard from "./components/TariffCard";
import st from "./App.module.scss";
import data from "./data";

function App() {
  const [clickedCard, setClickedCard] = useState(null);

  const handleClickCard = (index) => {
    setClickedCard(index === clickedCard ? null : index);
  };

  return (
    <div className={st.cards}>
      {data.map((item, index) => {
        return (
          <TariffCard
            key={index}
            name={item.name}
            price={item.price}
            speed={item.speed}
            colorName={item.colorName}
            colorPrice={item.colorPrice}
            isClicked={index === clickedCard}
            onClick={handleClickCard}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
