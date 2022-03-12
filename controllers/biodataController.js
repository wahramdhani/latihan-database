const { user } = require('pg/lib/defaults');

const Biodata = require('../models').biodataPlayer;

module.exports = {
    allBiodata(req, res) {
        return Biodata.findAll()
        .then(data => {
            res.status(200).json({
                status: 'success',
                data: {
                    biodata: data
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
    async createBiodata(req, res) {
        try {
            const biodata = await Biodata.create({
                email: req.body.email,
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                password: req.body.password,
                address: req.body.address
            })
        return res.status(200).json({
            status: 'success',
            data: {
                biodata: biodata
            }
        })
        } catch (error) {
            return res.status(400).json({
                status: 'failed',
                errors: [error.message]
            })
        }
    },
    async deleteBiodata(req, res) {
        try {
            const biodata = await Biodata.findOne({
                where: {
                    id: req.params.id
                }
            })
        if(!biodata){
            return res.status(400).json({
                status: 'failed',
                message: `biodata id ${req.params.id} not found`
            })
        } else {
            await Biodata.destroy({
                where: {
                    id: biodata.id
                },
                individualHooks: true,
            })
            return res.status(200).json({
                status: 'success',
                message: 'biodata id deleted'
            })
        }
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: 'error'
            })
        }
    },
    async restoreBiodata(req, res) {
        try {
            await Biodata.restore({
                where: {
                    id: req.params.id
                },
                individualHooks: true,
            })
            return res.status(200).json({
                status: 'success',
                message: `biodata id: ${req.params.id} has been restore`
            })
        } catch (error) {
            return res.status(500).json({
                status: 'failed',
                message: 'error'
            })
        }
    },
    async updateBiodata(req, res) {
            const userId = req.params.id
            const {email, password, firstName, lastName, address} = req.body
        return await Biodata.update(
            {
                email, password
            },
            {
            where: {
                id: userId
            }
            })
            .then((data => {
                Biodata.update({
                    firstName, lastName, address
                },
                    {where: {
                        userId: userId
                    }
                })
                res.status(200).json({
                    status: 'success',
                    data: {
                        biodata: data
                    }
                })
            }))
            .catch(error => {
                res.status(400).json({
                    status: 'failed',
                    error: [error.message]
                })
            })
    }
}
