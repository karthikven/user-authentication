import React, { useState } from 'react';
import Select from 'react-select';
import MetricsCard from './../metrics-card/MetricsCard';
import './MetricsList.css'

const MetricsList = ({metrics}) => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);

  const handleChange = (selectedOptions) => {
    setSelectedMetrics(selectedOptions);
  };

  return (
    <div className="create-card-metrics-list">
      <Select options={metrics} isMulti onChange={handleChange} />
      {selectedMetrics.map((metric) => (
        <MetricsCard
          key={metric.value}
          name={metric.label}
          definition={metric.definition}
          range={metric.range}
        />
      ))}
    </div>
  );
};

export default MetricsList;
