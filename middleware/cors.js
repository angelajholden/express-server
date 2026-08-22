import cors from "cors";

const allowedOrigins = ["https://practicelayouts.com"];

const corsMiddleware = cors({
	origin(origin, callback) {
		if (!origin || allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		return callback(new Error("Not allowed by CORS"));
	},
});

export default corsMiddleware;
