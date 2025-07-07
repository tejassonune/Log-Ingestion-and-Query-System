import React, { useState } from 'react';

const FilterBar = ({ onFilter }) => {
  const [filters, setFilters] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filters, [name]: value };
    setFilters(updated);
    onFilter(updated);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <input name="message" className="input" placeholder="Search Message" onChange={handleChange} />
      <select name="level" className="input" onChange={handleChange}>
        <option value="">All Levels</option>
        <option value="error">Error</option>
        <option value="warn">Warn</option>
        <option value="info">Info</option>
        <option value="debug">Debug</option>
      </select>
      <input name="resourceId" className="input" placeholder="Resource ID" onChange={handleChange} />
      <input type="datetime-local" name="timestamp_start" className="input" onChange={handleChange} />
      <input type="datetime-local" name="timestamp_end" className="input" onChange={handleChange} />
    </div>
  );
};

export default FilterBar;
