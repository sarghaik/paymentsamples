const pl_institutions = require('../payments/plaid/pl_institutions')
	, pl_balance = require('../payments/plaid/pl_balance');

module.exports = {
	institutions = function(offset, limit) {
		pl_institutions.request(offset, limit);
	},

	balance = function(username, password, institution, secquestion, secanswer) {
		pl_balance.request(username, password, institution, secquestion, secanswer);
	}
};
