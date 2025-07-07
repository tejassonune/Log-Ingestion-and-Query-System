import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import LogList from './components/LogList';
import { fetchLogs } from './services/api';

function App() {
  const [logs, setLogs] = useState([]);

  const getLogs = async (filters = {}) => {
    const data = await fetchLogs(filters);
    setLogs(data);
  };

  useEffect(() => {
    getLogs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Log Viewer Dashboard</h1>
      <FilterBar onFilter={getLogs} />
      <LogList logs={logs} />
    </div>
  );
}

export default App;