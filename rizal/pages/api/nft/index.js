import dbConnect from '../../../utils/dbConnect'
import NFT from '../../../models/NFT'

dbConnect();

export default async (req, res) => {
	const { method } = req;
	
	switch (method) {
		case 'GET':
		try{
			const NFTs = await NFT.find({})

			res.status(200).json({success: true, data:NFTs})
			console.log(res.json())
		}catch (error) {
			res.status(400).json({success: false})
			console.log(res.json())
		}
		case 'POST':
		try{
			const NFT = await NFT.create(req.body)

			res.status(201).json({success: true, data: NFT })
			console.log(res.json())
		}catch (error) {
			res. status(400).json({success: false})
			console.log(res.json())
		}
		break;
		default:
			res.status(400).json({success: false})
	
	}







}