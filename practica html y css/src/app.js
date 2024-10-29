//quiero que levantes un servidor con express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render(path.join(__dirname, './views/index.ejs'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})

//como se usa nodemon dime
//npx nodemon app.js

