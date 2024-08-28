import React, { useState, useMemo } from "react";
import Column from "../Column/Column";
import BurnBarrel from "../BurnBarrel/BurnBarrel";
import Filter from "../Filter/Filter";
import { COLUMN_CONFIG, CARDS_CONFIG } from "../../configuration/masterConfig";

const Board = () => {
  const [cards, setCards] = useState(CARDS_CONFIG);
  const [filteredAttribute, setFilteredAttribute] = useState(""); 


  const uniqueAttributes = useMemo(() => {
    const attributesSet = new Set();
    cards.forEach(card => {
      card.attributes.forEach(attr => attributesSet.add(attr));
    });
    return Array.from(attributesSet);
  }, [cards]);

  
  const filteredCards = useMemo(() => {
    if (filteredAttribute === "") return cards;
    return cards.filter((card) => card.attributes.includes(filteredAttribute));
  }, [cards, filteredAttribute]);

  const handleFilterChange = (attribute) => {
    setFilteredAttribute(attribute); 
  };

  return (
    <>
      <h1 className="p-10 text-3xl font-bold text-center">Swimlane UI</h1>
      <Filter attributes={uniqueAttributes} onFilterChange={handleFilterChange} /> 
      <div className="flex h-full w-full gap-3 overflow-scroll p-12">
        {COLUMN_CONFIG.map((config) => (
          <Column
            key={config.column}
            title={config.title}
            column={config.column}
            headingColor={config.headingColor}
            cards={filteredCards} 
            setCards={setCards}
          />
        ))}
        <BurnBarrel setCards={setCards} />
      </div>
    </>
  );
};

export default Board;
