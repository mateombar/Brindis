const express = require('express');
const router = express.Router();

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



module.exports = router;