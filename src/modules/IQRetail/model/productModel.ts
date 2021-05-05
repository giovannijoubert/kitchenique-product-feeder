export default class Product {
  public code: string;
  public description: string;
  public barcode: string;
  public sellPrice1: number;
  public sellPrice4: number;
  public onHand: number;
  public salesOrder: number;
  public model: string;

  constructor() {
    this.code = null;
    this.description = null;
    this.barcode = null;
    this.sellPrice1 = null;
    this.sellPrice4 = null;
    this.onHand = null;
    this.salesOrder = null;
    this.model = null;
  }

  fill(newFields): void {
    for (const field in newFields) {
      if (this[field] !== undefined) {
        // force onHand (stock) to be 0 or more
        if(field === 'onHand' && newFields[field] < 0)
          this[field] = 0;
        else
          this[field] = newFields[field];
      }
    }
  }
}
