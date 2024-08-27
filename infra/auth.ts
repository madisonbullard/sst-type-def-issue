const GithubClientID = new sst.Secret("GithubClientID", "REPLACE_ME_OR_REMOVE");
const GithubClientSecret = new sst.Secret(
	"GithubClientSecret",
	"REPLACE_ME_OR_REMOVE",
);

export const auth = new sst.aws.Auth("Auth", {
	authenticator: {
		link: [GithubClientID, GithubClientSecret],
		handler: "packages/auth/src/functions/index.handler",
	},
});
