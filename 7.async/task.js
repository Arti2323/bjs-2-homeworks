class AlarmClock {

  #timerId = null;

  #alarms = new Map();



  addClock(time, callback, id) {

    if (!time || !callback) {

      throw new Error('Отсутствуют обязательные аргументы');

    }



    if (this.#alarms.has(id)) {

      console.warn(`Звонок с идентификатором ${id} уже существует`);

      return;

    }



    this.#alarms.set(id, { time, callback, canCall: true });

  }



  removeClock(id) {

    return this.#alarms.delete(id);

  }



  getCurrentFormattedTime() {

    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');

    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;

  }



  start() {

    if (this.#timerId) {

      return;

    }



    this.#timerId = setInterval(() => {

      const currentTime = this.getCurrentFormattedTime();

      for (const [id, alarm] of this.#alarms.entries()) {

        if (alarm.time === currentTime && alarm.canCall) {

          alarm.canCall = false;

          alarm.callback();

          this.removeClock(id);

        }

      }

    }, 1000);

  }



  stop() {

    clearInterval(this.#timerId);

    this.#timerId = null;

  }



  resetAllCalls() {

    for (const alarm of this.#alarms.values()) {

      alarm.canCall = true;

    }

  }



  clearAlarms() {

    this.stop();

    this.#alarms.clear();

  }

}


