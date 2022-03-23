const History = require('../models').userHistory

module.exports = {
    history(req, res) {
        return User.findAll()
        .then(data => {
            res.status(200).json({
                status: 'success',
                data: {
                    admins: data
                }
            })
        })
        .catch(err => {
            res.status(400).json({
                status: 'failed',
                error: [err.message]
            })
        })
    }
}