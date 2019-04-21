const express = require('express');
const router = express.Router();


const Instagram = require('node-instagram').default;
const instagram = new Instagram({
    /*clientId:'49d7c19c2b444d18ad7087b0ffe1ed87',
    clientSecret:'049bc7a4cd7e4f7a84a5f53af19c78a8'*/
});

const redirectUri = 'http://localhost:3000/handleauth'
/*
router.get('/auth/instagram', (req,res) => {
    res.redirect(
        instagram.getAuthorizationUrl(
          redirectUri,
          {
            scope: ['basic', 'public_content'],
          })
      );
});

router.get('/handleauth', async (req,res) => {
    try {
        const code = req.query.code;
        const data = await instagram.authorizeUser(code, redirectUri)
       
        instagram.config.accessToken = data.access_token;

        res.json(data);
    }catch(e) {
        res.json(e);
    }
});*/

//token 1
instagram.config.accessToken = '1159653780.1677ed0.dbc37b35127f42d5acb1f851b71a630a';

router.get('/login', async (req,res) => {
    try {
        const media = await instagram.get('users/self/media/recent');
        console.log(media);

        res.render('login');
    }catch (e){



    }
    /*res.redirect('/auth/instagram');*/
});
//token2
instagram.config.accessToken = '1275971714.1677ed0.7f86640998f045eda7c23bd9fecf19c1';

router.get('/login', async (req,res) => {
    try {
        const media = await instagram.get('users/self/media/recent');
        console.log(media);

        res.render('login');
        

    }catch (e){


    }
    /*res.redirect('/auth/instagram');*/
});

//token3
instagram.config.accessToken = '518445213.be8a385.4a2e45e939c3427d9bc0438e339caf5f';

router.get('/login', async (req,res) => {
    try {
        const media = await instagram.get('users/self/media/recent');
        console.log(media);

        res.render('login');
        
    }catch (e){
        

    }
    /*res.redirect('/auth/instagram');*/
});

router.get('/', (req,res) => {
    res.render('index')
});


module.exports = router;