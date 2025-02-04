let express=require('express'),
app=express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/views/blog-template.html')
});

app.listen(process.env.PORT||8080,_=>console.log('started'))
modules.exports=app
