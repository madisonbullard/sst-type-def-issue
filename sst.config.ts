/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
	app(input) {
		return {
			name: "sst-demo-test3",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
			providers: {
				aws: true,
			},
		};
	},
	async run() {
		const { auth } = await import("./infra/auth");
		const frontend = await import("./infra/frontend");

		return {
			auth: auth.url,
			site: frontend.site.url,
		};
	},
});
