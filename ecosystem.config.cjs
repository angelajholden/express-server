module.exports = {
	apps: [
		{
			name: "express-server",
			script: "./index.js",
			cwd: "/var/www/html",
			env: {
				NODE_ENV: "production",
			},
		},
	],
};
