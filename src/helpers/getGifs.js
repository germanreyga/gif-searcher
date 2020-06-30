export const getGifs = async (category) => {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=5&api_key=GeBfPnJoxzniQLT6fv9Qgb26cMD9oOGq`;

  const res = await fetch(apiUrl);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
