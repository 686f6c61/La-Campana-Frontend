import React from "react";

const ReusableTable = ({ headers = [], data = [] }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full border border-gray-300 text-sm text-gray-700 font-montserrat">
        <thead className="bg-white border-b border-gray-300">
          <tr className="text-center uppercase font-semibold text-lacampana-gray1">
            {headers.map((header, index) => (
              <th
                key={index}
                className={`px-4 py-2 ${
                  index !== headers.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="text-center border-b border-gray-200">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`px-4 py-2 ${
                    cellIndex !== row.length - 1
                      ? "border-r border-gray-200"
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReusableTable;
