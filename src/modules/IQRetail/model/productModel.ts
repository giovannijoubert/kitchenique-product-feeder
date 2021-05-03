export default class Product {
  public code: string;
  public description: string;
  public sellPrice1: number;
  public sellPrice3: number;
  public onHand: number;
  public webItem: boolean;

  constructor() {
    this.code = null;
    this.description = null;
    this.sellPrice1 = null;
    this.sellPrice3 = null;
    this.onHand = null;
    this.webItem = null;
  }

  fill(newFields): void {
    for (const field in newFields) {
      if (this[field] !== undefined) {
        this[field] = newFields[field];
      }
    }
  }
}
