const express = require('express');
const router = express.Router();

const superAdmin = require('../controllers/superAdminController')

router.get('/superadmin', superAdmin.admin)
router.post('/superadmin', superAdmin.CreateSuperAdmin)
router.delete('/superadmin/:id', superAdmin.deleteAdmin)
router.post('/login', superAdmin.login)

module.exports = router