let express=require('express'),
app=express()

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('Congratulations! Your Node.js backend is now live on Vercel. With Vercel’s serverless functions, you’ve deployed a scalable backend without worrying about server management. Remember, as your project grows, it’s important to stay mindful of your dependencies and keep an eye on the build logs for any potential issues.')
});

modules.exports=app
