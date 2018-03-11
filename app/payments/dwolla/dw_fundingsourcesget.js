const dwolla = require('dwolla-v2')
	, config = require('../config');

module.exports = {
	request (customerid){
		return new Promise((resolve, reject)=>{
			const client = new dwolla.Client({id: config.DWOLLA_ID, 
				secret: config.DWOLLA_SECRET,
				environment: config.DWOLLA_ENV,
			});

			let customerurl = "https://api-uat.dwolla.com/customers/" + customerid;
			client.auth.client()
			.then((appToken) => {
				//'https://api-uat.dwolla.com/customers/2149eb5b-7521-4150-9f52-01aa1c822601';
				appToken
				.get(`${customerurl}/funding-sources`)
				.then((result) => { 
					resolve(result.body._embedded['funding-sources']);
					//example of correct request
					//http://localhost:8081/dwollacreatefundingsource?customerid=2149eb5b-7521-4150-9f52-01aa1c822601&routingnumber=122235821&accountnumber=157506310695&type=checking&name=us
				});
			})
			.then((result) => {
				// console.log(JSON.stringify(res.body));
				// res.send(JSON.stringify(res.body));
			});
		});

	}
};