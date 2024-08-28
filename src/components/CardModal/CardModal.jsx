import React from "react";
import ReactDOM from "react-dom";
import { FiX } from "react-icons/fi";

const CardModal = ({ card, onClose }) => {
  if (!card) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative bg-neutral-800 p-4 rounded-lg max-w-sm w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-50"
        >
          <FiX size={20} />
        </button>
        <h3 className="text-lg font-semibold text-neutral-100">{card.title}</h3>
        <div className="mt-4">
          <h4 className="text-xs font-semibold text-neutral-400">History</h4>
          <ul className="list-disc pl-4 text-xs text-neutral-300">
            {console.log(card.history)}
            {
            card.history.map((entry, index) => (
              <li key={index}>{`Moved from ${entry.movedFrom} to ${entry.movedTo} on ${new Date(entry.timestamp).toLocaleString()}`}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CardModal;
