export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=g5JNluELoqIstt74H87ECyDodwKrd39f&q=${category}&limit=5`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(({ id, title, images }) => ({
      id: id,
      title: title,
      url: images.downsized_medium.url,
    }));
    return gifs;
  };