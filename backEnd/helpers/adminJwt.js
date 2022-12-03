const jwt = require('jsonwebtoken')

exports.generateToken = (payload, expired) => {
    return jwt.sign(payload, process.env.ADMIN_TOKEN_SECRET, {
        expiresIn: expired,
    });
};