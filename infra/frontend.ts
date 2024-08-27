import { auth } from "./auth";

export const site = new sst.aws.SvelteKit("Frontend", {
	path: "packages/frontend",
	link: [auth.authenticator],
});
