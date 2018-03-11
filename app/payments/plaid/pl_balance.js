const plaid = require('plaid')
	, config = require('../config');

module.exports = {

	request (username, password, institution, secquestion, secanswer){
		return new Promise((resolve, reject)=>{ 
			const plaidClient = new plaid.Client(config.PLAID_ID, config.PLAID_SECRET, plaid.environments[config.PLAID_ENV]);

			plaidClient.addAuthUser(institution/*'bofa'*/, {
				username: username,//'plaid_test',
				password: password,//'plaid_good',
			}, (err, mfaResponse, response) => {
				if(err) reject(err);
				else if(!secanswer) resolve(mfaResponse);
				else return post_result(plaidClient, mfaResponse, response, username, password, secquestion, secanswer)
				.then(res=>resolve(res));
			});
		});
		
	},

	post_result (plaidClient, mfaResponse, response, username, password, secquestion, secanswer){
		
		return new Promise((resolve, reject)=>{ 
			plaidClient.stepAuthUser(mfaResponse.access_token, secanswer,//'tomato' 
				{}, (err, mfaRes, response) => {
					if(err) reject (err);
					else resolve(response);
				});
		});

	}

};