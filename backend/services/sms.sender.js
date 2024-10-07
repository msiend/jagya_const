// var unirest = require("unirest");

// var req = unirest("POST", "https://www.fast2sms.com/dev/bulkV2");

// req.headers({
//   "authorization": "YOUR_API_KEY"
// });

// req.form({
//   "variables_values": "5599",
//   "route": "otp",
//   "numbers": "9999999999,8888888888,7777777777",
// });

// req.end(function (res) {
//   if (res.error) throw new Error(res.error);

//   console.log(res.body);
// });


const unirest = require('unirest');

// Reusable function to send SMS
const sendSMS = (phoneNumbers, message) => {
    const apiKey = 'feqMJ06RDgimslKNHrY3ut2v9EkhB1AUVb8S7IcapwxnQj4WXoiadpov75M0R9swItQKPqfOJBnbcLX4'; // Replace with your Fast2SMS API key

    const req = unirest('POST', 'https://www.fast2sms.com/dev/bulkV2')
        .headers({
            'authorization': apiKey,
            'Content-Type': 'application/json',
        })
        .send(JSON.stringify({
            route: 'v3', // Select route based on your requirement (transactional/promotional)
            sender_id: 'TXTIND', // Sender ID based on Fast2SMS account setup
            message: message,
            language: 'english', // Use 'unicode' for non-English content
            numbers: '7779885160', // Comma-separated phone numbers
        }))
        .end((response) => {
            if (response.error) {
                console.error('Error while sending SMS:', response.error);
            } else if (response.body && response.body.return) {
                console.log('SMS sent successfully:', response.body);
            } else {
                console.log('Failed to send SMS:', response.body);
            }
        });
};



sendSMS('7770885160', 'Hi bro')

// module.exports = sendSMS;
