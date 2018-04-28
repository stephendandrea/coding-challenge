export default class CommitActivityWeek extends Object {
  constructor (initialValue = {}) {
    super();
    this.days = initialValue.days || Array(7).fill(0);
    this.total = initialValue.total || 0;
    this.week = initialValue.week || ((new Date()).getTime() / 1000) >> 0;
    this.commitDensity = this.days.map(
      commits => {
        switch (true) {
          case commits >= 25:
            return 5;
          case (commits < 25) && (commits >= 15):
            return 4;
          case (commits < 15) && (commits >= 5):
            return 3;
          case (commits < 5) && (commits >= 1):
            return 2;
          default:
            return 1;
        }
      }
    );
    console.log(this.commitDensity);
  }
}
