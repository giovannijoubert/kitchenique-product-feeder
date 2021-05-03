export default class Product {
  public code: string;
  public description: string;
  public extendedDescription: string;
  public webItem: boolean;

  constructor() {
    this.code = null;
    this.description = null;
    this.extendedDescription = null;
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
