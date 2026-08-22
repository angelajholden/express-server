import rateLimit from "express-rate-limit";

const instagramLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100,
	standardHeaders: true,
	legacyHeaders: false,
});

export default instagramLimiter;
