# Instagram Alt Text

In the `express-server` repo, update the Instagram alt-text mapping for any new Instagram images.

Important:

- Do not modify application code unless absolutely necessary.
- Do not change CORS, rate limiting, caching, environment variables, deployment configuration, routes, or unrelated files.
- The expected file to update is `data/instagram-alt-text.json`.

Tasks:

1. Inspect the current Instagram API response using the existing project/environment configuration without exposing the access token.

2. Compare the current Instagram media IDs against the IDs already present in:

```text
data/instagram-alt-text.json
```

3. Identify only media items that are missing from the JSON mapping.

4. For each missing standalone image or carousel cover:
    - Inspect the actual image using its `media_url`.
    - Write concise, useful accessibility alt text based on the visible content.
    - Do not simply copy the Instagram caption.
    - Do not begin with “Image of” or “Photo of.”
    - Keep descriptions factual and concise.
    - Do not infer sensitive or uncertain characteristics.
    - If Heidi, my long-haired brown, black, and white dog, is clearly visible, identify her by name as Heidi.
    - If I am clearly the person shown and that can be determined confidently from the project context, you may identify me as Angela.
    - If the image is purely decorative, use an empty string.

5. Do not generate alt text for videos. Leave unmapped video items to use the existing `alt: ""` fallback.

6. Add only the newly discovered image/carousel IDs to `data/instagram-alt-text.json`.
    - Keep IDs as quoted strings.
    - Preserve all existing entries.
    - Put newest entries at the top of the JSON file.

7. Validate that the JSON remains valid.

8. Do not change `services/instagram.js` unless the current implementation is broken. This task is intended to maintain the mapping file, not refactor the service.

After completing the update, report:

- how many new media items were found
- which IDs were added
- the alt text written for each new item
- whether any image could not be inspected reliably
- whether any files other than `data/instagram-alt-text.json` were changed

If there are no new image or carousel IDs, make no changes and tell me the mapping is already up to date.
