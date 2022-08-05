import React from 'react';
import Rating from './Rating'

export default function Product (props) {
    const {product} = props
    return (
        <div key={product._id} className="card">
        <a href={`/product/${product._id}`}>
          <div  style={{height:"34vh",overflowY:"hidden",textAlign:"center"}}>
            <img style={{width:"100%"}} className="medium" src={[product.image]} alt={product.name}/>
            </div>
        </a>
        <div className="className-body">
        <a href={`/product/${product._id}`}>
           <h2>{product.name}</h2>
         </a>
       <Rating rating ={product.rating} numReviews={product.numReviews}
       ></Rating>
         <div className="price">
          <strong> N{product.price} </strong>
         </div>
        </div>
          </div>
  
    )
}