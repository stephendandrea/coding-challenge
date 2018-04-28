export default class CommitActivityWeek extends Object {
  constructor (initialValue = {}) {
    super();
    this.days = initialValue.days || Array(7).fill(0);
    this.total = initialValue.total || 0;
    this.week = initialValue.week || ((new Date()).getTime() / 1000) >> 0;
  }
}