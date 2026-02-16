export async function getCatData({ url }: { url: string }) {
  const response = await fetch(url, {
    headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cats');
  }

  return response.json();
}
