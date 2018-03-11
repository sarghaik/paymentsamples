const dwolla = require('dwolla-v2')
	, config = require('../config');

module.exports = {
	request (fundingsourceurl){
		return new Promise((resolve, reject)=>{
			const client = new dwolla.Client({id: config.DWOLLA_ID, 
				secret: config.DWOLLA_SECRET,
				environment: config.DWOLLA_ENV,
			});

			client.auth.client()
			.then((appToken) => {
				let requestBody = {
					removed: true
				};
				appToken
					.get(fundingsourceurl)
					.then((result)=>{ 
						// console.log(result.headers.get('location'));
						resolve(result.body);
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