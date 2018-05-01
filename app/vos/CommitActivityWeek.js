export default class CommitActivityWeek {
  constructor (initialValue = {}) {
    this.days = initialValue.days || Array(7).fill(0);
    this.total = initialValue.total || 0;
    this.week = initialValue.week || ((new Date()).getTime() / 1000) >> 0;
  }
}
