const config = require('../config')
    , https = require('https');

module.exports = {
	request (action, email, password, amount, currency, bnf_email, subject, note){

        return new Promise((resolve, reject)=>{
            if(!(action && email && password && amount && currency && bnf_email && subject && note)) 
                reject(new Error("invalid params"));

            
            let post_data = {
                'action':action, 
                'email':email, 
                'password':password,
                'amount':amount,
                'currency':currency,
                'bnf_email':bnf_email,
                'subject':subject,
                'note':note
            }
        
            let post_options = {
                host: 'https://www.skrill.com/app/pay.pl',
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