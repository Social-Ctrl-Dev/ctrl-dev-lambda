exports.handler = (event, context, callback) => {
    const {name, phone, code} = JSON.parse(event.body);
   
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;

    const client = require('twilio')(accountSid, authToken);

    client.messages.create({
        body: `Hello ${name}, your verification code is ${code}`,
        to: `${phone}`,
        from: '+15618235278'
    })
        .then((message) => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: message.sid
                })
            });
        })
        .catch((e) => {
            callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    error: e.message
                })
            });
        });
};
