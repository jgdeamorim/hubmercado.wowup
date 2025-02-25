export default function Table({ headers, data }) {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b">
            {headers.map((header, index) => (
              <th key={index} className="p-3">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              {Object.values(row).map((value, idx) => (
                <td key={idx} className="p-3">{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
