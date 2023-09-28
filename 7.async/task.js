class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (callback == undefined || time == undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (this.alarmCollection.some((elem) => elem.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({ time, callback, canCall: true });
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId != null) {
      return;
    }
    setInterval(
      () =>
        this.alarmCollection.forEach((elem) => {
          if (elem.time === this.getCurrentFormattedTime() && elem.canCall) {
            elem.canCall = false;
            elem.callback();
          }
        }),
      1000
    );
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  removeClock(time) {
    stop();
    this.alarmCollection = this.alarmCollection.filter(
      (clock) => clock.time != time
    );
  }

  clearAlarms() {
    this.alarmCollection = [];
  }

  resetAllCalls() {
    this.alarmCollection.forEach((turnOff) => (turnOff.canCall = true));
  }
}
