
const plaid = require('plaid')
	, config = require('../config');
module.exports = {
	request (offset, limit){
		return new Promise((resolve, reject)=>{
			plaid.getInstitutions(plaid.environments[config.PLAID_ENV], (err, mfaResponse, response) =>{
				if(err) reject(err);
				else resolve(mfaResponse.slice(offset, offset + limit));
			});
		});
	}
};
