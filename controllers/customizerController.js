const Customizer = require('../models/customizerModel');

const getCustomizerData = async (req, res) => {
	try {
		const data = await Customizer.findOne();
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};


const getCustomizerDatabyid = async (req, res) => {
	try {
		//find by pid
		console.log(req.params.pid)
		const data = await Customizer.findOne({pid:req.params.pid});
		res.status(200).json(data);
		// const data = await Customizer.findById(req.params.pid);
		// res.status(200).json(data);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}

	
};

const updateCustomizerDatabyid = async (req, res) => {
	try {
		
		const newData = req.body; // Assuming the data is sent in the request body
		const data = await Customizer.updateOne(newData); // Pass the entire req.body object
		res.status(201).json(data);

	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}

	
}



const postCustomizerData = async (req, res) => {
	try {
		const newData = req.body; // Assuming the data is sent in the request body
		const data = await Customizer.create(newData); // Pass the entire req.body object
		res.status(201).json(data);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

module.exports = {
  getCustomizerData,
  postCustomizerData,
  getCustomizerDatabyid,
  updateCustomizerDatabyid,
};
