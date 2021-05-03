import fs from 'fs';
import process from 'process';

export default class FTPClient {
    public ftpHost: string;
    protected ftpUser: string;
    protected ftpPass: string;
    
	constructor() {
		this.ftpHost = process.env.IQ_FTP_HOST;
		this.ftpUser = process.env.IQ_FTP_USER;
		this.ftpPass = process.env.IQ_FTP_PASS;
	}

	async download(fileName, timestamped = true) {
		const ftp = require('basic-ftp');
		const client = new ftp.Client();

		try {
			await client.access({
				host: this.ftpHost,
				user: this.ftpUser,
				password: this.ftpPass,
			});
			var downloadName;

			if(timestamped)
				downloadName = '/tmp/' + fileName.replace('.csv', '-' + Date.now() + '.csv');
			else 
				downloadName = '/tmp/' + fileName;
			
			await client.downloadTo(downloadName, fileName);

			return downloadName;
		}
		catch(err) {
			console.log(err);
		}
		client.close();
	}
}