import {React, useContext} from 'react';
import ProductsContext from '../contexts/ProductsContext';

const Products = () => {

const {products, setProducts} = useContext(ProductsContext);

const formSubmitted = (e) => {
    e.preventDefault()
    let { newTitle, newPrice } = e.target;
    // let newId = products[products.length - 1].id + 1;

    let newItem = {
        // id: newId,
        title: newTitle.value,
        price: newPrice.value
    }
    setProducts(prev => [...prev, newItem]);
}

const deletedItem = (idx) => {
    let newState = [...products];
    newState.splice(idx, 1)

    setProducts(newState);
}

  return (
    <div>
        <form onSubmit={formSubmitted}>
            <input type='text' name='newTitle' placeholder='Product' />
            <input type='number' name='newPrice' placeholder='Price' />
            <input type='submit' value='Add' />
        </form>
        <h3>Products</h3>
        <ul style={{listStyle:'none'}}>
            {products.map((product, idx) => {
                return(
                    <li key={idx}>
                        {idx + 1} {product.title} <strong style={{color:'blue'}}>{product.price}</strong>
                        <button onClick={() => {deletedItem(idx)}}>X</button>
                    </li>
                )
            })}
        </ul>
    </div>
  )
};

export default Products;