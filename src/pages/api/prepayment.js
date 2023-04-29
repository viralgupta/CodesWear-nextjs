import Product from '../../../models/Product'
import connectToMongo from '../../../middleware/db'
const PaytmChecksum = require('./PaytmChecksum');
const https = require('https');

const handler = async (req, res) => {
    if (req.methord == undefined) {
        var paytmParams = {};
        paytmParams.body = {
            "requestType": "Payment",
            "mid": process.env.PAYTM_MID,
            "websiteName": "CodesWear",
            "orderId": req.body.orderid,
            "callbackUrl": `${NEXT_PUBLIC_HOST}/api/postpayment`,
            "txnAmount": {
                "value": req.body.subTotal,
                "currency": "INR",
            },
            "userInfo": {
                "custId": req.body.email,
            },
        };






        PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MID).then(function (checksum) {

            paytmParams.head = {
                "signature": checksum
            };

            var post_data = JSON.stringify(paytmParams);

            var options = {

                /* for Staging */
                // hostname: 'securegw-stage.paytm.in',

                /* for Production */
                hostname: 'securegw.paytm.in',

                port: 443,
                path: `/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MID}&orderId=${req.body.orderId}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            var response = "";
            var post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    response += chunk;
                });

                post_res.on('end', function () {
                    console.log('Response: ', response);
                });
            });

            post_req.write(post_data);
            post_req.end();
        });










    }
    else {
        res.status(400).json({ error: 'This Methord does not exist' })
    }
}
export default connectToMongo(handler);


