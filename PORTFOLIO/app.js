//quiero levantar el servidor 
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//quiero mostrar los archivos estaticos y darle los estilo
app.use(express.static(path.join(__dirname, './public')));

app.get('/',(req, res) => {
    res.sendFile('./view/home.html', { root: __dirname });
})

app.get('/login', (req, res) => {
 //quiero mostrar mi vista del login ayuda
    res.sendFile('./view/login.html', { root: __dirname });

});
app.get('/register', (req, res) => {
    //quiero mostrar mi vista del login ayuda       
    res.sendFile('./view/REGISTRARSE.html', { root: __dirname });
});


app.listen(port, () => {
    console.log(` http://localhost:${port}`);
})  