const express = require('express');
const app = express();
app.use(express.static('public'));

/* routing */
const mainRouter = require('./routers/main');


app.use('/',mainRouter); 

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    }); 

    