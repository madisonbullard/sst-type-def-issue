import { Resource } from "sst";

const authUrl = Resource.AuthAuthenticator.url;

export const load = async () => {
	return {
		authUrl,
	};
};
