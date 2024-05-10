/* eslint-disable no-undef */
const express = require("express");
const {
	addProfileDetails,
	getUserProfileController,
	getUserController,
	updateUserController,
	updatePasswordController,
	resetPasswordController,
	deleteProfileController,
	createSuperAdminManagerController,
	getListSuperAdminManagerController,
	createStoreOwnerManagerController,
	getListStoreOwnerManagerController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");
const checkSuperAdmin = require('../middlewares/checkSuperAdmin')
const multer = require('multer');
const router = express.Router();
// Multer configuration for file upload
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '');
	},
	filename: function (req, file, cb) {
		cb(null, new Date().toISOString() + '-' + file.originalname);
	}
});

const upload = multer({ storage: storage });

//routes
//POST USER DETAILS||POST
router.post('/addprofiledetails', upload.single('profileImage'), addProfileDetails)

//GET USER DETAILS || GET
router.get('/getprofilelist', getUserProfileController);  //accessible to

// GET USER || GET
router.get("/getuser/:id", getUserController);

// UPDATE PROFILE
router.put("/updateuser", updateUserController);

//password update
router.post("/updatepassword", updatePasswordController);

// RESET PASSWORD
router.post("/resetpassword", resetPasswordController);

// delete USER
router.delete("/deleteuser/:id", deleteProfileController);


//SUPERADMIN MANAGER
router.post('/super-admin-manager/create', createSuperAdminManagerController)
router.get('/super-admin-manager/getlist', getListSuperAdminManagerController)

//STORE OWNER MANAGER
router.post('/store-owner-manager/create', createStoreOwnerManagerController)
router.get('/store-owner-manager/getlist', getListStoreOwnerManagerController)


module.exports = router;
