const { readLogs, writeLogs } = require('../utils/fileHandler');

// Validate log schema
const validateLog = (log) => {
  const required = [
    'level', 'message', 'resourceId', 'timestamp',
    'traceId', 'spanId', 'commit', 'metadata'
  ];
  return required.every(field => log.hasOwnProperty(field));
};

const ingestLog = (req, res) => {
  const newLog = req.body;

  if (!validateLog(newLog)) {
    return res.status(400).json({ error: 'Invalid log schema' });
  }

  try {
    const logs = readLogs();
    logs.push(newLog);
    writeLogs(logs);
    res.status(201).json(newLog);
  } catch (err) {
    res.status(500).json({ error: 'Error writing to logs' });
  }
};

const getLogs = (req, res) => {
  try {
    let logs = readLogs();
    const {
      level, message, resourceId,
      timestamp_start, timestamp_end,
      traceId, spanId, commit
    } = req.query;

    // Apply filters
    logs = logs.filter(log => {
      return (!level || log.level === level) &&
        (!message || log.message.toLowerCase().includes(message.toLowerCase())) &&
        (!resourceId || log.resourceId === resourceId) &&
        (!traceId || log.traceId === traceId) &&
        (!spanId || log.spanId === spanId) &&
        (!commit || log.commit === commit) &&
        (!timestamp_start || new Date(log.timestamp) >= new Date(timestamp_start)) &&
        (!timestamp_end || new Date(log.timestamp) <= new Date(timestamp_end));
    });

    logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Error reading logs' });
  }
};

module.exports = { ingestLog, getLogs };
