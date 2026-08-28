module.exports = {
	apps: [
		{
			name: "express-server",
			script: "./index.js",
			cwd: "/var/www/html",
			env_production: {
				NODE_ENV: "production",
			},
		},
	],
};
