import express from "express";
import "dotenv/config";

import corsMiddleware from "./middleware/cors.js";
import instagramLimiter from "./middleware/rateLimit.js";
import instagramRouter from "./routes/instagram.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsMiddleware);

app.use("/instagram", instagramLimiter, instagramRouter);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
