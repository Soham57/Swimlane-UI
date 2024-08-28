import React, { useState } from "react";
import { motion } from "framer-motion";
import DropIndicator from "../DropIndicator/DropIndicator";
import Attribute from "../Attribute/Attribute";
import CardModal from "../CardModal/CardModal";

const Card = ({ title, id, column, attributes, history, handleDragStart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column, notAllowedColumns: [] })}
        onClick={handleCardClick}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
        <div className="flex gap-2 mt-2">
          {attributes && attributes.map((attr, index) => (
            <Attribute key={index} value={attr} />
          ))}
        </div>
      </motion.div>
      {isModalOpen && (
        <CardModal
          card={{ title, history }}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Card;
