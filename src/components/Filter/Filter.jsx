import React from "react";

const Filter = ({ attributes, onFilterChange }) => {
  return (
    <div className="flex items-center justify-center z-50">
      <div className="bg-neutral-800 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold text-white mb-4">Filter by Attribute</h2>
        <select
          className="w-full p-2 border border-neutral-700 bg-neutral-900 text-white rounded"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">Select an attribute...</option>
          {attributes.map((attr, index) => (
            <option key={index} value={attr}>
              {attr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
