const dwolla = require('dwolla-v2')
	, config = require('../config');

module.exports = {
	request (fundingsourceid){

		return new Promise((resolve, reject)=>{
			const client = new dwolla.Client({id: config.DWOLLA_ID, 
				secret: config.DWOLLA_SECRET,
				environment: config.DWOLLA_ENV,
			});

			client.auth.client()
			.then((appToken) =>{
				let fundingSourceUrl = "https://api-uat.dwolla.com/funding-sources/" + req.body.fundingsourceid;
				appToken
				.get(`${fundingSourceUrl}/micro-deposits`)
				.then((result) => { 
					resolve( result.body.status);
				}); // => 'https://api-uat.dwolla.com/customers/FC451A7A-AE30-4404-AB95-E3553FCD733F'

			})
			.then((result) => {
				// res.send(JSON.stringify(res.body));
			});
		});

	}
};