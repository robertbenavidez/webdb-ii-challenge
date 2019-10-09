const router= require('express').Router();

const Cars = require('../cars/cars-model.js')

///////GET
router.get('/', (req, res) => {
    
    Cars.get()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(error => {
            res.status(500).json({ message: "Unable to retrieve accounts"})
        })

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    Cars.getById(id)
        .then(car => {
        res.status(200).json(car)
        })
        .catch(err => {
        res.status(500).json({ message: 'Failed to get schemes' });
        });
    });

// Add new car

router.post('/', (req, res) => {
    const carData = req.body;
    
    Cars.insert(carData)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add car data' })
        });
});

// Delete car

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    Cars.remove(id)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

// Update car

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    
        Cars.update(id, changes)
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to update car data'}, err)
        })
})
})

module.exports = router;