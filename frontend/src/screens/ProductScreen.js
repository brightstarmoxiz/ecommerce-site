import React, { useEffect } from 'react';
// import product from '../component/Product';
import Rating from '../component/Rating'
import { Link,useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { detailsProduct } from '../actions/productActions';




export default function  ProductScreen (props) {
    
      const params = useParams();
    //    const product = data.products.find((x) => x._id === params.id);
  
  
  const dispatch = useDispatch();  
   const productId =params.id;
  const productDetails = useSelector ((state) => state.productDetails)
  const {loading, error, product} = productDetails;
  console.log(product); //  console.log(props.match.params.id)
//  console.log(productDetails);
 //console.log(detailsProduct);
useEffect(() => {
  dispatch(detailsProduct());
  
},[dispatch,product])
 console.log(productId);



    return (


        <div>
        {loading ? (
           <LoadingBox></LoadingBox>
       ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
        ):(
      
            <div > 
            <Link to="/">Back to result</Link>
           <div className="row top">
           <div className="col-2">
            <img  className='large' src={product.image} alt={product.name}/>
</div>
<div className="col-1">
<ul>
    <li>
        <h1>{product.name}</h1>
    </li>
    <li>
        <Rating
        rating= {product.rating}
        numReviews={product.numReviews}
        ></Rating>
    </li>
    <li>
        price : N{product.price}
    </li>
    <li>Description
        <p>{product.description}</p>
    </li>
</ul>
</div>
<div className="col-1">
<div className="card card-body">
    <ul>
        <li>
            <div className='row'>
                <div>price</div>
                <div className="price">N{product.price}</div>

            </div>
        </li>
        <li>
            <div className="row">
                <div>Status</div>
                <div>{product.countInStock> 0 ? (
                <span className="success">In Stock</span>
                ) : (
                    <span className="danger">Unavailable</span>
                )}
                </div>
            </div>
        </li>
        <li>
            <button className="primary block"> Add to cart</button>
        </li>
    </ul>
</div>
</div>
           </div>
           
        </div>
    )}
      </div>




    
    )
}