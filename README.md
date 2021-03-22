# Paperboy Gmail

## How?

```js
const gmailConfig = {
    clientId: EMAIL_CLIENTID,
    clientSecret: EMAIL_CLIENTSECRET,
    refreshToken: EMAIL_REFRESHTOKEN
}

const { sendGmail } = require('./paparboy-email')(gmailConfig)

const fromEmail = 'no-reply@example.com'
const toEmail = 'user@example.com'
const title = 'Hello..'
const body = '..there!'

const res = await sendGmail(fromEmail, toEmail, title, body)
// res:
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
