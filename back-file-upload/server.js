const express = require('express');  
const cors = require('cors');
const app = express();  
const fs = require('fs');

const PORT = 3000;

app.use(cors());

const bodyParser = require('body-parser');  
const multipart = require('connect-multiparty');  

const multipartMiddleware = multipart({  
    uploadDir: './uploads'
});

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: true
}));

app.post('/api/upload', multipartMiddleware, (req, res, next) => {  
    let nombre = req.body;
    res.json({
        'message': 'File uploaded succesfully.',
        'data': req.body,
        'file': req.files.file
    });

    console.log(req.body.sale);
    fs.rename(req.files.upload.path, 'uploads/nuevo.mp3',(err)=>{
        if(err) throw err;
        console.log('Se modifico el nombre');
    })
    //renombrar(req.files.file.path);
});

 renombrar = (nombre)=> {
    console.log(`Se va a renombrar ${nombre}`);
}

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))