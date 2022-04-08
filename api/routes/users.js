const express = require('express');
const route = express();
const mongoos = require('mongoose');
const usermodels = require('../models/user');
const multer = require('multer');
const authchak = require('../Middleware/chack-auth')
const getUser = require('../controler/user')
const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, './uplode/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const uplode = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

////////////////////////get User ////////////////////////////////////
route.get('/', getUser.getUser);

// route.get('/byname', getUser.getuesername);
////////////////////////post User ////////////////////////////////////
// uplode.single('userImage'),
route.post('/', uplode.single('userImage'), (req, res) => {
    console.log(req);
    const user = new usermodels({
        _id: new mongoos.Types.ObjectId(),
        userName: req.body.userName,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.gender,
        userImage: '/uplode/' + req.file.filename,
        date: Date(Date.now()),
        data:req.body.data
    });
    user.save()
        .then(result => {
            res.status(201).json(result)
        }).catch(err => {
            res.status(500).json("fasdfa", err.errors)
        });

});
////////////////////////get User by id ////////////////////////////////////
// route.get('/:userId', authchak, getUser.getuserById);
////////////////////////PUt(update) User ////////////////////////////////////
route.put('/:userId', authchak, getUser.updateUser);
////////////////////////remove   User ////////////////////////////////////

route.delete('/:userId', authchak, getUser.deletuser);
route.delete('/:username', authchak, getUser.getUser);


module.exports = route;