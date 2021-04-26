class FTPClient {
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
				downloadName = './' + process.env.DOWNLOAD_DIR + '/' + fileName.replace('.csv', '-' + Date.now() + '.csv');
			else 
				downloadName = './' + process.env.DOWNLOAD_DIR + '/' + fileName;
			
			await client.downloadTo(downloadName, fileName);
			return downloadName;
		}
		catch(err) {
			console.log(err);
		}
		client.close();
	}
}

module.exports = FTPClient;
