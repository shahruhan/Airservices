const jwt = require('jsonwebtoken');
const Customer = require('../models/customerSchema');

const authenticateCustomer = async (req, res, next) => {
  
    try{

        const rootCustomer = await Customer.find();

        if(!rootCustomer) {throw new Error('Customer not found')}

        req.rootCustomer = rootCustomer;
        req.CustomerID = rootCustomer._id;

        next();

    }catch (err) {
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}

module.exports = authenticateCustomer;