const User = require('../models/').superAdmin

module.exports = {
    admin(req, res) {
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
    },
    async CreateSuperAdmin(req, res) {
        try {
            const admin = await User.create({
                username: req.body.username,
                password: req.body.password
            });
        return res.status (200).json ({
            status: 'success',
            data: {
                admins: admin
            }
        })
        }
        catch (error) {
            res.status(400).json({
                status: 'failed',
                error: [err.message]
            })
        }
    },
    async deleteAdmin(req, res) {
        try {
            const admin = await User.findOne({
                where: {
                    id: req.params.id
                }
            })
        if(!admin) {
            return res.status(400).json({
                status: 'failed',
                message: `userId ${req.params} not found`
            })
        } else {
            await User.destroy({
                where: {
                    id: admin.id
                }
            })
            return res.status(200).json({
                status: 'success',
                message: 'delete admin succesful'
            })
        }
        } catch (error) {
            return res.status(400).json ({
                status: 'failed',
                message: 'error'
            })
        }
    },
    login(req, res) {
        User.findOne({
            where: {
                username: req.body.username,
            }
        })
        .then (users => {
            if(!users)
            return res.status(400).json({
                status: 'failed',
                errors: ["email doesn't exist"]
            
            })
            const passwordCorrect = (password = req.body.password)
            console.log(passwordCorrect);
            if(!passwordCorrect) {
                return res.status(400).json({
                    status: 'failed',
                    error: ["wrong password!"]
                })
            } else {
                res.status(200).json({
                    status: 'success'})
            }
        })
            .catch(err =>
                res.status(400).json({
                    status: 'failed',
                    error: [err.message]
                }))        
            }
}
