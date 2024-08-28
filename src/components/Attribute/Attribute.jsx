import React from "react";

const Attribute = ({value }) => {
  return (
    <div className="flex flex-wrap gap-1 mt-2">
     
        <span className="px-2 py-1 bg-purple-700 text-gray-300 rounded text-xs">
          {value}
        </span>
   
    </div>
  );
};

export default Attribute;
