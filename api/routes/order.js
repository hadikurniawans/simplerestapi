// routes order
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message : 'Orders were fetched'
	});
});

router.post('/', (req, res, next) => {
	res.status(200).json({
		message : 'Order was created'
	});
});

router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message : 'order details',
		orderId : req.params.orderId

	});
});

router.delete('/:orderId', (req, res, next) =>{
	res.status(200).json({
		message : 'Deleted order'
	});
});

module.exports = router;