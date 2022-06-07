const express = require('express');
const app = express();
const PORT = 4000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Welcome to API");
});

app.post('/data-mahasiswa/:npm', (req,res)=>{
    res.json({
        npm:req.params.npm,
        nama:req.body.nama,
        tgllahir:req.body.tgllahir,
        tptlahir:req.body.tptlahir,
        agama:req.body.agama,
        hobby:req.body.hobby,
        umur:req.body.umur,
        kampus:req.body.kampus,
        jurusan:req.body.jurusan,
        alamat:req.query.alamat
    })
});

app.listen(PORT,() => console.log(`Listening to http://localhost:${PORT}`))
