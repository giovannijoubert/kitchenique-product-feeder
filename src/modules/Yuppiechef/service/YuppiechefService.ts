import { Parser } from "json2csv";
export default class Yuppiechef {
  constructor() {}

  getProductDataFile(products) {
    let selectedProducts = products.filter(i => i.incoterms === 'YUPPIECHEFTRUE');
    // Yuppiechef wants ' prepended to the stock code
    selectedProducts.forEach((product) => {
        product.code = "'" + product.code;

        // currently Yuppieshef stock should reflect: onHand - SalesOrders - 3
        product.yuppieStockQty = product.onHand - product.salesOrder - 3;
    });
    // field mapping
    const fields = [
      {
        label: "Code",
        value: "code",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Stock Qty",
        value: "yuppieStockQty",
      },
      {
        label: "ETA (Future date in format: DD/MM/YYYY)",
        value: "",
      },
      {
        label: "No ETA Reason",
        value: "",
      },
      {
        label: "Yuppiechef Comments",
        value: "",
      },
    ];

    // convert JSON to CSV
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(selectedProducts);

    return csv;
  }

  getProductPriceFile(products) {


    let selectedProducts = products.filter(i =>  i.incoterms === 'YUPPIECHEFTRUE');
    // Yuppiechef wants ' prepended to the stock code
    selectedProducts.forEach((product) => {
        product.code = "'" + product.code;
    });

    // field mapping
    const fields = [
      {
        label: "Code",
        value: "code",
      },
      {
        label: "Description",
        value: "description",
      },
      {
        label: "Price",
        value: "sellPrice4",
      },
      {
        label: "Cost Price",
        value: "",
      },
    ];

    // convert JSON to CSV
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(selectedProducts);

    return csv;
  }
}
