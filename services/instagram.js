const FIELDS = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";

export async function getInstagramMedia() {
	const url = new URL("https://graph.instagram.com/me/media");

	url.searchParams.set("fields", FIELDS);
	url.searchParams.set("limit", "25");
	url.searchParams.set("access_token", process.env.INSTAGRAM_ACCESS_TOKEN);

	const response = await fetch(url);

	if (!response.ok) {
		throw new Error(`Instagram API error: ${response.status}`);
	}

	return response.json();
}
