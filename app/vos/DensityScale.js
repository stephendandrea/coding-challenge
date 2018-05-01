export default class DensityScale {
  constructor (max) {
    this.lv5 = (max / 4 * 3) >> 0;
    this.lv4 = (max / 2) >> 0;
    this.lv3 = (max / 4 >> 0);
  }
}
