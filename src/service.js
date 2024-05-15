let status = "idle";
let history = [];

const runService = () => {
  status = "running";
  const startTime = new Date();

  // Simulate some work
  setTimeout(() => {
    const endTime = new Date();
    const status = Math.random() > 0.1 ? "Success" : "Failed";
    history.push({ startTime, endTime, status });
    if (history.length > 25) history.shift();
    status = "idle";
  }, 2000);
};

const getStatus = () => {
  return { status };
};

const getHistory = () => {
  return history;
};

module.exports = { runService, getStatus, getHistory };
