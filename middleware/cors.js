import cors from "cors";

const allowedOrigins = ["https://practicelayouts.com", "https://angelajholden.github.io/soho-landing/"];

const corsMiddleware = cors({
	origin(origin, callback) {
		if (!origin || allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		return callback(null, false);
	},
});

export default corsMiddleware;
