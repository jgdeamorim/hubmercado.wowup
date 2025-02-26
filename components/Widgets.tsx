import React from 'react';

interface WidgetProps {
  title: string;
  value: number | string;
}

const Widgets: React.FC<WidgetProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default React.memo(Widgets);
