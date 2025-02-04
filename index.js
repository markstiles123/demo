let express=require('express'),
app=express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/blog-template.html')
});

app.listen(8080,_=>console.log('started'))