import React from "react";

const SectionHeader = ({ sectionHeader }) => {
  return (
    <div className="py-3 text-center">
      <h1 className=" underline text-lg font-bold text-blue-600">
        {sectionHeader}
      </h1>
    </div>
  );
};

export default SectionHeader;
