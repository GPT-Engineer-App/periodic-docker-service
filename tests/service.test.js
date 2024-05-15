const { runService, getStatus, getHistory } = require("../src/service");

describe("Service Tests", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("should run service and update status and history", () => {
    runService();
    expect(getStatus().status).toBe("running");

    jest.advanceTimersByTime(2000);
    expect(getStatus().status).toBe("idle");
    expect(getHistory().length).toBe(1);
    expect(getHistory()[0].status).toBe("completed");
  });
});
