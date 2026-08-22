import cors from "cors";

const allowedOrigins = [
	"https://practicelayouts.com",
	"https://www.practicelayouts.com",
	"http://localhost:3000",
	"http://localhost:5173",
];

const corsMiddleware = cors({
	origin(origin, callback) {
		if (!origin || allowedOrigins.includes(origin)) {
			return callback(null, true);
		}

		return callback(new Error("Not allowed by CORS"));
	},
});

export default corsMiddleware;
