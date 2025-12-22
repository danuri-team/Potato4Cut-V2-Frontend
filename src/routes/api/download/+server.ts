import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const imageUrl = url.searchParams.get("url");

  if (!imageUrl) {
    return new Response("Missing url parameter", { status: 400 });
  }

  try {
    const response = await fetch(imageUrl);

    if (!response.ok) {
      return new Response("Failed to fetch image", { status: response.status });
    }

    const blob = await response.blob();
    const filename = url.searchParams.get("filename") || "image.png";

    return new Response(blob, {
      headers: {
        "Content-Type": response.headers.get("Content-Type") || "image/png",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Download proxy error:", error);
    return new Response("Failed to download image", { status: 500 });
  }
};
