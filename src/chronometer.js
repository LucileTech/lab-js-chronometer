class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }
  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        return printTimeCallback();
      }
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    if (this.currentTime > 60) {
      return Math.floor(this.currentTime % 60);
    } else {
      return this.currentTime;
    }
  }

  computeTwoDigitNumber(value) {
    return `0${value}`.slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    console.log(
      `${this.computeTwoDigitNumber(
        this.getMinutes()
      )}:${this.computeTwoDigitNumber(this.getSeconds())}`
    );
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
