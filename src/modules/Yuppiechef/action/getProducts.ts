import FTPClient from "../../FTPClient/service/ftpClientService";
import IQRetail from "../../IQRetail/service/IQRetailService";
import Yuppiechef from "../service/YuppiechefService";

export default function getProducts(req, res): void {
  let ftp = new FTPClient();
  let iq = new IQRetail();
  let yuppie = new Yuppiechef();

  // download the latest stock file
  ftp.download("whlive.csv").then((csvFilePath) => {
    // parse each stock item and convert to a Product
    iq.parseStockFile(csvFilePath).then((products) => {
      let yuppieProducts = yuppie.convertProducts(products);
      res.header("Content-Type", "text/csv");
      res.attachment("yuppiechef-" + Date.now() + ".csv");
      res.send(yuppieProducts);
    });
  });
}
