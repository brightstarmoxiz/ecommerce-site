import express from 'express';
import data from './data.js';
// import { Link,useParams } from "react-router-dom"

const app = express();

app.get("/api/products/:id", (req, res) =>{
    //  const params = useParams();

    const product = data.products.find((x) => x._id ===  req.params.id);
    console.log(product)
    // console.log(req.params);
    if (product) {
      
        res.send(product);
         console.log(product);
    }else {
        res.status(404).send({message: 'Product not Found' })
        // console.log({message: 'Product not Found' });
    }
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