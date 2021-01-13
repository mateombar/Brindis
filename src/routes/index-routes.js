const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'index' });
});
router.get('/home', (req, res) => {
    res.render('views/home.html', { title: 'Home' });
});
router.get('/info', (req, res) => {
    res.render('views/info.html', { title: 'Info' });
});
router.get('/carta', (req, res) => {
    const l_array = new Array();
    res.render('views/carta.html', { l_array });

});



module.exports = router;