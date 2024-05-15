let status = "idle";
let history = [];

const runService = () => {
  status = "running";
  const startTime = new Date();

  // Simulate some work
  setTimeout(() => {
    const endTime = new Date();
    history.push({ startTime, endTime, status: "completed" });
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
