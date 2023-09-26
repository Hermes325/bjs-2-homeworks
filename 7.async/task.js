class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (callback == undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    } else if (
      this.alarmCollection.some(
        (elem) => elem.time === time && elem.callback == callback
      )
    ) {
      console.warn("Уже присутствует звонок на это же время");
    } else {
      this.alarmCollection.push({ time, callback, canCall: true });
    }
  }
  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId != null) {
      clearInterval(this.intervalId);
    } else {
      function shafle() {
        // if (
        //   this.alarmCollection.forEach(
        //     (elem) => elem.time == this.getCurrentFormattedTime()
        //   )
        // ) {
        //   this.alarmCollection.forEach((on) => (on.canCall = false));
        //   return this.alarmCollection.callback();
        // }
      }
      setInterval(shafle, 1000);
    }
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (clock) => clock.time != time
    );
  }

  clearAlarms() {
    this.alarmCollection = [];
  }

  resetAllCalls() {
    this.alarmCollection.forEach((off) => (off.canCall = true));
  }
}
