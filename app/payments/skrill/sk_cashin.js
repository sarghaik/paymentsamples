const config = require('../config')
    , https = require('https');

module.exports = {
	request (pay_to_email, amount, currency, status_url){

        return new Promise((resolve, reject) => {
            if(!(pay_to_email && amount && currency)) reject(new Error("invalid params"));

            let post_data = {
                'prepare_only': 1,
                'pay_to_email': pay_to_email,
                'amount': amount,
                'currency': currency
            }
            
            if(status_url) post_data.status_url = status_url;
        
            let post_options = {
                host: 'https://pay.skrill.com',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept-Language': 'en-US,en;q=0.5'
                }
            };
        
            let post_req = https.request(post_options, function(res) {
                res.setEncoding('utf8');
                res.on('data', (res) =>{
                    resolve(res);
                });
            });
        });
    }
};