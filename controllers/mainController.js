const path = require('path');

module.exports = {
    index : (req,res) => {
        return res.sendFile(path.join(__dirname,'..','views','home.html'))
    }
}



/* module.exports = {
    index : (req,res) =>res.sendFile(path.join(__dirname, '..', 'views', 'index.html')) //a __dirname se agrega '..' porque sino ejecuta solo desde la carpeta raiz. Ahora como se ejecuta desde mainController, hay que salir de la carpeta controller entrar a views y ahi esta index.html
} */