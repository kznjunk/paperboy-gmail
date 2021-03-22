module.exports = function paperboyGmail(config) {
    if (!config || !isConfigValid(config)) throw new Error('Gmail service requires a valid config..')

    const nodemailer = require('nodemailer')
    const { google } = require('googleapis')
    const { clientId, clientSecret, refreshToken } = config
    const OAuth2 = google.auth.OAuth2
    const OAuth2Client = new OAuth2(clientId, clientSecret)

    OAuth2Client.setCredentials({
        refresh_token: refreshToken
    })

    return { sendEmail }

    async function sendEmail(from, to, subject, html) {
        if (!from || !to || !subject || !html) throw new Error('Missing at least one required param..')

        const transporter = getTransporter(from)

        if (transporter) {
            try {
                return await transporter.sendMail({ from, to, subject, html })
            } catch (e) {
                return e
            }
        } else {
            throw new Error('Can\'t create the transporter..')
        }
    }

    function getTransporter(user) {
        return nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user,
                clientId,
                clientSecret,
                refreshToken,
                accessToken: OAuth2Client.getAccessToken()
            }
        })
    }

    function isConfigValid(config) {
        const { clientId, clientSecret, refreshToken } = config
        return clientId && clientSecret && refreshToken
    }
}
