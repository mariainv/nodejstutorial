
var express=require('express');

const path=require('path');//cosi' node riconosce i file html

var app=express(); 
app.get('/',function(rec,res){
    res.sendFile(path.join(__dirname,'views/index.html'));

});
//ora proviamo a cambiare la route dopo lo /
app.get('/pagina1',function(rec,res){
    res.send("<h1>Ciao il mondo e' bello</h1>");

});
app.listen(3000,function(){
    console.log('server attivo sulla porta 3000');//messaggio che verra visualizzato sul terminale
}); 

//CODICE PROF
/* const http=require('http');//incude tutti gli script inclusi in http
const fs=require('fs'); //richiamo i moduli che mi permettono di interfacciarmi al file system

//a questo punto uso http per creare un server
const port=8383;
var s=http.createServer();
s.listen(port);//porta sulla quale e' in ascolto il server
console.log('Server attivo su',port);

//il server deve anche reagire a chiamate che arrivano dal client. on gestisce la possibilita di richiamare degli eventi
s.on('request',function(req,res)
    {
        let url=req.url;
        console.log(url);
        fs.readFile('./ciao.html',function(err,data)
        {
            if(err) throw err;
            res.writeHead(200,{'content-Type': 'text/html'});
            res.end(data);


        });
        console.log('Connessione attiva');
        

    }); */