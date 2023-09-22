class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId;
  }
  addClock(time) {
    if (this.alarmCollection.includes(time) === true) {
      console.warn("Уже присутствует звонок на это же время");
    } else {
      this.alarmCollection.push(time);
    }
  }
  getCurrentFormattedTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    return `Текущее время: ${hours}:${minutes}`;
  }

  removeClock(time) {
    // this.alarmCollection.filter((clock) => clock !== time);
    let index = this.alarmCollection.indexOf(time);
    if (index !== -1) {
      this.alarmCollection.splice(index, 1);
    }
    return this;
  }

  clearAlarms() {
    this.alarmCollection = [];
    return this.alarmCollection;
  }
}

// addClock(time) {
//     // if (hours > 23 || minutes > 59 || ((minutes || hours) < 0)) {
//     //   console.log("не то");
//     // } else {
//       this.alarmCollection.push(time);
//     // }
//   }
