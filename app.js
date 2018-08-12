
var express = require('express');

var app = express();


app.get('/',(req,res)=>{
    console.log('GET / was called')
    res.send('hello hicham')
})

app.post('/',(req,res)=>{
    console.log('POST / was called')
    var dataToBeSend={
        name : 'app',
        version:'1.0.0',
        payload:'hello from post server'
    }
    res.send(dataToBeSend);
})

app.get('/tramInfo',(req,res)=>{
    console.log('GET /tramInfo was called')
    console.log(req.query)
    var depart = req.query.depart
    var arrive =  req.query.arrive
    var result = tramInfo(depart,arrive);
    res.send(result);
})

var traminfo = (depart,arrive)=>{
    if( depart=='karima' && arrive=='irfan'){
        return 'kayna'
    }
    return 'makayna'
}


app.listen(8888,()=>{
    console.log('server started');
})
