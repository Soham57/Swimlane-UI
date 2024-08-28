import React, { useState } from "react";
import Column from "../Column/Column";
import BurnBarrel from "../BurnBarrel/BurnBarrel";
import { COLUMN_CONFIG, CARDS_CONFIG } from "../../configuration/masterConfig";

const Board = () => {
  const [cards, setCards] = useState(CARDS_CONFIG);

  return (
    <>
    <h1 className="text-3xl font-bold text-center">Swimlane UI</h1>

    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {COLUMN_CONFIG.map((config) => (
        <Column
          key={config.column}
          title={config.title}
          column={config.column}
          headingColor={config.headingColor}
          cards={cards}
          setCards={setCards}
        />
      ))}
      <BurnBarrel setCards={setCards} />
    </div>
    </>
  );
};

export default Board;