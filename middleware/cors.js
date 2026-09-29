import cors from "cors";

const corsMiddleware = cors({
	origin(origin, callback) {
		if (
			!origin ||
			origin === "https://practicelayouts.com" ||
			origin.endsWith(".practicelayouts.com") ||
			origin === "https://angelajholden.github.io"
		) {
			return callback(null, true);
		}

		return callback(null, false);
	},
});

export default corsMiddleware;
