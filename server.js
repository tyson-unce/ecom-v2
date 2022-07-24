const express = require('express');
const app = express();
const cors = require('cors');

const mysql = require('mysql');
// dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 8080, () => {
	console.log('Server is Connected!');
});

const connection = mysql.createConnection({
	host: 'ecomv2db.cn4rq0zlq00y.us-east-1.rds.amazonaws.com',
	user: 'tysonunce',
	password: 'Thebeastmode7!',
	database: 'ecomv2',
	port: 3306,
});

app.get('/', (req, res) => {
	connection.query('SELECT * FROM products', (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.send(result);
		}
	});
});

app.get('/getProductsPriceLow', (req, res) => {
	connection.query(
		'SELECT * FROM products ORDER BY price ASC',
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

app.get('/getProductsPriceHigh', (req, res) => {
	connection.query(
		'SELECT * FROM products ORDER BY price DESC',
		(err, result) => {
			if (err) {
				console.log(err);
			} else {
				res.send(result);
			}
		}
	);
});

// SPECIFYING IF CONNECTION TO OUR DATABASE IS SUCCESSFUL OR UNSUCCESSFUL
connection.connect((err) => {
	if (err) {
		console.log(err.message);
	}
	console.log('AWS is LIT');
});
