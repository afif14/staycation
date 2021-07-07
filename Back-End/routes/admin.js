const router = require('express').Router();
const adminController = require('../controllers/adminController');
const { uploadSingle, uploadMultiple } = require('../middlewares/multer');
const auth = require('../middlewares/auth');

router.get('/dashboard', adminController.viewDashboard);

//endpoint category
router.get('/category', adminController.viewCategory);
router.post('/category', adminController.addCategory);
router.put('/category', adminController.editCategory);
router.delete('/category/:id', adminController.deleteCategory);

//endpoint bank
router.get('/bank', adminController.viewBank);


//endpoint item
router.get('/item', adminController.viewItem);
router.post('/item', uploadMultiple, adminController.addItem);
router.get('/item/show-image/:id', adminController.showImageItem);
router.get('/item/:id', adminController.showEditItem);
router.put('/item/:id', uploadMultiple, adminController.editItem);
router.delete('/item/:id/delete', adminController.deleteItem);

//endpoint booking
router.get('/booking', adminController.viewBooking);

module.exports = router;