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
			.then((appToken) => {
				let fundingSourceUrl = "https://api-uat.dwolla.com/funding-sources/" + fundingsourceid;

				appToken
				.post(`${fundingSourceUrl}/micro-deposits`)
				.then((result) => { 
					resolve( result.headers.get('location'));
				}); // => 'https://api-uat.dwolla.com/customers/FC451A7A-AE30-4404-AB95-E3553FCD733F'

					// return appToken.get('webhook-subscriptions');
			})
			.then((result) => {
				// res.send(JSON.stringify(res.body));
			});
		});
	}
};