const FIELDS = "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
const INSTAGRAM_CACHE_TTL_MS = 12 * 60 * 60 * 1000;
// const INSTAGRAM_CACHE_TTL_MS = 10 * 1000;

let cachedMedia = null;
let cacheUpdatedAt = 0;

export async function getInstagramMedia() {
	const now = Date.now();

	if (cachedMedia && now - cacheUpdatedAt < INSTAGRAM_CACHE_TTL_MS) {
		console.log("Instagram cache hit");
		return cachedMedia;
	}

	console.log("Refreshing Instagram cache");

	const url = new URL("https://graph.instagram.com/me/media");

	url.searchParams.set("fields", FIELDS);
	url.searchParams.set("limit", "25");
	url.searchParams.set("access_token", process.env.INSTAGRAM_ACCESS_TOKEN);

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error(`Instagram API error: ${response.status}`);
		}

		const data = await response.json();

		cachedMedia = data;
		cacheUpdatedAt = Date.now();

		return data;
	} catch (error) {
		if (cachedMedia) {
			console.warn("Instagram refresh failed; returning stale cache");
			return cachedMedia;
		}

		throw error;
	}
}
