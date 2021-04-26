class Product {
	constructor() {
		this.code = null;
		this.description = null;
		this.extendedDescription = null;
		this.webItem = null;
	}

	fill(newFields) {
		for(var field in this) {
			if(this[field] !== undefined && newFields[field] !== undefined) {
				// clean data
				if(field === 'extendedDescription')
					newFields[field] = newFields[field].replace('~', '');

				this[field] = newFields[field];
			}
		}
	}
}

module.exports = Product;
