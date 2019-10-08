const router= require('express').Router();

const Cars = require('../cars/cars-model.js')

///////GET
router.get('/', (req, res) => {
    //req.query.limit = {limit: 5}
    Cars.get()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            res.status(500).json({ message: "Unable to retrieve accounts"})
        })
})

module.exports = router;