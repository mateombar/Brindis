const express = require('express');
const router = express.Router();
const Business = require('../models/business');

router.get('/encuentros', async (req, res) => {
    const business = await Business.find();
    res.render('encuentros.html', {
        business
    });
});

router.get('/', (req, res) => {
    res.render('home.html', { title: 'Home' });
});
router.get('/info', (req, res) => {
    res.render('info.html', { title: 'Info' });
});
router.get('/carta', (req, res) => {
    const l_array = new Array();
    res.render('carta.html', { l_array });

});
router.post('/add', async (req, res) => { //Add data
    const businessAdd = new Business(req.body);
    await businessAdd.save();
    res.redirect('/encuentros');
});

router.post('/find', async (req, res) => {
    const businessAdd = req.body;
    const business = await Business.find();
    const l_array = [];
    for (let lCheck of Object.keys(businessAdd)) {
        var l = businessAdd[lCheck];
        try {
            for (const i of business) {
                console.log("i: " + i);
                console.log("l: " + l);
                if (i.restaurant == l.value) {
                    l_array = [i.toString];
                    console.log("l_array: " + l_array);
                } else {
                    console.log(i.restaurant + " - " + l)
                }

            }
        } catch (error) {
            console.log("ERROR " + l_array);
        }
    }
    res.render('carta.html', {
        l_array
    });

});

router.get('/edit/:id', async (req, res) => {
    const { id } = await req.params;
    const business_edit = await Business.findById(id);
    res.render('edit.html', {
        business_edit
    });
});

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await Business.update({ _id: id }, req.body); //Find the task with id 'id', then replaced by the one that comes from our frontend
    res.redirect('/encuentros');
});

router.get('/delete/:id', async (req, res) => { //Delete Buttom
    const { id } = req.params;
    await Business.remove({ _id: id });
    res.redirect('/encuentros');
});


module.exports = router;