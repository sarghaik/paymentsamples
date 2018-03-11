const dw_usercreate = require('../payments/dwolla/dw_usercreate')
	, dw_fundingsourcecreate = require('../payments/dwolla/dw_fundingsourcecreate')
	, dw_fundingsourcesget = require('../payments/dwolla/dw_fundingsourcesget')
	, dw_fundingsourcedetails = require('../payments/dwolla/dw_fundingsourcedetails')
	, dw_fundingsourceremove = require('../payments/dwolla/dw_fundingsourceremove')
	, dw_transfer = require('../payments/dwolla/dw_transfer')
	, dw_microdepositsinitiate = require('../payments/dwolla/dw_microdepositsinitiate')
	, dw_microdepositsverify = require('../payments/dwolla/dw_microdepositsverify')
	, dw_microdepositsstatus = require('../payments/dwolla/dw_microdepositsstatus')
	, plaid = require('./plaid');

module.exports = {

	usercreate = function(firstname, lastname, email, address1, city, state, postalcode, dateofbirth, ssn) {
		dw_usercreate.request(firstname, lastname, email, address1, city, state, postalcode, dateofbirth, ssn);
	},

	fundingsourcecreate = function(customerid, routingnumber, accountnumber, type, name) {
		dw_fundingsourcecreate.request(customerid, routingnumber, accountnumber, type, name);
	},

	fundingsourcesget = function(customerid) {
		dw_fundingsourcesget.request(customerid);
	},

	fundingsourcedetails = function(fundingsourceurl) {
		dw_fundingsourcedetails.request(fundingsourceurl);
	},

	fundingsourceremove = function(fundingsourceurl) {
		dw_fundingsourceremove.request(fundingsourceurl);
	},

	transfer = function(sourcelink, destinationlink, amountcurrency, amountvalue) {
		dw_transfer.request(sourcelink, destinationlink, amountcurrency, amountvalue, plaid);
	},

	microdepositsinitiate = function(fundingsourceid) {
		dw_microdepositsinitiate.request(fundingsourceid);
	},

	microdepositsverify = function(fundingsourceid, amount1, amount2) {
		dw_microdepositsverify.request(fundingsourceid, amount1, amount2);
	},

	microdepositsstatus = function(fundingsourceid) {
		dw_microdepositsstatus.request(fundingsourceid);
	}
};
