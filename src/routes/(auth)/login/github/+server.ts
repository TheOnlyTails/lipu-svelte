import { dev } from "$app/environment";
import { githubAuth } from "$lib/server/lucia";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ cookies, setHeaders }) => {
	const [url, state] = await githubAuth.getAuthorizationUrl();
	cookies.set("github_oauth_state", state, {
		httpOnly: true,
		secure: !dev,
		path: "/",
		maxAge: 60 * 60,
	});

	setHeaders({ Location: url.toString() });
	return new Response(null, { status: 302 });
};
