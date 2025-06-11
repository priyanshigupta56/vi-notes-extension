const express = require('express');
const Model = require('../models/UserModel');
const router = express.Router();
require('dotenv').config();
const jwt = require('jsonwebtoken');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            if (err?.code === 11000) { res.status(400).json({ message: 'User already exists' }) } else {
                res.status(500).json({ message: 'Internal server error' });
            }
            console.log(err);
        });
});

//getall
router.get('/getall', (req, res) => {

    Model.find()
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            res.status(500).json(err);

        });
});

router.get('/getbycity/:city', (req, res) => {
    Model.find({ city: req.params.city })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);

            res.status(500).json(err);

        });

});


//getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);

            res.status(500).json(err);

        });
});
//update
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);

            res.status(500).json(err);

        });
});
//delete
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { name, _id, email } = result;
                const payload = { name, _id, email };
                jwt.sign(payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '1d' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'error generating token' });

                        } else {
                            res.status(200).json({ token });
                        }
                    }
                )

            }
            else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);



        });
});

module.exports = router;