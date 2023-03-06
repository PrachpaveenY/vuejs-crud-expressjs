const express = require('express')
const studentRoute = express.Router();

let StudentModel = require('../models/Student');

// GET = all data
studentRoute.route('/').get((req, res, next) =>{
    StudentModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// POST = Create data
// req.body เป็นการเอาข้อมูล
studentRoute.route('/create-student').post((req, res, next) => {
    StudentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// GET = Edit data
// req.params.id = การเข้าถึง id จะอยู่ใน req.params.id
studentRoute.route('/edit-student/:id').get((req, res, next) => {
    StudentModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

// PUT = Update data
// $set: req.body = เป็นการเซ็ตข้อมูลตัวใหม่, ถ้าได้ id มา, โดยข้อมูลที่จะรับมา มาจาก req.body
studentRoute.route('/update-student/:id').put((req, res, next) => {
    StudentModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            // console.log('Student successfully updated');
        }
    })
})

// DELETE = Delete data
// findByIdAndDelete() = ถ้า id เข้ากัน ก็ให้ลบ
// msg: data = เก็บ data ไว้ในนี้
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
    StudentModel.findByIdAndDelete(req.params.id, (error, data) => {
        if(error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentRoute;