/* eslint-disable no-undef */
// const express = require('express');
// const router = express.Router();
// const { getCustomizerData, postCustomizerData } = require('../controllers/customizerController');
// const authMiddleware = require('../middlewares/authMiddleware.js')
// router.get('/customizer', authMiddleware, getCustomizerData);
// router.post('/customizer', authMiddleware, postCustomizerData);

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  getCustomizerData,
  postCustomizerData,
  getCustomizerDatabyid,
updateCustomizerDatabyid} = require("../controllers/customizerController");
const verifyToken = require('../middlewares/authMiddleware.js');

router.get('/customizer', verifyToken, getCustomizerData);
router.post('/customizer', verifyToken, postCustomizerData);
//  getCustomizerData,
//    postCustomizerData,
//    getCustomizerDatabyid,
//    updateCustomizerDatabyid,

router.get("/customizer/:pid", verifyToken, getCustomizerDatabyid);
router.get("/customizerData/:pid", getCustomizerDatabyid);
router.patch("/customizer/:pid", verifyToken, updateCustomizerDatabyid);
   (module.exports = router);
