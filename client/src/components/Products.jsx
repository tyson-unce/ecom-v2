import React, { useState } from 'react';
import './compStyles/Products.css';
import Axios from 'axios';

const Products = () => {
	const [products, showProducts] = useState([]);

	const getProducts = () => {
		Axios.get('http://localhost:3001/getProducts').then((response) => {
			showProducts(response.data);
		});
	};

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
						onClick={getProducts}
					/>

					<input
						className='actualSearchBar'
						type='text'
						name='comments'
						placeholder='ex. Smart TV'
					/>
				</form>
			</div>
			{products.map((val, key) => {
				return (
					<div className='productInfo'>
						<div>
							<h5>{val.name}</h5>
							<img src={val.image} />
							<p>{val.descrip}</p>
							<p>$ {val.price}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Products;
