const fs = require('fs');
const path = './db/logs.json';

const readLogs = () => {
  if (!fs.existsSync(path)) return [];
  const data = fs.readFileSync(path, 'utf-8');
  return JSON.parse(data || '[]');
};

const writeLogs = (logs) => {
  fs.writeFileSync(path, JSON.stringify(logs, null, 2));
};

module.exports = { readLogs, writeLogs };
