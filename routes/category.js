const express = require('express');
const {getCategories, createCategory} = require('../controllers/category');


const router = express.Router();
// router.get('/', getCategories);
// router.post('/', createCategory); 
router.route('/').get(getCategories).post(createCategory); // short hand of two above lines

module.exports = router;
