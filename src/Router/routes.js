const express = require('express');
const register = require('../controller/register');
const login=require('../controller/login');
const { allEmployer } = require('../controller/AllEmployee');
const { addEmployer } = require('../controller/AddEmployer');
const { removeEmployer } = require('../controller/removeEmployer');
const { apply_leave } = require('../controller/leave');
const { checkrole } = require('../Middleware/role');

const router = express.Router();

router.post('/login',login);
router.post('/register',register);

// admin router

router.get('/allemployer',allEmployer);
router.post('/addemployer',addEmployer)
router.delete('/removeemployer/:id',removeEmployer);
// router.post('/leave',apply_leave);
module.exports ={router};