import React, { useEffect, useState } from 'react';
import './compStyles/Products.css';
import Axios from 'axios';

const Products = () => {
	const [products, showProducts] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:3001/getProducts').then((response) => {
			showProducts(response.data);
		});
	}, []);

	return (
		<div className='prodBod'>
			<h1>Our Products</h1>
			<h5>(Don't want to look for it? We hear you.)</h5>

			<div className='searchBar'>
				<form>
					<input
						className='searchButton'
						type='button'
						name='search'
						value='search'
						// onClick={getProducts}
					/>

					<input
						className='actualSearchBar'
						type='text'
						name='comments'
						placeholder='ex. Smart TV'
					/>
				</form>
			</div>
			<div className='productInfo'>
				{products.map((val) => {
					return (
						<div>
							{/* <h5>{val.name}</h5> */}
							<button>Add to cart</button>
							<br />
							<br />
							<img src={val.image} alt='product' />
							<br />
							<h5>{val.name}</h5>
							{/* <p className='price'>${val.price}</p> */}
							{/* <button>Add to cart</button> */}
							<p>{val.descrip}</p>
							<p className='price'>${val.price}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Products;
