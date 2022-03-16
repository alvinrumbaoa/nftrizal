const mongoose = require('mongoose');

const NFTSchema = new mongoose.Schema({
	title: { 
		type: String, 
		unique: true,
	},
	description: {
		type: String,
		required: true,
		maxlength: [100, "Message cannot be more than 100 characters"]
	},
	price: {
		type: Number,
		required: true,
	},
	imgUrl: {
		type: String,
		required: true,
	},
	links: {
		type: String,
		required: true,
	}
})

module.exports = mongoose.models.NFT || mongoose.model('NFT', NFTSchema);