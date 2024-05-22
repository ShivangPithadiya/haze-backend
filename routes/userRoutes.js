/* eslint-disable no-undef */
const express = require("express");
const {
  addProfileDetails,
  getUserProfileController,
  getUserController,
  updateUserController,
  getUserByShopDomain,
  updateUserByShopDomain,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
  getAllStoreOwnersController,
  createSuperAdminManagerController,
  getListSuperAdminManagerController,
  updateSuperAdminManagerStatusController,
  createStoreOwnerManagerController,
  getListStoreOwnerManagerController,
  updateStoreOwnerManagerStatusController,
  updateStoreOwnerStatusController,
  updateStoreOwnerStatusBySubscriptionController,
  deleteStoreOwnerController,
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

//GET USER BY SHOP DOMAIN || GET
router.get("/getuserbyshopdomain", getUserByShopDomain);

//UPDATE USER BY SHOP DOMAIN || PUT
router.put("/updateuserbyshopdomain", updateUserByShopDomain);


//password update
router.post("/updatepassword", updatePasswordController);

// RESET PASSWORD
router.post("/resetpassword", resetPasswordController);

// delete USER
router.delete("/deleteuser/:id", deleteProfileController);

//SUPER-ADMIN
router.get('/super-admin/getlist', getAllStoreOwnersController)

//SUPERADMIN MANAGER
router.post('/super-admin-manager/create', createSuperAdminManagerController)
router.get('/super-admin-manager/getlist', getListSuperAdminManagerController)
router.put('/super-admin-manager/:userId', updateSuperAdminManagerStatusController)

//STORE OWNER MANAGER
router.post('/store-owner-manager/create', createStoreOwnerManagerController)
router.get('/store-owner-manager/getlist', getListStoreOwnerManagerController)
router.put('/store-owner-manager/:userId', updateStoreOwnerManagerStatusController)


//UPDATE STORE-OWNER STATUS
router.put('/store-owner/:userId', updateStoreOwnerStatusController)
//DELETE STORE-OWNER 
router.delete('/store-owner/:userId', deleteStoreOwnerController)

// UPDATE STORE-OWNER BY SUBSCRIPTION
router.put('/store-owner/:userId', updateStoreOwnerStatusBySubscriptionController)
module.exports = router;
