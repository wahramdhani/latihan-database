const express = require('express');
const router = express.Router();

const biodata = require('../controllers/biodataController')

router.get('/allbiodata', biodata.allBiodata)
router.post('/biodata', biodata.createBiodata)
router.delete('/biodata/:id', biodata.deleteBiodata)
router.post('/biodata/:id', biodata.restoreBiodata)
router.put('/biodata/:id', biodata.updateBiodata)

module.exports = router