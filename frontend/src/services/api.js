import axios from 'axios';
const API_BASE = 'http://localhost:5000/logs';

export const fetchLogs = async (params = {}) => {
  const res = await axios.get(API_BASE, { params });
  return res.data;
};

export const sendLog = async (logData) => {
  const res = await axios.post(API_BASE, logData);
  return res.data;
};