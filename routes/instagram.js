import express from "express";
import { getInstagramMedia } from "../services/instagram.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const data = await getInstagramMedia();

		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Unable to retrieve Instagram media",
		});
	}
});

router.get("/images", async (req, res) => {
	try {
		const data = await getInstagramMedia();

		const images = data.data.filter((item) => item.media_type === "IMAGE").slice(0, 12);

		res.json(images);
	} catch (error) {
		console.error(error);
		res.status(500).json({
			error: "Unable to retrieve Instagram images",
		});
	}
});

export default router;
