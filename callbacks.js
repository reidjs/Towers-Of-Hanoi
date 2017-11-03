class Clock {
  constructor() {
    let now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  printTime() {
    let displayHours = this.hours;
    let displayMinutes = this.minutes;
    let displaySeconds = this.seconds;
    if (this.hours < 10) {
      displayHours = '0' + this.hours;
    }
    if (this.minutes < 10) {
      displayMinutes = '0' + this.minutes;
    }
    if (this.seconds < 10) {
      displaySeconds = '0' + this.seconds;
    }

    console.log(`${displayHours}:${displayMinutes}:${displaySeconds}`);
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds > 59) {
      this.minutes += 1;
      this.seconds = 0;
    }
    if (this.minutes > 59) {
      this.hours += 1;
      this.minutes = 0;
    }
    if (this.hours > 23) {
      this.hours = 0;
    }
    this.printTime();
  }
}
const clock = new Clock();
setInterval(function (){
  clock._tick();
}, 1000);
