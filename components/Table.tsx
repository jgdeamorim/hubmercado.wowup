import React from 'react';

interface TableProps {
  data: Record<string, unknown>[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {Object.keys(data[0] || {}).map((key) => (
            <th key={key} className="border border-gray-300 p-2">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b hover:bg-gray-100">
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="p-3">{String(value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(Table);
