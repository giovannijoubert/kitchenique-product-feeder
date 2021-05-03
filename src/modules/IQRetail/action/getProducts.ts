import FTPClient from '../../FTPClient/service/ftpClientService';
import IQRetail from '../service/IQRetailService';

export default function getProducts(req, res): void {
    let ftp = new FTPClient();
    let iq = new IQRetail();

    // download the latest stock file
    ftp.download('whlive.csv').then(fileName => {
        // parse each stock item and convert to a Product
        iq.parseStockFile(fileName).then(products => {
            res.send(products);
        });
    }); 

}