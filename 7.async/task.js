class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.warn('Уже присутствует звонок с таким id');
      return;
    }

    this.alarmCollection.push({ id, time, callback, canCall: true });
  }

  removeClock(id) {
    const index = this.alarmCollection.findIndex((alarm) => alarm.id === id);
    if (index === -1) {
      return false;
    }

    this.alarmCollection.splice(index, 1);
    return true;
  }

  getCurrentFormattedTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }

    const checkAlarms = () => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    };

    checkAlarms();
    this.intervalId = setInterval(checkAlarms, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}



const clock = new AlarmClock();

clock.addClock('08:00', () => console.log('Пора вставать'), 1);
clock.addClock('08:01', () => console.log('Давай, вставай уже!'), 2);
clock.addClock('08:01', () => console.log('Иди умываться'), 3);

clock.removeClock(2);

clock.start();

setTimeout(() => {
  clock.stop();
  clock.resetAllCalls();
  clock.clearAlarms();
}, 10000);

stop() {

    clearInterval(this.intervalId);

    this.intervalId = null;

  }

 

  resetAllCalls() {

    this.alarmCollection.forEach(alarm => alarm.canCall = true);

  }

 

  clearAlarms() {

    this.stop();

    this.alarmCollection = [];

  }

}

