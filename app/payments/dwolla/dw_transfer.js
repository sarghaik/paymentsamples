const dwolla = require('dwolla-v2')
	, config = require('../config');

module.exports = {
	request (sourcelink, destinationlink, amountcurrency, amountvalue, plaid){

		return new Promise((resolve, reject)=>{
			if(!plaid) reject(new Error("plaid undefined"));//need to define error type

			plaid.balance(null, null, institution, secquestion, secanswer)
				.then((result)=>{

				if(!result && result.balance.currentvalue<=amountvalue) reject(new Error("insufficient funds"));//need to specify error type
				
				const client = new dwolla.Client({id: config.DWOLLA_ID, 
					secret: config.DWOLLA_SECRET,
					environment: config.DWOLLA_ENV,
				});

				client.auth.client()
				.then((appToken) => {
						// var customerurl = customerurl;//'https://api-uat.dwolla.com/customers/2149eb5b-7521-4150-9f52-01aa1c822601';
					let requestBody = {
						_links: {
							source: {
								href: sourcelink//'https://api-uat.dwolla.com/funding-sources/1fdd4256-7bfc-4abb-99ff-4a1ff519cea8'
							},
							destination: {
								href: destinationlink//'https://api-uat.dwolla.com/customers/b302667c-d04f-4857-b8c2-011d574008e8'
							}
						},	
						amount: {
							currency: amountcurrency,//'USD',
							value: amountvalue//'1.00'
						},
						metadata: {
							paymentId: '12345678',
							note: 'payment for completed work Dec. 1'
						},
						clearing: {
							destination: 'next-available'
						}
					};
					appToken
					.post('transfers', requestBody)
					.then((result) => {
							})// => 'https://api.dwolla.com/transfers/74c9129b-d14a-e511-80da-0aa34a9b2388'
					.catch((result) => {
						resolve(result.body._embedded.errors[0].message);
					}); 


				})
				.then((result) => {
						// console.log(JSON.stringify(res.body));
						// res.send(JSON.stringify(result.body));
					});

			});	
		});	
	}
};
