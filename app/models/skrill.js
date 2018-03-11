const sk_cashin = require('../payments/skrill/sk_cashin')
    , sk_cashoutprepare = require('../payments/skrill/sk_cashoutprepare')
    , sk_cashouttransfer = require('../payments/skrill/sk_cashouttransfer');

module.exports = {
	cashin = function(pay_to_email, amount, currency, status_url) {
		sk_cashin.request(pay_to_email, amount, currency, status_url);
	},

	cashoutprepare = function(action, email, password, amount, currency, bnf_email, subject, note) {
		sk_cashoutprepare.request(action, email, password, amount, currency, bnf_email, subject, note);
    },
    
    cashouttransfer = function(action, sid) {
		sk_cashouttransfer.request(action, sid);
	}
};
