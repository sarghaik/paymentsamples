const dwolla = require('dwolla-v2')
	, config = require('../config');

module.exports = {
	request (firstname, 
						lastname, 
						email,
						address1,
						city,
						state,
						postalcode,
						dateofbirth,
						ssn){
		
		return new Promise((resolve, reject)=>{

			const client = new dwolla.Client({id: config.DWOLLA_ID, 
				secret: config.DWOLLA_SECRET,
				environment: config.DWOLLA_ENV,
			});

			client.auth.client()
			.then((appToken) => {
				const requestBody = {
					firstName: firstname,//'John',
					lastName: lastname,//'Doe',
					email: email,//'jdoe@nomail.net',
					type: 'personal',
					address1: address1,//'99-99 33rd St',
					city: city,//'Some City',
					state: state,//'NY',
					postalCode: postalcode,//'11101',
					dateOfBirth: dateofbirth,//'1970-01-01',
					// For the first attempt, only the
					// last 4 digits of SSN required
					// If the entire SSN is provided,
					// it will still be accepted
					ssn: ssn//'1234'
				};

				appToken
				.post('customers', requestBody)
				.then((result) => {
					if(err) reject(err);
					resolve (result.headers.get('location'));
				}); // => 'https://api-uat.dwolla.com/customers/FC451A7A-AE30-4404-AB95-E3553FCD733F'

				// return appToken.get('webhook-subscriptions');
			})
			.then((result) => {
				// res.send(JSON.stringify(res.body));
			});
		});
	}
};