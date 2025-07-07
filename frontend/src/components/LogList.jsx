import React from 'react';

const levelColor = {
  error: 'border-red-500 bg-red-50',
  warn: 'border-yellow-500 bg-yellow-50',
  info: 'border-blue-500 bg-blue-50',
  debug: 'border-gray-300 bg-gray-100',
};

const LogList = ({ logs }) => (
  <div className="space-y-3">
    {logs.map((log, idx) => (
      <div key={idx} className={`p-4 border-l-4 rounded shadow ${levelColor[log.level] || 'border-gray-300'}`}>
        <div className="flex justify-between">
          <div className="text-sm font-semibold">{log.level.toUpperCase()}</div>
          <div className="text-xs text-gray-500">{new Date(log.timestamp).toLocaleString()}</div>
        </div>
        <div className="mt-1 text-sm">{log.message}</div>
        <div className="mt-1 text-xs text-gray-500">Resource: {log.resourceId} | Commit: {log.commit}</div>
      </div>
    ))}
  </div>
);

export default LogList;