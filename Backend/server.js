import express from 'express';
import data from './data.js';
// import { Link,useParams } from "react-router-dom"

const app = express();

app.get("/api/products/:id", (req, res) =>{
    //  const params = useParams();

    const product = data.products.find((x) => x._id ===  req.params.id);
    console.log(product)
    //  console.log(req.query);
    if (product) {
      
        res.send(product);
         console.log(product);
    }else {
        res.status(404).send({message: 'Product not Found' })
         console.log({message: 'Product not Found' });
    }

    //  res.send('a car with good has a good ' + req.params.id);
    
    // res.send(data.products + req.params.id);
    // const moxiz = data.products.find(post => post.id === JSON.parse (req.params.id));

    // let query = Object.keys(req.query).length !== 0? req.query.field : null;

    // const jsonData = moxiz ? query ? {[query] : data[query]} : moxiz: {message: 'page Not FOund!'} ;
    // res.json(jsonData)
})

app.get('/api/products', (req,res) => {
    res.send(data.products);
});

app.get('/', (req,res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});