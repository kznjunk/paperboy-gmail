# Paperboy Gmail

## How?

```js
require('dotenv').config()

const gmailConfig = {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    refreshToken: process.env.refreshToken
}

const { sendGmail } = require('@kznjunk/paperboy-email')(gmailConfig)

const fromEmail = 'no-reply@example.com'
const toEmail = 'user@example.com'
const title = 'Hello..'
const body = '..there!'

const res = await sendGmail(fromEmail, toEmail, title, body)
console.log(res)
// {
//   accepted: [ 'user@example.com' ],
//   rejected: [],
//   envelopeTime: 192,
//   messageTime: 470,
//   messageSize: 352,
//   response: '250 2.0.0 OK  16164...29 - gsmtp',
//   envelope: { from: 'no-reply@example.com', to: [ 'user@example.com' ] },
//   messageId: '<68...2b4@gmail.com>'
// }
```

## Note

- The config should be available over there: https://console.cloud.google.com/apis/credentials/oauthclient/{{appId}}?project={{projectName}}
- URI is `https://developers.google.com/oauthplayground`
- About the refresh token: https://developers.google.com/oauthplayground/ (cf. https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one)
