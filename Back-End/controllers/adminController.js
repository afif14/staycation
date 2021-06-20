const Category = require('../models/Category');
const Bank = require('../models/Bank');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
    viewDashboard: (req, res) => {
        res.render('admin/dashboard/view_dashboard');
    },
    viewCategory: (req, res) => {
        res.render('admin/category/view_category');
    },
    addCategory: async(req, res) => {
        const {name} = req.body;
        await Category.create({name});
        res.redirect('/admin/category');
    },

    viewBank: async(req, res) => {
        const bank = await Bank.find();
        const alertMessage = req.flash('alertMessage');
        const alertStatus = req.flash('alertStatus');
        const alert = { message: alertMessage, status: alertStatus};
        try {
           res.render('admin/bank/view_bank', {
            title: "Staycation | Bank",
            alert,
            bank
        }) 
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
        
    },
    addBank: async(req, res) => {
        try {
            const { name, nameBank, nomorRekening } = req.body;
            await Bank.create({
                name,
                nameBank,
                nomorRekening,
                imageUrl : `images/${req.file.filename}`
            });
            req.flash('alertMessage', 'Success Add Bank');
            req.flash('alertStatus', 'Success');
            res.redirect('/admin/bank');
        } catch (error) {
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
    },
    editBank: async(req, res) => {
        try {
        const { id, name, nameBank, nomorRekening} = req.body;
        console.log(name);
        const bank = await Bank.findOne({ _id: id });
            if(req.file == undefined) {
                bank.name = name;
                bank.nameBank = nameBank;
                bank.nomorRekening = nomorRekening;
                await bank.save();
                req.flash('alertMessage', 'Success update bank');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/bank');
            } else {
                await fs.unlink(path.join(`public/${bank.imageUrl}`));
                bank.name = name;
                bank.nameBank = nameBank;
                bank.nomorRekening = nomorRekening;
                bank.imageUrl = `images/${req.file.filename}` 
                await bank.save();
                req.flash('alertMessage', 'Success update bank');
                req.flash('alertStatus', 'success');
                res.redirect('/admin/bank');
            }
        } catch (error) {
            console.log(error);
            req.flash('alertMessage', `${error.message}`);
            req.flash('alertStatus', 'danger');
            res.redirect('/admin/bank');
        }
        
    },

    viewItem: (req, res) => {
        res.render('admin/item/view_item');
    },
    viewBooking: (req, res) => {
        res.render('admin/booking/view_booking');
    }

}