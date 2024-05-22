const axios = require('axios');

const fetchProducts = async (req, res) => {
	// take from the header comming from the front end
	const shopDomain = req.headers['shopifystoredomain'];
	const accessToken = req.headers['shopifyaccesstoken'];
	try {
		const response = await axios.get(`https://${shopDomain}/admin/api/2022-01/products.json`, {
			headers: {
				'X-Shopify-Access-Token': accessToken 
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const fetchProductsById = async (req, res) => {
	let productId = req.params.id
	console.log("dhkh",productId)
	try {
		const response = await axios.get(`https://${process.env.SHOP_DOMAIN}/admin/api/2022-01/products/${productId}.json`, {
			headers: {
				'X-Shopify-Access-Token': process.env.ACCESS_TOKEN
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const createProduct = async (req, res) => {
	const shopDomain = req.headers["shopifystoredomain"];
  const accessToken = req.headers["shopifyaccesstoken"];
	console.log("------------",shopDomain,accessToken,req.body)
	try {
		const { title, price, body_html } = req.body;
		const productData = {
			product: {
				title,
				body_html,
				variants: [{ price }]
			}
		};
		const response = await axios.post(`https://${shopDomain}/admin/api/2022-01/products.json`, productData, {
			headers: {
				'X-Shopify-Access-Token': accessToken 
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
//updateProductby id

const fetchOrders = async (req, res) => {
	const shopDomain = req.headers["shopifystoredomain"];
  const accessToken = req.headers["shopifyaccesstoken"];
	try {
		const response = await axios.get(`https://${shopDomain}/admin/api/2022-01/orders.json`, {
			headers: {
				'X-Shopify-Access-Token': accessToken 
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

const fetchCustomers = async (req, res) => {
	const shopDomain = req.headers["shopifystoredomain"];
  const accessToken = req.headers["shopifyaccesstoken"];
	try {
		const response = await axios.get(`https://${shopDomain}/admin/api/2022-01/customers.json`, {
			headers: {
				'X-Shopify-Access-Token': accessToken 
			}
		});
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
//add to chart shopify
const addToCart = async (req, res) => {


	
		try {								
			const  {Details} = req.body;
			console.log("Details", Details);
			const shopDomain = Details.shopDomain;
			const variant_id = Details.variant_id;
			const quantity = 1;
			const response = await axios.post(`https://${shopDomain}/cart/${variant_id}:${quantity}`);
			res.json(response.config.url);
			console.log("response", response.config.url);
       
        }
		catch (error) {
			console.error(error);
		}	
		
	}
//fetch cart shopify	

module.exports = {
	fetchProducts,
	createProduct,
	fetchOrders,
	fetchCustomers,
	fetchProductsById,
	addToCart
};



