import { Parser } from "json2csv";
export default class Yuppiechef {
  constructor() {}

  convertProducts(products) {
    const fields = [
      {
        label: "fish",
        value: "code",
      },
      {
        label: "desc",
        value: "description",
      },
    ];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(products);

    return csv;
  }
}
